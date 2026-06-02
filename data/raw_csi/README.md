# 🛑 Raw CSI (Datos Crudos)

Este subdirectorio contiene los volcados binarios originales interceptados por las antenas receptoras.

Es **crítico** conservar siempre estos archivos originales. Si en el futuro alteramos nuestros algoritmos matemáticos de *Phase Unwrapping* o de eliminación de ruido estático (DSP), necesitaremos estos archivos crudos para reprocesar la información sin tener que volver a grabar a los pacientes físicamente.

## Formatos Aceptados
*   **`.pcap`**: Formato estándar de captura de red. Ideal si usamos la tarjeta Intel 5300.
*   **`.dat` / `.bin`**: Archivos de flujo binario secuencial, producidos masivamente por el serial/UDP del ESP32-S3.

## Nomenclatura Estricta
Para evitar el caos temporal, todos los archivos crudos se guardarán siguiendo esta sintaxis:
`YYYYMMDD_HHMM_[Escenario]_[Hardware].extension`

**Ejemplo:** `20261015_1430_fall_event_esp32.dat`
