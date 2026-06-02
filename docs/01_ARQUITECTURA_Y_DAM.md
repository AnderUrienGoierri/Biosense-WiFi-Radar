# 01. Arquitectura de Software y Enfoque DAM

El diseño arquitectónico de **Biosense-WiFi-Radar** obedece a las mejores prácticas del **Desarrollo de Aplicaciones Multiplataforma (DAM)**, integrando un entorno de contenedores, microservicios asíncronos y un ecosistema frontend de altísimo rendimiento computacional (WebGL). 

A continuación, se desgrana la estructura de ingeniería de software que permite el *Through-Wall Sensing* en tiempo real.

---

## 1. Patrón Arquitectónico: Edge-To-Cloud Híbrido

Para cumplir con las restricciones de latencia requeridas por el sector médico (Telemetría de Misión Crítica), el proyecto utiliza un patrón Híbrido Edge.

*   **Edge Node (Físico / Simulado):** Encargado de la ingesta bruta de datos. En el escenario actual, este rol lo juega el contenedor Docker en Python, o internamente el simulador matemático estocástico `demo-data.js`.
*   **Edge Gateway (Servidor de Streaming):** Un servidor FastAPI de Python montado sobre Uvicorn que mantiene túneles persistentes.
*   **Thin Client (Consola Clínica Web):** El dashboard de monitorización. Se renderiza íntegramente en el navegador del dispositivo cliente (Tablet médica, PC de enfermería) descargando de la red la carga de renderizado 3D y procesado UI.

---

## 2. Pila Tecnológica (Tech Stack)

### Backend (Data Ingestion & Relay)
El backend, escrito en **Python 3.10+**, está encapsulado mediante `docker-compose`. Su rol primordial es:
1. Recibir los tensores matemáticos (matrices CSI).
2. Procesamiento matricial mediante **NumPy**.
3. Multiplexación y serialización de los *frames* a binario o JSON optimizado.
4. Distribución asíncrona (AsyncIO) mediante la librería de `websockets` hacia múltiples clientes conectados simultáneamente.

### Frontend (User Interface & Observatory)
La interfaz del usuario se ha construido puramente utilizando tecnologías nativas web (Vanilla JavaScript, HTML5, CSS3) prescindiendo deliberadamente de frameworks pesados (React/Angular) para garantizar la latencia cero en el pipeline de renderizado gráfico.

Destacan tres pilares:
1.  **Motor WebGL 2.0 (Three.js):** 
    *   Responsable del "Observatory". Renderiza nubes de puntos de millones de partículas, *shaders* programados para el *Nebula Background*, e interpolación ósea espacial (Pose System).
2.  **Service Workers (PWA):**
    *   Un archivo `sw.js` gestiona una caché estática (`ruview-v6`), garantizando que la aplicación cargue de manera instantánea y pueda soportar reinicios en áreas del hospital con baja cobertura de red.
3.  **Localización Bilingüe In-Vivo (Motor I18N):**
    *   Un motor customizado permite cambiar la lengua de la aplicación (Inglés, Español, Polaco, Euskara) sin recargar la página manipulando el DOM a través de atributos de datos (`data-i18n`).

---

## 3. Protocolos de Comunicación: WebSockets de Baja Latencia

En la telemetría biomédica, los canales HTTP REST tradicionales (Protocolo PULL) introducen un *overhead* inaceptable debido al *handshake* de cabeceras en cada petición. 

Para solventarlo, Biosense-WiFi-Radar implementa **WebSockets (RFC 6455)**:
*   Se establece una conexión Full-Duplex.
*   El backend "empuja" (PUSH) fotogramas matemáticos a una frecuencia nativa de **60 Hz** (16.6ms por frame).
*   En el cliente, la función de callback de mensajes alimenta de inmediato el `_currentData` del motor Three.js, actualizando los esqueletos y los Sparklines sin afectar al Main Thread de renderizado de la UI gracias al *Garbage Collection* optimizado de la arquitectura orientada a objetos del frontend.

---

## 4. Gestión de Estado y Ciclo de Vida del Renderizado

La clase principal `Observatory` (ubicada en `main.js`) funciona basándose en el patrón arquitectónico del *Game Loop* tradicional aplicado a la monitorización clínica:

```javascript
_animate() {
    requestAnimationFrame(() => this._animate());
    const dt = Math.min(this._clock.getDelta(), 0.1);

    // 1. Data Polling (WebSocket o Generador Local)
    // 2. Extrapolación Matemática (Interpolación de huesos a dt)
    // 3. Renderizado de escena WebGL (Three.js Renderer)
    // 4. Actualización del DOM asíncrono (HUD, Vitals, Sparklines)
}
```

Esta arquitectura garantiza que, incluso si el cálculo matemático de un frame complejo sufre retrasos (ej. picos de interferencia computacional), la animación interpola el diferencial de tiempo (`dt`) logrando que el esqueleto humano siga viéndose fluido para el personal clínico.
