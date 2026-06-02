# 🪫 Nodos CSI Basados en ESP32-S3

Este subdirectorio contendrá el firmware en lenguaje **C** apoyado sobre el entorno nativo ESP-IDF (Espressif IoT Development Framework). 

## Misión de los Nodos

La arquitectura contempla el flasheo de al menos dos placas ESP32-S3 operando en la banda de 2.4GHz:

1.  **Tx Node (Emisor Activo):** Se programa en *Frame Injection Mode*. Su objetivo es saturar el entorno físico disparando tramas vacías (Ping frames / NDPA) a una frecuencia estricta (ej. 100 Hz).
2.  **Rx Node (Sensor Promiscuo):** Configurado para registrar la devolución espectral. Usa la API oculta de Espressif (`esp_wifi_set_csi_rx_cb()`) para capturar la estructura `wifi_csi_info_t` y enviar los sub-bytes crudos al servidor Docker mediante WebSockets o UDP.

## Convenciones de Código
Todo el código en esta carpeta debe escribirse priorizando la **gestión de memoria dinámica (Heap)**. El volcado masivo de CSI a alta frecuencia puede causar un *Stack Overflow* o agotar la memoria SRAM de la placa en milisegundos si no se utilizan colas circulares (*Ring Buffers*) eficientes.
