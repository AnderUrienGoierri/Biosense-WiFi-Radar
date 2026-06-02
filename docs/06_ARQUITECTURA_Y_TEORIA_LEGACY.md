# Fundamentos de Arquitectura y Teoría: RuView y Detección por Radiofrecuencia

Este documento establece la base teórica y arquitectónica del sistema de Telemetría Clínica Perimetral, fundamentado en la tecnología RuView (WiFi DensePose) y la detección por radar FMCW de ondas milimétricas.

## 1. El Paradigma de la "Privacidad por Física"

La inteligencia ambiental clínica se ha apoyado históricamente en ***biometría óptica (cámaras) o dispositivos wearables. Ambos presentan limitaciones severas: la óptica invade la privacidad y decae en la oscuridad; los wearables exigen cumplimiento del usuario y mantenimiento de batería.***
El proyecto **RuView** convierte las señales de radiofrecuencia (RF) de routers WiFi comerciales en una malla de detección espacial en tiempo real. Esta arquitectura evalúa parámetros complejos como:

- Frecuencia respiratoria.
- Frecuencia cardíaca (y su variabilidad - HRV).
- Estimación de presión arterial.
- Clasificación de etapas del sueño.
- Presencia humana y estimación de pose en 17 puntos articulares.

Las ondas electromagnéticas en las bandas de 2.4 GHz, 5 GHz y 60 GHz penetran materiales opacos, permitiendo la detección a través de paredes.

## 2. Modalidades de Detección por RF

### 2.1 Información del Estado del Canal (CSI) en Redes WiFi

Las redes WiFi modernas emplean Multiplexación por División de Frecuencias Ortogonales (OFDM). La **Información del Estado del Canal (CSI)** es una matriz de datos que cuantifica cómo la señal se atenúa y desfasa al viajar del transmisor al receptor.
Cuando una señal WiFi se propaga, interactúa con el cuerpo humano (60-70% agua), que actúa como un atenuador y reflector. El leve movimiento mecánico del tórax humano altera microscópicamente estas trayectorias multitrayecto (*multi-path*). Muestreando la matriz CSI, es posible extraer huellas del movimiento humano, separando la persona de la estática de la habitación.

### 2.2 Radar FMCW de Ondas Milimétricas (60 GHz)

Para obtener resoluciones de grado clínico, RuView integra radares de Onda Continua de Frecuencia Modulada (FMCW) en la banda de 60 GHz.
El radar emite *chirps* (pulsos que aumentan su frecuencia en el tiempo). Al rebotar en un objetivo estacionario, la señal se mezcla con la original creando una Frecuencia Intermedia (IF), que es proporcional a la distancia del sujeto. A 60 GHz, la longitud de onda es de ~5 mm. El radar analiza cambios microscópicos de fase en esta señal IF para resolver desplazamientos fraccionales por debajo del milímetro, detectando la percusión miocárdica (balistocardiografía) y la expansión torácica.

## 3. Arquitectura de Software y Diseño Guiado por el Dominio (DDD)

El procesamiento inferencial de baja latencia exige una disciplina estructurada. El sistema RuView, escrito principalmente en **Rust** para el *Edge computing*, aísla el conocimiento en dominios especializados:

- **rvCSI (Edge RF Sensing Runtime):** Motor de procesamiento en el borde. Gestiona la ingesta de CSI y la validación de tramas mediante servicios (ej: *FrameValidationService*, *SignalProcessingService*).
- **WiFi-Mat:** Módulo para emergencias estructurales, diseñado para entornos industriales y triaje.
- **CHCI:** Modelo avanzado para la reconstrucción submilimétrica de la superficie humana.

## 4. Redes Neuronales y Predicción de Pose

Para la predicción de la pose humana (DensePose) sin cámaras ópticas, RuView emplea una **destilación de conocimiento cruzada** (Cross-modal knowledge distillation):

1. **Pre-entrenamiento:** Una cámara monocular óptica graba nubes de puntos 3D de alta resolución a la par que la antena WiFi captura los datos CSI.
2. **Entrenamiento Contrastivo:** Una red neuronal profunda se entrena para predecir los huesos esqueléticos (generados ópticamente) basándose **únicamente** en los datos ciegos de la red WiFi CSI.
3. **Inferencia:** Una vez entrenado, el componente óptico es retirado; el sistema infiere de manera autónoma los esqueletos articulares (arquitectura COCO).
   El modelo final compilado se almacena en contenedores ligeros de peso tensorial **.rvf** (*RuVector Format*).
