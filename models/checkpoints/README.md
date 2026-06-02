# 🏁 Model Checkpoints

Directorio destinado a almacenar los "pesos" resultantes del proceso de entrenamiento iterativo. 

Aquí residirá la memoria "aprendida" de la red neuronal.

> [!WARNING]
> No subir archivos con extensión `.pth`, `.pt`, `.h5` u `.onnx` al repositorio de GitHub si exceden los 50 MB (limite configurado en el `.gitignore` por defecto para evitar agotar la cuota de *Git LFS*).

Se empleará ONNX (Open Neural Network Exchange) como estándar de exportación preferente para garantizar que el modelo entrenado en Python/PyTorch pueda ser invocado por el backend de Rust o FastAPI a una velocidad de inferencia ultra-rápida.
