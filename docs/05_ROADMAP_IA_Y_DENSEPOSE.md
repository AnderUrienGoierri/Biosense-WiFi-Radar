# 05. Roadmap Tecnológico: IA, DensePose e Interoperabilidad Clínica

Actualmente, *Biosense-WiFi-Radar* posee la infraestructura de telecomunicaciones asíncrona, el renderizador WebGL y el motor matemático de saneamiento de señal. 

El paso lógico tras la ingesta de los datos físicos desde los nodos ESP32 (ver Capítulo 04), es la interconexión con modelos neuronales pre-entrenados y la certificación clínica de la plataforma.

---

## 1. El Puente Convolucional: Transformando CSI en Imágenes

A diferencia de las cámaras, el WiFi no saca "fotos". Produce series temporales de matrices complejas. Para que la IA pueda "ver", primero hay que emular una visión artificial traduciendo la RF al dominio visual.

1.  **De Tensor RF a Spectrograma 2D:** 
    La matriz CSI resultante del DSP se agrupa en ventanas temporales (ej. 2 segundos), formando un Tensor $T \in \mathbb{R}^{S \times N \times W}$ (Subportadoras $\times$ Antenas $\times$ Tiempo).
2.  **Arquitectura ResNet/CNN:**
    Ese tensor se inyecta en una Red Neuronal Convolucional (CNN). En lugar de detectar bordes de píxeles, los kernels convolucionales extraen características de las firmas Doppler y las caídas de amplitud espacial.

---

## 2. RF-DensePose (Esqueletos a través de la pared)

La cima de este proyecto se encuentra en replicar modelos como *DensePose* (originalmente de Meta AI / Facebook para píxeles RGB) pero adaptados a dominios de Radiofrecuencia.

*   **Entrenamiento Cruzado (Teacher-Student):** 
    En la fase de recolección del Dataset real, el sujeto será grabado simultáneamente por una cámara óptica y por la red WiFi en una habitación abierta. 
    La cámara actuará de "Profesor" (extrayendo el wireframe del esqueleto perfecto con MediaPipe) y la red neuronal WiFi ("Estudiante") entrenará con Función de Pérdida (Loss Function) intentando predecir las mismas coordenadas de las 14 articulaciones mayores usando **únicamente** la señal WiFi.
*   Una vez entrenada, la cámara se retira, y la IA del Radar puede inferir esqueletos a oscuras o tras una pared.

---

## 3. Interoperabilidad HL7 FHIR (Conexión Hospitalaria)

Para que *Biosense-WiFi-Radar* abandone el estado de experimento informático y se consolide como un nodo real del ecosistema **IoMT**, debe hablar el lenguaje de los médicos (exactamente como lo hace la suite de *BiosenseLink*).

**El Flujo Semántico de Alerta:**
1.  **El Evento Causal:** El paciente de la habitación 4B sufre un resbalón y su esqueleto colapsa al suelo con un Doppler masivo.
2.  **Inferencia Rápida Edge:** El script de Python detecta que la covarianza excede el umbral y el tensor indica una firma de colapso. Dispara el estado `FALL_DETECTED`.
3.  **Transaccionalidad FHIR:** El motor de integración mapeará instantáneamente la alerta, generando un recurso JSON nativo del estándar **HL7 FHIR R4**.
    *   **Resource Type:** `Observation`
    *   **Code (SNOMED CT):** `129857007` (Fall finding)
    *   **Status:** `final` / `critical`
    *   **Subject:** `Patient/4B`
4.  **Emisión al Servidor:** Este JSON será inyectado por HTTP POST directamente en el servidor *HAPI FHIR* central del hospital, haciendo saltar las alertas en la consola de la estación de enfermería de forma automática, sin falsos positivos por iluminación, privacidad o posiciones de la cámara.
