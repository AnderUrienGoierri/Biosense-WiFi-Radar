# 📡 Biosense-WiFi-Radar (OmniSight)

**Biosense-WiFi-Radar** es una plataforma de telemetría perimetral inteligente que aprovecha las alteraciones en la capa física de las señales WiFi (CSI - Channel State Information) para inferir constantes vitales, mapeo espacial tridimensional (DensePose) y detección de incidentes en entornos hospitalarios y domiciliarios, operando **a través de paredes (Through-Wall Sensing)** de forma completamente pasiva y preservando la privacidad visual del paciente.

El sistema fusiona el Procesamiento Digital de Señales de Radiofrecuencia (RF-DSP) con redes neuronales convolucionales para actuar como un componente perimetral **Edge IoMT (Internet of Medical Things)**. 

---

## 🌟 Características Principales

1.  **Detección Through-Wall y Preservación de Privacidad**: A diferencia de los sistemas basados en cámaras (RGB u Ópticas), las ondas RF a 5GHz/2.4GHz no registran imágenes físicas, salvaguardando legalmente el derecho a la intimidad del paciente, haciéndolo ideal para baños y habitaciones cerradas.
2.  **Telemetry Data Fusion (En tiempo real)**: Consola de Control de Misión (*Observatory*) basada en Three.js / WebGL, que renderiza matrices de covarianza y reconstrucciones de esqueletos en vivo a 60 FPS mediante WebSockets.
3.  **Virtualización de Constantes Vitales**: Estimación de Frecuencia Respiratoria (RPM) y Latidos por Minuto (BPM) a partir de los subdesplazamientos de amplitud CSI ocasionados por la micro-cinemática torácica.
4.  **Clasificación de Siniestros y Escenarios**: Algoritmos de inferencia capaces de distinguir anomalías espectrales provocadas por caídas bruscas (*Fall Detection*), monitorización de la marcha cruzada (*Multi-Person Walking*) e intrusiones anómalas.
5.  **Multi-Idioma In-Vivo (I18N)**: Arquitectura completamente bilingüe/multi-idioma con motor custom que permite el switch de interfaz clínica en caliente (Inglés, Castellano, Euskara, Polaco) sin recargas.
6.  **CDSS Readiness**: Listo para interoperabilidad semántica clínica, inyectando estados de alerta críticos al ecosistema FHIR del hospital.

---

## 🏗️ Arquitectura del Sistema

El ecosistema está dividido en el frontend de visualización y el puente backend de telemetría:

```text
C:\Dev\05_Projects\Biomedical_IoMT\Biosense-WiFi-Radar\
│
├── 📁 src/
│   ├── 📁 ui/                     # Consola de Misión de Telemetría (Observatory)
│   │   ├── 📁 observatory/        # Motor 3D de WebGL (Three.js), Particle Systems y HUD.
│   │   ├── 📁 utils/              # Motores de Localización I18N y herramientas de red.
│   │   ├── index.html             # Dashboard Comercial UI/UX y Panel de Control PWA.
│   │   └── observatory.html       # Vista puramente clínica / simulador físico.
│   │
│   └── 📁 backend/                # Puente de captura y simulación de RF (En desarrollo).
│
├── 📁 docs/                       # Documentación técnica, estado del arte y Roadmap.
├── docker-compose.yml             # Orquestador del contenedor del servidor de telemetría.
└── README.md                      # Archivo de entrada de la plataforma.
```

---

## 🚀 Despliegue en Entorno de Simulación

Actualmente, la plataforma se distribuye en una fase de "Proof-of-Concept" (Simulación Avanzada).

### Requisitos
*   **Docker Desktop** y Docker Compose (Para el servidor de telemetría local).
*   Un navegador compatible con **WebGL 2.0** (Chrome / Edge / Firefox).

### Arranque del Entorno
1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/AnderUrienGoierri/Biosense-WiFi-Radar.git
    cd Biosense-WiFi-Radar
    ```

2.  **Arrancar la infraestructura de red (Contenedor Web/WS):**
    ```bash
    # Levantar el servidor en el puerto local :3030
    docker-compose up -d
    ```

3.  **Acceso a los Sistemas:**
    *   **Panel de Control / Dashboard:** `http://localhost:3030/ui/index.html`
    *   **Visor Clínico en Vivo (Observatory):** `http://localhost:3030/ui/observatory.html`

> [!TIP]
> Si el servidor de WebSockets no está disponible o el hardware físico está desconectado, la interfaz del Observatory de *Biosense-WiFi-Radar* cambiará automáticamente al modo **DEMO**, activando el motor de simulación matemático interno `demo-data.js` para visualizar la arquitectura estocástica en vivo.

---

## 🔬 Adquisición Hardware (Hardware Sensing Pipeline)

Tal y como se define en el manual de [Project Status and Roadmap](docs/Project_Status_and_Roadmap.md), la detección real a través del rebote de ondas de radio requiere acceso de bajo nivel a los registros PHY del chip de red.
La siguiente iteración física del proyecto reemplazará el simulador por telemetría extraída de placas perimetrales como:
*   Espressif ESP32-S3 (Mediante el volcado CSI habilitado vía librerías en C++).
*   Intel 5300 (Mediante la CSI Tool).

---

## 📄 Licencia y Autores

Proyecto de Telemedicina Avanzada - Ingeniería Biomédica.
Diseñado para formar parte integral de sistemas centralizados de soporte de decisiones clínicas (*CDSS*) y *Point-of-Care*.
