# 🏷️ Anotaciones Clínicas (Ground Truth)

Para que un modelo de Inteligencia Artificial (Supervised Learning) pueda inferir qué significa una fluctuación en las ondas electromagnéticas, primero debemos entrenarlo indicándole la "verdad" absoluta (*Ground Truth*).

Este directorio almacenará archivos de etiquetas, preferiblemente en formatos ligeros (`.csv` o `.json`), generados durante la captura de datos en tiempo real.

## Sincronización Teacher-Student

Cuando el actor (profesor/paciente simulado) se mueva en la sala de captura:
1.  **Cámara de Vídeo (Profesor):** Grabará el esqueleto a través de MediaPipe u OpenPose.
2.  **Antenas WiFi (Estudiante):** Capturarán el CSI ciego.

El software de extracción guardará aquí un archivo JSON por cada sesión que correlaciona exactamente el marco temporal (en milisegundos) con las posiciones de las 14 articulaciones corporales y el estado (ej. `WALKING`, `FALLEN`, `SITTING`).

```json
{
  "session": "20261015_1430_fall_event_esp32",
  "fps": 60,
  "frames": [
    { "time_ms": 14500, "state": "STANDING", "joints": [...] },
    { "time_ms": 14516, "state": "FALLING", "joints": [...] },
    { "time_ms": 14850, "state": "FALLEN_CRITICAL", "joints": [...] }
  ]
}
```
