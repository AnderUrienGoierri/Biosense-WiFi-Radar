# 04. Adquisición Hardware y Extracción Física del CSI

La mayor barrera técnica en los sistemas de telemetría WiFi biomédica radica en el acceso de bajo nivel al hardware de radiofrecuencia (RF). 

Este documento resuelve técnica y científicamente la incógnita sobre la viabilidad del uso del router doméstico y expone la arquitectura hardware obligatoria para el funcionamiento real del sistema.

---

## 1. El Muro del Hardware Comercial: ¿Por qué no sirve el WiFi de casa?

Los módems y routers comerciales (Movistar, Orange, Netgear) o las tarjetas de red estándar de teléfonos móviles están diseñados exclusivamente para telecomunicaciones (enviar y recibir paquetes IP a la máxima velocidad posible). 

Para lograr esto, integran dos subsistemas a nivel de chipset (Broadcom, Atheros) que arruinan la adquisición CSI:

1.  **Automatic Gain Control (AGC):** Cuando la señal rebota en una persona que respira, la amplitud fluctúa infinitesimalmente. El router doméstico interpreta esa fluctuación como un "debilitamiento" de la señal, y activa su amplificador analógico (LNA) para restaurar la potencia, borrando y distorsionando por completo la firma respiratoria.
2.  **Phase-Locked Loop (PLL) Oscilante:** Como hemos visto en el [Capítulo 2](02_MATEMATICAS_Y_DSP.md), la Fase es la parte más rica de la señal biomédica. Los controladores comerciales ocultan la fase en bruto al sistema operativo Windows/Linux, entregando únicamente el nivel RSSI (indicador de barritas de cobertura).

**Conclusión:** Un sistema *Through-Wall Sensing* médico es técnica e informáticamente inviable usando hardware doméstico no parcheado o módems comerciales genéricos.

---

## 2. La Propuesta de Hardware Físico: Nodos Edge IoMT

Para pasar del simulador a la realidad hospitalaria/domiciliaria, el proyecto estipula la utilización de microcontroladores específicos montados en balizas IoT.

### A. La Ruta Low-Cost: Espressif ESP32-S3
La familia de SoCs ESP32 (específicamente la versión ESP32-S3 de alta capacidad de cálculo vectorial) ofrece una puerta trasera programática por C/C++ directamente a la subcapa MAC/PHY.

**Ventajas:**
*   Coste por nodo inferior a 15 €.
*   Librerías C++ nativas (`esp_wifi_set_csi_rx_cb`) que devuelven la estructura `wifi_csi_info_t` conteniendo la matriz cruda de subportadoras OFDM.
*   Consumo ínfimo de energía, ideal para anclar en los enchufes de las esquinas de una habitación.

**Despliegue Arquitectónico:**
Se configuran dos (o más) nodos. 
1.  **Nodo A (Transmisor Tx):** Configurado en modo *Injection Mode*, disparando *ping frames* a 100 Hz al vacío.
2.  **Nodo B (Receptor Rx):** Configurado en modo Promiscuo, capturando la firma CSI resultante del rebote electromagnético de la sala y desviando esa matriz binaria cruda vía Socket UDP hacia nuestro contenedor Backend Docker de `Biosense-WiFi-Radar`.

### B. La Ruta Académica Clásica: Intel 5300 + Linux
El estándar de facto en las universidades para investigación CSI es la tarjeta Intel 5300 instalada en *laptops* o *NUCs* bajo una distribución Ubuntu parcheada a bajo nivel (Halperin et al. CSI Tool).

**Inconvenientes:**
*   Tarjetas descontinuadas y hardware voluminoso e inapropiado para un ecosistema de despliegue hospitalario moderno donde prima el concepto *Edge Computing* sigiloso.

---

## 3. Calibración Geométrica y Atenuación de Materiales

Desplegar el hardware físico requiere contemplar las leyes de la atenuación RF.
A una frecuencia de 5 GHz (canal preferido para alta resolución espacial frente a los más ruidosos 2.4 GHz):
*   **Pladur / Drywall:** Atenuación moderada (~3-5 dB). El *Through-Wall Sensing* es 100% funcional.
*   **Ladrillo macizo:** Atenuación severa (~12-15 dB). Disminuye el ratio Señal-Ruido (SNR), requiriendo pre-amplificación digital o modelos heurísticos más pesados.
*   **Espejos / Armarios metálicos:** Bloquean por completo la señal generando "Zonas de Sombra" donde el motor *DensePose* perderá el rastreo del esqueleto temporalmente.
