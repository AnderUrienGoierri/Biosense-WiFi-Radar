# Requisitos y Herramientas del Proyecto

Este documento lista las dependencias de software, hardware y servicios en la nube necesarios para la ejecución del sistema de Telemetría Clínica Perimetral.

## 1. Requisitos de Hardware (Fase Actual: Simulación/WiFi Interno)
Para la etapa inicial, no se requiere la compra de microcontroladores externos. Se utilizará el hardware existente del usuario:
- **Ordenador Portátil / Estación de Trabajo:** Equipo contemporáneo (macOS, Windows 10/11 o Linux soportado) con al menos 4-8 GB de RAM.
- **Tarjeta de Red WiFi Interna:** Se utilizará para capturar datos en modo `CSI_SOURCE=wifi` o se emulará en modo `CSI_SOURCE=simulated`.

*(Nota: En fases posteriores se integrarán placas ESP32-S3 y sensores de radar Seeed MR60BHA2).*

## 2. Requisitos de Software Local

- **Docker Desktop:** Orquestador principal del proyecto.
  - Versión recomendada: 24.0+
  - *Requisito estricto:* Habilitar WSL2 (Windows) o Apple Virtualization (macOS) en las configuraciones de Docker.
- **Python 3.9+:** Requerido para la ejecución de scripts analíticos independientes.
  - Paquetes esenciales: `pyserial`, `numpy`.
- **Git:** Para clonar bifurcaciones o repositorios si se requiere análisis en crudo.

## 3. Integración en la Nube y Almacenamiento

- **Google Drive para Escritorio:** Aplicación esencial que monta un disco duro virtual en el sistema local.
  - *Propósito:* Sincronización bidireccional automática de los modelos neuronales (archivos `.rvf`) entre la carpeta local `models/` y la nube.
- **Google Colab:** Plataforma de cuadernos Jupyter en la nube.
  - *Propósito:* Ejecutar entrenamientos de aprendizaje profundo (Cross-modal knowledge distillation) accediendo a las GPUs Nvidia provistas gratuitamente por Google, leyendo datos masivos subidos previamente a Drive.

## 4. Imágenes y Repositorios Clave
- **Imagen Docker Principal:** `ruvnet/wifi-densepose:latest`
- **Puertos a Habilitar Localmente:**
  - `3000`: API REST y Dashboard del usuario.
  - `3001`: WebSockets para telemetría en tiempo real.
  - `5005 (UDP)`: Escucha de tráfico desde sensores (aplicable al integrar ESP32).
