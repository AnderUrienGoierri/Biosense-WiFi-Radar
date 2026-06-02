# 03. Motor de Simulación Biomecánica y Fisiológica

Al carecer temporalmente del hardware perimetral emisor (ESP32-S3), el proyecto se nutre de un motor de simulación de alta fidelidad, programado íntegramente en JavaScript (`observatory/js/demo-data.js`) y replicado en el backend Python.

Su función no es simplemente generar valores aleatorios, sino emular matemáticamente las complejas perturbaciones de RF que el DSP debe decodificar.

---

## 1. El Generador Estocástico (`DemoDataGenerator`)

La clase `DemoDataGenerator` orquesta la inyección de datos emulando el *Multipath Fading* provocado por un entorno *indoor* (interiores). Para lograr un ruido correlacionado coherente (no puramente aleatorio), el sistema emplea la función matemática `Math.sin()` parametrizada por el tiempo `t`, imitando los movimientos armónicos de baja frecuencia.

### La Función Base de Muestreo

```javascript
// Ruido ambiental (Gaussian-like correlacionado temporalmente)
const noise = (Math.sin(t * 3.1) * Math.cos(t * 2.7) + Math.sin(t * 1.5)) * 0.1;
```

---

## 2. Emulación de Patrones Respiratorios y Cardíacos

Para probar los analizadores clínicos del HUD (Head-Up Display) en los escenarios de `Vital Signs` o `Sleep Monitoring`, el motor implementa funciones oscilatorias que replican la frecuencia fundamental de la ventilación pulmonar y la eyección sístolica del ventrículo izquierdo.

*   **Frecuencia Respiratoria (RPM):** Se simula una onda portadora a $\sim 0.25 \text{ Hz}$ (15 respiraciones por minuto).
*   **Balistocardiografía (BPM):** Se inyecta una modulación superpuesta de muy baja amplitud (ratio de energía cardíaca 10 veces inferior a la respiratoria, como ocurre en la vida real) centrada a $\sim 1.25 \text{ Hz}$ (75 latidos por minuto).

```javascript
// Fragmento simplificado del simulador respiratorio
const rrOsc = Math.sin(t * Math.PI * 0.5) * 0.3; // Respiración
const hrOsc = Math.sin(t * Math.PI * 2.5) * 0.05; // Frecuencia Cardíaca
const vitalSignal = baseSignal + rrOsc + hrOsc + noise;
```

---

## 3. Topología de los Escenarios Simulados

El motor es capaz de recrear 12 escenarios paramétricos distintos que configuran la matriz de covarianza de la señal WiFi:

1.  **Empty Room:** La línea base. Se simula una deriva espectral lenta debido a la aclimatación de la temperatura de los osciladores o los cambios de luz, pero sin componentes Doppler.
2.  **Vital Signs:** Escenario con una única persona tumbada/sedente. El motor bloquea la varianza espacial y se centra en empujar osciladores armónicos de muy baja energía para poner a prueba el algoritmo de detección de picos de FFT.
3.  **Two Walking / Crowd Occupancy:** Al aumentar el número de personas en una sala, los rebotes *Multipath* se intersecan, generando un alto *clutter* constructivo y destructivo. La varianza global del CSI se eleva drásticamente y la "Firma de Movimiento" (Motion Power) entra en zona roja.
4.  **Fall Event / Intrusion:** Simulación de siniestros. Durante un evento de intrusión (ej. abrir una puerta) o una caída, el motor inyecta un escalón repentino (*step function*) en la amplitud temporal, seguido de una reverberación oscilante rápida que emula las extremidades del individuo aterrizando abruptamente en el suelo reflectante.

El simulador, acoplado al módulo de interpolación WebGL (`pose-system.js`), permite mapear todas estas fluctuaciones de RF virtuales en coordenadas $X,Y,Z$ para los avatares *wireframe* 3D mostrados en el Observatory.
