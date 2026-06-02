# 🗄️ Data Lake: Almacenamiento de Matrices CSI

El directorio `data` funciona como un repositorio local masivo de datos para el ecosistema *Biosense-WiFi-Radar*. Dado que los volcados de CSI pueden ocupar Gigabytes de información en pocas horas de grabación, la estructuración de este directorio es de vital importancia para las canalizaciones (pipelines) de Machine Learning.

> [!WARNING]
> Ningún archivo superior a 50 MB contenido dentro de estos subdirectorios debe ser empujado a GitHub. El archivo `.gitignore` raíz ya bloquea las extensiones `.pcap`, `.dat` y `.npy`.

## 🗂️ Topología de Carpetas

1.  **[`raw_csi/`](raw_csi/README.md)**: El punto de entrada bruto. Archivos `.pcap` directos del hardware, llenos de ruido CFO/SFO, sin filtros aplicados.
2.  **[`processed_tensors/`](processed_tensors/README.md)**: Matrices limpias. Resultado del Procesamiento Digital de Señal (Phase Unwrapping & Static Clutter Removal). Formulados en formato NumPy (`.npy`) o tensores PyTorch (`.pt`).
3.  **[`clinical_annotations/`](clinical_annotations/README.md)**: La "Verdad Fundamental" (*Ground Truth*). Etiquetas temporales creadas mediante sincronización por vídeo o telemetría para entrenar el modelo (ej. `[t=14.5s] -> FALL`).
