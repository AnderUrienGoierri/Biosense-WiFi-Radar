# Plan de Implementación: Sistema Global de Tooltips y Soporte de Idiomas Extendido

Este plan aborda la solicitud para extender el soporte del selector de idiomas (Euskara, Español, Inglés, etc.) al resto de módulos (Observatory, Pose Fusion) y de enriquecer la plataforma con **Notas Informativas (Tooltips)** en cada elemento para explicar su funcionamiento y unidades de medida.

## Propósito
El objetivo es transformar la plataforma en una herramienta completamente autodescriptiva para el usuario final. Al acercar el ratón a cualquier métrica, panel o gráfico, aparecerá un tooltip detallado, traducido al idioma seleccionado (p. ej., Euskara), explicando qué significa esa métrica en el contexto de la telemetría clínica.

## 1. Cambios Estructurales en `i18n.js`

Actualmente, el motor `i18n.js` inyecta el selector de idioma buscando una clase específica (`.header-info`) que solo existe en `index.html`. 
Se modificará la función `createSelector()` para que busque los contenedores correspondientes en el resto de páginas:
- `index.html`: `.header-info`
- `observatory.html`: `#status-bar`
- `pose-fusion.html`: `.header-right`

Además, se extenderán los diccionarios (`en`, `es`, `eu`) con un nuevo bloque `tooltip.*` que albergará explicaciones detalladas para decenas de elementos.

## 2. Inyección de Módulos

Se inyectará la importación de `i18n.js` y las etiquetas `data-i18n` a los otros archivos HTML:

### `observatory.html`
- Añadir el import al inicio de `observatory/js/main.js`.
- Añadir las etiquetas `data-i18n` y `data-i18n-title` a elementos como: Signos vitales (Heart Rate, Respiration, Confidence), Señal WiFi (RSSI, Variance, Motion), Escenarios (Empty Room, Fall Detect...).

### `pose-fusion.html`
- Añadir el import al inicio de `pose-fusion/js/main.js`.
- Añadir etiquetas de traducción a elementos como: Confidence Fusion (Video vs CSI), Heatmap, RSSI, Embedding Space, RuVector Pipeline (Flash, MHA...).

### `index.html` (Sensing & Training Tabs)
- Añadir `data-i18n-title` a las tarjetas del dashboard, métricas de CPU/RAM, y a todos los elementos técnicos de las pestañas Sensing, Hardware y Training.

## 3. Tooltips Descriptivos Multilingües

El motor `i18n` nativo ya soporta `data-i18n-title`, que traduce directamente el atributo HTML nativo `title` de los elementos. Aprovecharemos esta propiedad.
Algunos ejemplos de tooltips que se añadirán al diccionario:

- **CPU Usage:** "Porcentaje del procesador consumido por la red neuronal durante el cálculo de matrices."
- **Confidence (AP@50):** "Precisión Promedio. Indica la seguridad del modelo sobre la postura detectada (0-100%)."
- **RSSI (dBm):** "Received Signal Strength Indicator. Mide la potencia de la onda electromagnética reflejada. Valores más cercanos a 0 son mejores."
- **CSI Amplitude Heatmap:** "Representación térmica de la Información de Estado del Canal (CSI) extraída de las subportadoras OFDM."

## Preguntas Abiertas

> [!IMPORTANT]
> **Revisión del Usuario:**
> 1. El uso del atributo nativo `title` del HTML mostrará los mensajes del navegador por defecto. ¿Te parece bien esta solución minimalista o prefieres que los tooltips tengan un diseño gráfico flotante personalizado estilo cuadro negro? (La solución nativa es más limpia, accesible y no sobrecarga la UI, pero el cuadro flotante CSS permite más texto).
> 2. Una vez apruebes el plan, redactaré manualmente todas las explicaciones clínicas y de telemetría en Español y Euskara. ¿Estás de acuerdo con el enfoque técnico?
