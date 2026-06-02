# 🧠 Modelos de Red Neuronal (AI & Machine Learning)

Esta carpeta constituye el núcleo de Inteligencia Artificial del proyecto *Biosense-WiFi-Radar*. Mientras que el *DSP (Digital Signal Processing)* matemático se encarga de limpiar el canal WiFi, son las redes neuronales las que extraen el "significado" biológico de esas ondas electromagnéticas a través de paredes.

## 📂 Organización del Directorio

*   **[`checkpoints/`](checkpoints/README.md)**: Aquí se guardarán los pesos del modelo entrenado listos para inferencia rápida (`.pth` o `.onnx`).
*   **[`training_scripts/`](training_scripts/README.md)**: Los módulos de Python (PyTorch) donde se definen las capas convolucionales, la función de pérdida (*Loss Function*) y el bucle de optimización.
*   **[`evaluation/`](evaluation/README.md)**: Notebooks y scripts para la inferencia estadística (Curvas ROC, F1-Scores y Matrices de Confusión) para certificar clínicamente el sistema.

## 🧱 Topología Densa Propuesta (DensePose-RF)
Dado que las matrices CSI son espacialmente ricas, la arquitectura inicial apuntará a un modelo compuesto por:
1.  **Bloques Espacio-Temporales Conv2D / Conv3D** para extraer firmas Doppler (movimiento).
2.  **Mecanismos de Atención (Self-Attention / Transformers)** para discriminar a múltiples sujetos en la misma habitación minimizando el ruido multipath.
3.  **Head de Regresión de Articulaciones (Joint Regression Head)** para reconstruir la estructura tridimensional ósea humana en formato de coordenadas cartesianas relativas.
