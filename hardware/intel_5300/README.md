# 💻 Estaciones CSI Intel 5300

Este subdirectorio reserva el espacio para la configuración y los scripts de recolección relacionados con la tarjeta de red **Intel WiFi Link 5300 802.11n**.

## Propósito Académico e Investigativo

A diferencia del ESP32-S3 (enfocado en Edge Computing de bajo coste a 2.4GHz), la arquitectura Intel 5300 nos permite operar en la banda de **5GHz**. 
Dado que la longitud de onda a 5 GHz es menor, la resolución espacial de los rebotes para detectar micromovimientos torácicos (respiración) es exponencialmente mayor.

## Requisitos del Entorno

La ejecución de este hardware no puede darse en sistemas Windows nativos. Todo script ubicado en este directorio asumirá:
1. Una máquina host con Linux (Preferiblemente Ubuntu 14.04/16.04 por compatibilidad nativa del Kernel).
2. El driver modificado `iwlwifi` (Linux 802.11n CSI Tool de Halperin et al.).
3. Scripts automatizados de Shell (`.sh`) para inyectar paquetes a altas tasas de transmisión.
