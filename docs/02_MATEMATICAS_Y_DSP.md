# 02. Fundamentos Matemáticos y Procesamiento Digital de Señales (DSP)

La base fundamental que permite que *Biosense-WiFi-Radar* infiera posturas humanas, detecte caídas y estime ritmos cardiorrespiratorios a través de paredes reside en el análisis matemático profundo de la información del canal: el **CSI (Channel State Information)**.

Este documento expone los algoritmos matemáticos y el Procesamiento Digital de Señal (DSP) utilizados para aislar la biometría humana de las perturbaciones estáticas del entorno de radiofrecuencia.

---

## 1. El Modelo Matemático del CSI (Channel State Information)

En las redes WiFi modernas (802.11n/ac/ax), los datos se modulan utilizando OFDM (Orthogonal Frequency-Division Multiplexing), dividiendo el espectro de 20 MHz, 40 MHz u 80 MHz en múltiples subportadoras ortogonales.

Para un enlace entre un transmisor ($T_x$) y un receptor ($R_x$) con una sola antena, el canal en el dominio de la frecuencia para la subportadora $k$ se define matemáticamente como:

$$ H_k = |H_k| \cdot e^{j \angle H_k} $$

Donde:
*   $|H_k|$ es la **Amplitud** de la señal en la subportadora $k$.
*   $\angle H_k$ es la **Fase** de la señal en la subportadora $k$.

Cuando las ondas electromagnéticas impactan contra el cuerpo humano (cuyo compuesto mayoritario es agua, un excelente reflector dieléctrico de radiofrecuencia a 5 GHz), sufren dispersión y reflexión (*Multipath Scattering*). 
Cualquier micromovimiento del tórax (respiración) altera la longitud del trayecto de esa reflexión, modificando directamente la Fase ($\angle H_k$).

---

## 2. Saneamiento de la Señal: El Problema de la Fase (Phase Unwrapping)

El hardware WiFi no es un radar biomédico perfecto; sus osciladores locales (LO) en el emisor y receptor sufren de desajustes continuos, conocidos como CFO (Carrier Frequency Offset) y SFO (Sampling Frequency Offset).

Esto provoca que la fase bruta recibida $\tilde{\phi}_k$ esté contaminada por ruido lineal:

$$ \tilde{\phi}_k = \phi_k + 2\pi \frac{k}{N} \Delta t + \beta + Z $$

Donde $\phi_k$ es la fase real que nos interesa, $\Delta t$ es el retraso de muestreo y $\beta$ es el desfase del oscilador central. 

**Solución DSP Aplicada (Desenrollado de Fase Lineal):**
En nuestro pipeline, implementamos una transformación lineal para cancelar los términos de error promediando el diferencial de fase a lo largo de todas las subportadoras de la banda base, permitiéndonos obtener la Fase Sanada ($\hat{\phi}_k$), que resulta altamente sensible al desplazamiento torácico milimétrico del paciente.

---

## 3. Aislamiento Fisiológico: Static Clutter Removal (SCR)

La señal WiFi rebota en las paredes, sillas, camas y espejos antes de llegar al receptor. Para aislar *exclusivamente* a la persona que respira o se mueve, aplicamos un filtro de supresión de elementos estáticos (Static Clutter Removal).

Matemáticamente, restamos la media móvil exponencial (EMA) a los datos complejos:

$$ \hat{H}_k(t) = H_k(t) - \frac{1}{W} \sum_{w=0}^{W-1} H_k(t - w) $$

Esto anula la influencia espectral de la habitación (los muebles no se mueven, por tanto su derivada temporal es 0) y amplifica la **Varianza de Señal**, métrica clave que observamos en los Sparklines del *Observatory*.

---

## 4. Transformadas de Dominio para Biometría

Para extraer los latidos del corazón y las RPM (Respiraciones Por Minuto) desde la señal limpiada $\hat{H}_k(t)$, se aplica la **Transformada Rápida de Fourier (FFT)** o la **Transformada Wavelet Continua (CWT)** en el dominio del tiempo.

*   **Filtro Pasa-Banda Respiratorio:** Aplicamos un Filtro IIR Butterworth acotado en la ventana frecuencial de $[0.1 \text{ Hz}, 0.5 \text{ Hz}]$ (equivalente a 6-30 respiraciones por minuto).
*   **Filtro Pasa-Banda Cardíaco:** Se acota una segunda banda en $[0.8 \text{ Hz}, 2.5 \text{ Hz}]$ (equivalente a 48-150 pulsaciones por minuto).

La energía máxima en esos dos picos de la FFT (Peak Search Algorithm) nos proporciona los valores que alimentan el cuadro de mandos clínico de "Vital Signs" en el simulador.

---

## 5. El Fenómeno Doppler para Detección de Caídas

Cuando un individuo sufre un síncope y cae al suelo, genera un desplazamiento de masa que viaja a gran velocidad relativa respecto a la antena receptora, induciendo un efecto Doppler temporal en las subportadoras de RF.

El sistema monitoriza la **Matriz de Covarianza Espacial**. Cuando la energía cinética supera un umbral estocástico programado (modelado en `demo-data.js` como un pico abrupto de *Variance* con una firma espectral triangular de 1.2 segundos), el algoritmo clasificador etiqueta el marco de tiempo como `FALL_DETECTED`.
