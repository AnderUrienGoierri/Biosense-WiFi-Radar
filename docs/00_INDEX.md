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

6.  **[06. Arquitectura y Teoría Analítica (Legacy)](06_ARQUITECTURA_Y_TEORIA_LEGACY.md)**
    *   Documentación histórica del análisis de requerimientos originales del proyecto.

7.  **[07. Requisitos y Herramientas (DAM)](07_REQUISITOS_Y_HERRAMIENTAS.md)**
    *   Desglose del utillaje software, compiladores y bibliotecas (NPM, Python, Docker) esenciales.

8.  **[08. Integración Nube y Google Colab](08_INTEGRACION_NUBE_Y_COLAB.md)**
    *   Flujo de trabajo remoto para entrenamiento de IA usando aceleradoras GPU (NVIDIA T4/A100) externas.

9.  **[09. Personalización UI y Localización](09_PERSONALIZACION_UI_Y_LOCALIZACION.md)**
    *   Mecánicas de adaptación temática y configuración idiomática base.

10. **[10. Plan de Implementación: Tooltips e I18N Avanzado](10_PLAN_IMPLEMENTACION_TOOLTIPS_I18N.md)**
    *   Tratado de ingeniería sobre la expansión dinámica del sistema multilingüe (Euskera, Inglés, etc.) y la arquitectura de Tooltips informativos para el HUD.

11. **[11. Plan de Implementación Inicial (Root)](11_PLAN_IMPLEMENTACION_INICIAL.md)**
    *   Primer documento de diseño arquitectónico trazado al inicio de la fase de desarrollo.

### 📎 Anexos Multimedia y Archivos Adicionales
*   **[12. Media (Banner/Facebook Post)](12_MEDIA_FB_POST.jpg)**: Material gráfico del proyecto.
*   **[Proyecto Biomédico RuView_ Análisis e Implementación.pdf](Proyecto%20Biom%C3%A9dico%20RuView_%20An%C3%A1lisis%20e%20Implementaci....pdf)**: Documentación extensa fundacional y whitepaper científico.

---

## 🎯 Filosofía del Proyecto

El objetivo a largo plazo de *Biosense-WiFi-Radar* es eliminar la necesidad de wearables invasivos (Holters, bandas pectorales) y cámaras (que comprometen el derecho inalienable a la privacidad del paciente, especialmente en baños o unidades psiquiátricas). Convirtiendo las ondas electromagnéticas ambientales en biosensores de alta precisión matemática.
