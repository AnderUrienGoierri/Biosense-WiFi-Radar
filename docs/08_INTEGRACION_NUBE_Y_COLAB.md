# Ecosistema Experimental en la Nube: Integración con Google Drive y Colab

El ciclo de vida del aprendizaje autosupervisado para la predicción de pose (DensePose) requiere de recursos computacionales intensivos. Entrenar redes neuronales con millones de fotogramas e incrustaciones locales de radiofrecuencia (matrices espectrales CSI) de manera exclusiva en un ordenador portátil puede demorar semanas.

Para escalar esto, la arquitectura de RuView incentiva el uso de Google Colab y Google Drive.

## 1. Sincronización Automática con Google Drive
Para garantizar que el modelo inferencial aprenda y mejore con las firmas capturadas en su domicilio/colegio, debe configurarse un flujo bidireccional:
1. **Instale Google Drive para Escritorio:** Esto le permitirá acceder a su Drive como si fuera una unidad local (Ej: `G:\Mi Unidad`).
2. **Volúmenes Docker:** En el archivo `deploy/docker-compose.yml`, el volumen `/app/models` interno del servidor se ha mapeado a su carpeta local `../models`. Si configura la app de Google Drive para hacer una copia de seguridad o un "Espejo" de esa carpeta local, cualquier modelo nuevo se subirá instantáneamente.
   - *Alternativa:* Modifique el `docker-compose.yml` para apuntar directamente a la ruta de su unidad de Drive (Ej: `G:/Mi Unidad/RuView_Models`).

## 2. Ingesta Asíncrona (Recording)
Cuando el servidor está en funcionamiento y se están recibiendo métricas (ya sea con `CSI_SOURCE=wifi` o con las placas `esp32`), usted puede iniciar una grabación del estado de la red. Esto volcará matrices `.npy` (NumPy) persistentes directamente a la carpeta que está siendo respaldada en Drive, alimentando su "Lago de Datos" (Data Lake) personal.

## 3. Entrenamiento con Google Colab
Una vez que ha recolectado datos, o si descarga bases de datos públicas (como MM-Fi), se procede a usar Google Colab (con aceleradores T4 o A100):

**Flujo en Colab:**
```python
# 1. Montar su Google Drive para que la GPU de Colab vea los datos
from google.colab import drive
drive.mount('/content/drive')

# 2. Descargar el repositorio y dependencias
!git clone https://github.com/ruvnet/RuView.git
%cd RuView
!pip install wifi-densepose[all]

# 3. Lanzar el proceso de entrenamiento
!./target/release/sensing-server --train \
  --dataset /content/drive/MyDrive/Telemetria_Data/ \
  --dataset-type mmfi \
  --epochs 100 \
  --save-rvf /content/drive/MyDrive/Telemetria_Models/trained_model_v1.rvf
```

## 4. Retroalimentación Inmediata (Hot-Reload)
Cuando Google Colab termine el proceso, el nuevo archivo `trained_model_v1.rvf` será guardado en su Google Drive. La aplicación de escritorio descargará este archivo a su carpeta `models/` local casi instantáneamente.
En ese momento, se envía un comando `POST` al servidor local:
```bash
curl -X POST http://localhost:3000/api/v1/models/load -d '{"model_path": "/app/models/trained_model_v1.rvf"}'
```
El servidor Rust recargará la red neuronal en caliente, sin necesidad de reiniciar, mejorando su capacidad de detectar movimiento y constantes vitales en su espacio de pruebas.
