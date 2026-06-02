# 🏋️ Scripts de Entrenamiento

Este directorio actuará como el "laboratorio" algorítmico del proyecto. Contendrá todo el código en Python utilizado para entrenar la Inteligencia Artificial a partir del Data Lake (`data/processed_tensors`).

## Arquitectura Teacher-Student

El paradigma a implementar en estos scripts se basa en el aprendizaje por transferencia cruzada (*Cross-Modal Transfer Learning*).
1.  La señal de vídeo (MediaPipe) se ingesta como objetivo Y (El "Teacher").
2.  El tensor CSI se ingesta como variable de entrada X (El "Student").
3.  El `optimizer.step()` actualiza los pesos de la CNN intentando que el Student replique las coordenadas esqueléticas del Teacher.

Se recomienda estructurar los módulos en:
*   `dataset.py` (Cargador y balanceo de tensores).
*   `model.py` (Clase `nn.Module` con la definición ResNet).
*   `train.py` (Bucle principal de *Epochs* y registro con TensorBoard / Weights&Biases).
