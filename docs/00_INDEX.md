# 📡 Biosense-WiFi-Radar: Documentación Científica y Técnica

Bienvenidos a la suite de documentación de **Biosense-WiFi-Radar**, un sistema Edge IoMT (Internet of Medical Things) de vanguardia diseñado para la monitorización no intrusiva de constantes vitales y el mapeo espacial tridimensional (Through-Wall Sensing) mediante el aprovechamiento pasivo de la capa física de las redes inalámbricas (WiFi CSI).

Este ecosistema ha sido desarrollado combinando el rigor del **Desarrollo de Aplicaciones Multiplataforma (DAM)** con los principios matemáticos y fisiológicos de la **Ingeniería Biomédica**, proyectándose como una pieza clave para la próxima generación de sistemas de soporte a las decisiones clínicas (CDSS).

---

## 📑 Índice de Contenidos

La documentación técnica se divide en los siguientes tratados especializados:

1.  **[01. Arquitectura de Software y Enfoque DAM](01_ARQUITECTURA_Y_DAM.md)**
    *   Diseño Multiplataforma (PWA y Responsive Web Design).
    *   Canales asíncronos de ultra-baja latencia (WebSockets, ArrayBuffers).
    *   Motor de renderizado y Consola Clínica basada en WebGL / Three.js.
    *   Arquitectura bilingüe dinámica In-Vivo (I18N).

2.  **[02. Fundamentos Matemáticos y Procesamiento de Señal (DSP)](02_MATEMATICAS_Y_DSP.md)**
    *   Modelado matemático del Channel State Information (CSI) en la capa MAC/PHY.
    *   El problema del *Phase Offset*: Desenrollado lineal de fase (Linear Phase Unwrapping).
    *   Eliminación de componentes estáticas (Static Clutter Removal) y Transformada Wavelet Continua (CWT) aplicada a radiofrecuencia.
    *   Matrices de Covarianza Espacial y suavizado espectral.

3.  **[03. Motor de Simulación Biomecánica y Fisiológica](03_MOTOR_SIMULACION_FISIOLOGICA.md)**
    *   Modelado de la cinemática de la pared torácica en reposo (Modelo senoidal armónico).
    *   Balistocardiografía por RF (Detección de latidos sub-milimétricos).
    *   Simulación del *Multipath Fading* para detección de marcha y colisiones (Fall Detection).

4.  **[04. Adquisición Hardware y Extracción Física de CSI](04_ADQUISICION_HARDWARE_Y_CSI.md)**
    *   El paradigma del Hardware Comercial vs. Entorno Clínico.
    *   Limitaciones sistémicas del Automatic Gain Control (AGC) en routers de hogar.
    *   Propuesta tecnológica de despliegue mediante tarjetas SoC ESP32-S3 y micro-redes perimetrales (SISO/MIMO).

5.  **[05. Roadmap IA (DensePose) e Interoperabilidad Clínica](05_ROADMAP_IA_Y_DENSEPOSE.md)**
    *   Arquitectura Neuronal Convolucional (CNN / ResNet) aplicada a tensores RF.
    *   Conversión de metadatos espaciales en recursos médicos estandarizados (HL7 FHIR R4).
    *   Flujo de alertas preventivas (Prevención de Caídas, Apneas del Sueño) hacia la red hospitalaria HAPI FHIR.

---

## 🎯 Filosofía del Proyecto

El objetivo a largo plazo de *Biosense-WiFi-Radar* es eliminar la necesidad de wearables invasivos (Holters, bandas pectorales) y cámaras (que comprometen el derecho inalienable a la privacidad del paciente, especialmente en baños o unidades psiquiátricas). Convirtiendo las ondas electromagnéticas ambientales en biosensores de alta precisión matemática.
