# Arquitectura de Internacionalización y Personalización de Interfaz

Este documento técnico explica las modificaciones de interfaz gráfica (UI) realizadas sobre el cliente web original de RuView, estableciendo una arquitectura robusta para entornos clínicos, eliminando recursos genéricos (emoticonos) y añadiendo soporte lingüístico nativo.

## 1. Mapeo de Volúmenes y Hot-Reload en Docker

Originalmente, la interfaz de usuario venía encapsulada de solo-lectura dentro de la imagen `ruvnet/wifi-densepose:latest`.
Para profesionalizar la vista y permitir ediciones en caliente (hot-reload), se ha extraído la carpeta `/app/ui` y se ha expuesto en el volumen local `src/ui`.
El archivo `docker-compose.yml` ahora contiene la siguiente regla vinculante:
```yaml
    volumes:
      - ./../src/ui:/app/ui
```
Cualquier modificación en los archivos HTML, CSS o JS locales se refleja instantáneamente en `http://localhost:3030/ui/index.html`.

## 2. Motor de Traducción (i18n.js) y Euskara

El sistema de internacionalización de RuView utiliza un módulo nativo `utils/i18n.js` que emplea Vanilla JavaScript y atributos `data-i18n` en el DOM para realizar traducciones sin dependencias externas (como React-i18next o Vue-i18n), asegurando un rendimiento ultraligero óptimo para dispositivos Edge.

Se ha ampliado el diccionario original para incluir **Euskara (EU)** y **Castellano (ES)** de manera profesional y sin errores sintácticos.

### Estructura de Traducción:
Cada cadena de texto está mapeada en un objeto JavaScript:
```javascript
  eu: {
    'dashboard.title': 'WiFi Bidezko Giza Jarreraren Detekzio Iraultzailea',
    'benefits.throughWalls.title': 'Hormen Bidez',
    'apps.elderly.title': 'Adinekoen Zaintza',
    // ...
  }
```
El selector dinámico inyectado en el menú principal actualiza el atributo `lang` del documento HTML e itera recursivamente sobre todo elemento que posea el atributo `data-i18n`, reemplazando su `textContent` al vuelo. Las preferencias de idioma se almacenan de forma persistente en el `localStorage` del navegador (`ruview-locale`).

## 3. Vectorización de Iconografía (SVG)

El uso de emoticonos Unicode (🏠, 🔒, ⚡) es inestable entre distintos sistemas operativos (Windows renderiza diferente a iOS o Linux) y carece de la formalidad visual requerida en ingeniería biomédica.

**Solución Implementada:**
1. Se ha programado un script en Python (`generate_icons.py`) que inyecta en disco rutas SVG estándar y open-source (basadas en *Lucide*).
2. Se generó un directorio `src/ui/icons/` que aloja recursos como `hospital.svg`, `user.svg`, `lock.svg`, entre otros.
3. Se refactorizó el DOM de `index.html` para consumir etiquetas `<img src="icons/X.svg">`.

Este paradigma asegura que todos los recursos gráficos estén autocontenidos en la aplicación, evitando llamadas externas fallidas a CDN y manteniendo una coherencia de color y trazado (stroke-width) estricta en el Dashboard.
