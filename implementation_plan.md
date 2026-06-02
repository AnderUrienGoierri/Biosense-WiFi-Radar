# Plan de Implementación: Telemetría Clínica Perimetral (PoC Biomédico)

Este documento detalla el plan paso a paso para organizar, desarrollar e implementar un sistema de telemetría perimetral (Prueba de Concepto - PoC) en los ámbitos de ingeniería biomédica, telecomunicaciones y sanidad. El proyecto se basa en la arquitectura de **RuView / WiFi DensePose** y radares FMCW.

## User Review Required
> [!IMPORTANT]
> Se requiere aprobación para crear la estructura de directorios propuesta, mover los archivos existentes y generar los documentos técnicos de apoyo. Adicionalmente, confirmar si el hardware físico (placas ESP32) ya está disponible o si las pruebas iniciales se realizarán exclusivamente en modo simulado/red WiFi local.

## Open Questions
> [!NOTE]
> 1. ¿Dispone actualmente del hardware (ESP32-S3 o Seeed MR60BHA2), o empezamos configurando el sistema en modo "simulado" o utilizando la tarjeta WiFi interna de su ordenador?
> 2. ¿Desea que el sistema se sincronice con una cuenta de Google Drive específica para el entrenamiento en Google Colab desde el primer momento?

## Estructura de Directorios Propuesta

Se propone organizar la carpeta actual (`C:\Dev\05_Projects\Biomedical_IoMT\Telemetría Clínica Perimetral`) de forma modular y profesional:

```text
Telemetría Clínica Perimetral/
├── docs/                # Documentación técnica, manuales, PDF original
├── hardware/            # Scripts de flasheo y configuración para microcontroladores ESP32
├── models/              # Modelos de inteligencia artificial (archivos .rvf) sincronizados con Drive
├── src/                 # Scripts locales en Python (ej. estimación de presión arterial)
├── deploy/              # Archivos de despliegue, incluyendo docker-compose.yml
└── data/                # Registros de datos en crudo (CSIs) y métricas exportadas
```

### [Telemetría Clínica Perimetral]

#### [NEW] [docs/arquitectura_y_teoria.md](file:///C:/Dev/05_Projects/Biomedical_IoMT/Telemetría%20Clínica%20Perimetral/docs/arquitectura_y_teoria.md)
Documento que resume los fundamentos físicos y matemáticos (CSI de WiFi, Radar FMCW 60GHz) evidenciados en la literatura científica.

#### [NEW] [docs/requisitos_y_herramientas.md](file:///C:/Dev/05_Projects/Biomedical_IoMT/Telemetría%20Clínica%20Perimetral/docs/requisitos_y_herramientas.md)
Listado detallado del software (Docker, Python, Rust) y hardware (ESP32-S3, ESP32-C6) necesario.

#### [NEW] [deploy/docker-compose.yml](file:///C:/Dev/05_Projects/Biomedical_IoMT/Telemetría%20Clínica%20Perimetral/deploy/docker-compose.yml)
Archivo de orquestación de contenedores para ejecutar el servidor local y procesar la telemetría.

#### [NEW] [src/bp_estimator_local.py](file:///C:/Dev/05_Projects/Biomedical_IoMT/Telemetría%20Clínica%20Perimetral/src/bp_estimator_local.py)
Script en Python para lectura directa por puerto Serial (COM) en caso de pruebas locales aisladas.

## Fases de Desarrollo e Implementación

### Fase 1: Acondicionamiento del Entorno (Local)
1.  **Estructuración:** Crear los subdirectorios mencionados y reorganizar el material existente.
2.  **Preparación del Software:** Documentar las instrucciones para instalar Docker Desktop, Python, y Google Drive para Escritorio.

### Fase 2: Configuración del Motor de Inferencia (Docker)
1.  **Orquestación:** Configurar el `docker-compose.yml` para descargar la imagen de RuView (`ruvnet/wifi-densepose:latest`).
2.  **Volúmenes:** Mapear la carpeta `models/` local con la carpeta reflejo de Google Drive para garantizar la retroalimentación en la nube.
3.  **Puertos y Redes:** Configurar los puertos (3000 para API/Dashboard, 3001 para WebSockets, 5005 UDP para sensores).

### Fase 3: Pruebas Iniciales de Red (Hogar/Colegio)
1.  **Modo Simulado (`CSI_SOURCE=simulated`):** Ejecutar el orquestador sin hardware externo para validar que el Dashboard 3D y las APIs responden correctamente.
2.  **Modo WiFi Local (`CSI_SOURCE=wifi`):** (Opcional, depende de compatibilidad OS) Utilizar la tarjeta de red del propio ordenador para realizar un test de captación de métricas ambientales básicas utilizando la red del hogar o colegio.

### Fase 4: Integración Hardware e IoT Industrial (Edge AI)
1.  **Modo Perimetral (`CSI_SOURCE=esp32`):** Cambiar el servidor a modo de escucha pasiva.
2.  **Hardware:** Conectar las placas ESP32 configuradas a la misma red WiFi (casa/colegio) para que envíen las matrices CSI por protocolo UDP al portátil.
3.  **Scripts de Soporte:** Ejecutar scripts Python para extraer métricas biomédicas avanzadas (HRV-BP) utilizando la conexión serial (COM) con el módulo radar.

### Fase 5: Entrenamiento en la Nube (Google Colab)
1.  Crear y documentar cuadernos (Notebooks) en Colab para consumir los datos subidos a Google Drive.
2.  Ejecutar el proceso de optimización (Auto-supervisión cruzada) usando GPUs en la nube para destilar nuevos archivos de modelo (`.rvf`).
3.  Implementar la recarga del modelo en caliente (hot-reload) a través de la API REST local.

## Verification Plan

### Automated Tests
*   Verificar que la imagen Docker se levanta sin errores (`docker ps`).
*   Verificar las respuestas HTTP 200 en los endpoints `/api/v1/sensing/latest` y `/api/v1/vital-signs`.

### Manual Verification
*   Acceder a `http://localhost:3000` y comprobar la renderización del entorno 3D.
*   (Si se dispone de hardware) Monitorizar las gráficas de respiración y ritmo cardíaco para confirmar la variación ante presencia humana en la red del colegio o domicilio.
