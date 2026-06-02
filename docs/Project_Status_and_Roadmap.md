# Biosense-WiFi-Radar: Project Status & Roadmap

Este documento detalla el progreso actual del proyecto de Telemetría Clínica Perimetral basado en WiFi, las capacidades del motor de simulación, la viabilidad de despliegues con hardware doméstico y los próximos pasos para la implementación con datos físicos reales.

---

## 1. Estado Actual: Fase de Simulación (Proof-of-Concept)

Actualmente, el proyecto se encuentra en una **Fase de Simulación Avanzada**. Hemos desarrollado un ecosistema visual y lógico (Frontend y Backend en Docker) capaz de recibir, interpretar y visualizar matrices de telemetría a través de WebSockets en tiempo real.

### ¿Qué se está simulando ahora mismo?
El sistema utiliza un generador matemático avanzado (`demo-data.js` en el frontend y el servidor Python equivalente en el backend) que emula las alteraciones que sufre la capa física del protocolo WiFi (CSI - Channel State Information) cuando las ondas de radio rebotan contra el cuerpo humano.

*   **Motor de Ruido Correlacionado:** Se inyecta ruido estocástico coherente temporalmente para simular ruido térmico y variaciones ambientales reales.
*   **Atenuación Respiratoria y Cardíaca (RSA/HRV):** Se modulan las amplitudes de subportadoras específicas para emular los micromovimientos de la caja torácica (desplazamientos submilimétricos) que producen la respiración (RPM) y los latidos del corazón (BPM).
*   **Interacciones Físicas y de Entorno:**
    *   **Empty Room:** Simula deriva ambiental lenta (Day/Night drift) y picos de interferencia electromagnética (p.ej. un microondas encendido).
    *   **Two Walking:** Simula el cruce de dos personas, alterando dinámicamente las matrices de covarianza de la señal para emular el *multipath fading*.
    *   **Fall Event:** Emula la firma espectral de alto impacto (Doppler shift repentino) generada durante una caída humana.
    *   **Sleep Monitoring:** Simula patrones fisiológicos complejos, incluyendo cambios de postura, movimiento ocular rápido (REM) mediante ráfagas de alta frecuencia y eventos de apnea simulando paradas respiratorias.

### ¿Qué herramientas y métricas tenemos actualmente implementadas?
1.  **Extracción de Constantes Vitales (Virtual):** Ritmo Cardíaco (BPM), Frecuencia Respiratoria (RPM) y algoritmos lógicos de cálculo de variabilidad cardíaca (HRV).
2.  **Tracking Espacial (Pose Estimation Virtual):** Representación tridimensional en tiempo real (Wireframe) infiriendo posturas corporales (caminar, caer, tumbarse, alcanzar objetos).
3.  **Procesamiento Digital de Señal Visual (DSP):** Visualización en HUD (Head-Up Display) de varianza de señal, potencia de la banda de movimiento, RSSI (Fuerza de señal) y Sparklines reactivos.
4.  **Sistema CDSS-Edge Integrado:** Motor semántico que clasifica estados de "Alerta", "Crouching" o "Caída Crítica", inyectando metadatos para interoperabilidad clínica.

---

## 2. Viabilidad de Detección Real: ¿Podemos usar el WiFi de Casa/Colegio?

Una de las preguntas más críticas en el despliegue de esta tecnología es si podemos realizar telemetría física real utilizando los routers y tarjetas WiFi estándar que tenemos en casa o en un colegio.

### La Respuesta Corta: **No directamente con routers domésticos de fábrica.**

### La Respuesta Detallada (El Reto del Hardware)
Para que las redes neuronales de *DensePose* y nuestro sistema extraigan constantes vitales a través de paredes, necesitan leer el **CSI (Channel State Information)** completo. El CSI es una matriz de números complejos que contiene la **Amplitud** y, críticamente, la **Fase** de cada una de las 64 subportadoras del canal WiFi (en OFDM).

