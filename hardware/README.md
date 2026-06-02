# 🛠️ Infraestructura Hardware: Nodos de Telemetría Edge

Este directorio contiene el código fuente de bajo nivel (Firmware en C/C++ y Shell) necesario para operar los microcontroladores perimetrales y tarjetas de red encargados de capturar el **CSI (Channel State Information)** real.

El ecosistema *Biosense-WiFi-Radar* se desvincula del hardware comercial estandarizado, operando bajo un paradigma de **Edge Computing** donde pequeños SoC (System-on-Chip) actúan como biosensores ambientales.

## 📂 Organización del Directorio

*   **[`esp32_nodes/`](esp32_nodes/README.md)**: Firmware nativo de Espressif (ESP-IDF) para desplegar redes de radares biomédicos de ultra-bajo coste utilizando placas ESP32-S3.
*   **[`intel_5300/`](intel_5300/README.md)**: Scripts de configuración y módulos del kernel (`iwlwifi`) para estaciones base de alta potencia (Linux 802.11n CSI Tool).

## 📡 Filosofía de Operación
El firmware aquí contenido no transmite paquetes IP convencionales con payload utilizable (TCP/HTTP). En su lugar, manipula la interfaz MAC/PHY para inyectar *Ping Frames* ciegos y volcar la matriz espectral de rebote directamente a un bus serial (UART) o a un túnel UDP local (Hacia el contenedor Docker de telemetría).