**El problema con el hardware doméstico (Smartphones, Routers caseros sin parchear):**
Por defecto, los fabricantes de chips WiFi (Broadcom, Qualcomm) **bloquean u ocultan** la información de la Fase del CSI a nivel de firmware porque solo utilizan la Amplitud (RSSI) para ajustar la velocidad del internet. Para ellos, el CSI es ruido interno que descartan.

### La Solución Tecnológica (Cómo lo haremos)
Para pasar a la detección real, no necesitamos hardware militar costoso, pero **sí necesitamos hardware específico con firmware modificado o abierto**:

1.  **Tarjetas ESP32-S3 (Solución Low-Cost / Edge):**
    *   El chip ESP32 cuenta con registros internos accesibles en C++ que permiten volcar el CSI crudo a través de la interfaz UART/WiFi. Es la solución ideal para construir balizas emisoras-receptoras perimetrales de muy bajo coste (<10€ por nodo).
2.  **Intel 5300 NIC / Atheros AR9390 (Solución Estación Base):**
    *   Tarjetas de red antiguas de portátiles a las que se les ha inyectado el famoso *Linux 802.11n CSI Tool*. Permiten extracción CSI con resolución a 5GHz.
3.  **Routers ASUS compatibles con Nexmon CSI:**
    *   Ciertos routers (p.ej. ASUS RT-AC86U) con procesadores Broadcom pueden ser flasheados con el firmware "Nexmon", que abre el acceso al CSI.

**Conclusión Operativa:** No podemos descargar un programa en el móvil o en el PC del colegio y mágicamente ver a través de las paredes con el WiFi estándar. Tenemos que instalar un par de placas ESP32-S3 en la pared para emitir/recibir y volcar ese flujo de datos al servidor Docker que hemos construido.

---

## 3. Roadmap: ¿Qué nos falta por implementar?

Para llevar este PoC (Proof-of-Concept) a un MVP (Minimum Viable Product) funcional con el mundo físico, el plan de ruta es el siguiente:

### Fase 1: Arquitectura Hardware e Ingesta de Datos Reales
*   [ ] **Despliegue Hardware (Nodos):** Flashear dos placas ESP32-S3 (una como AP/Emisor, otra como STA/Receptor) con firmware de volcado CSI en C.
*   [ ] **Puente de Telemetría (C++ a Python):** Configurar el puente de comunicación por Serial/UDP desde el ESP32 receptor hasta nuestro servidor FastAPI local.
*   [ ] **Saneamiento de Fase (Phase Sanitization):** Implementar algoritmos matemáticos en Python (Desenrollado de fase lineal / Transformada de Hilbert) para limpiar el desajuste del reloj (CFO/SFO) inherente al hardware físico barato antes de pasarlo a la IA.

### Fase 2: Modelos Predictivos (AI & Machine Learning)
*   [ ] **Entrenamiento/Inferencia del Modelo Base:** Integrar un modelo convolucional (p.ej. CSIDA - CSI-based Deep Attention Network o WiPose) en el pipeline de Python. En este momento, las gráficas visuales y los wireframes que muestra el frontend dejarán de estar generados por `demo-data.js` y pasarán a ser alimentados por las salidas tensoriales del modelo de IA que procesa el CSI físico.
*   [ ] **Pipeline de Clasificación:** Activar inferencia en tiempo real para detección binaria (Presencia vs Vacío) basándose en la covarianza de la matriz CSI entrante, y escalarlo a la red recurrente (LSTM) para análisis de la marcha (Gait Analysis).

### Fase 3: Calibración y Ecosistema Clínico
*   [ ] **Calibración Ambiental:** Desarrollar en el frontend una vista de "Room Calibration" para capturar la huella espectral de la habitación vacía durante 30 segundos y usarla como matriz de cancelación de ruido estático.
*   [ ] **Interoperabilidad FHIR:** Conectar los eventos críticos (p.ej., `fall_detected: true`) del modelo de IA para que generen recursos FHIR (`Observation` / `Flag`) y los inyecten al servidor HAPI FHIR de la red del hospital, alineándolo con la misma filosofía que *BiosenseLink*.
*   [ ] **Stress-Test Físico:** Realizar pruebas de atenuación detrás de pladur, ladrillo y cristal para caracterizar la pérdida de precisión del DensePose.
