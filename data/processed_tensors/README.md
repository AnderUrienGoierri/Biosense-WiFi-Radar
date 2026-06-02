# 🧠 Processed Tensors (Tensores Listos para IA)

Los archivos almacenados en este directorio ya han pasado por el embudo matemático del script de Python:
1. Han sido alineados temporalmente.
2. Su fase ha sido desenrollada (*Phase Unwrapping*).
3. Se ha aplicado el filtro IIR Butterworth para ruido estático (*Static Clutter Removal*).

## Formato Tensor
El formato por defecto en este directorio será **`.npy`** (NumPy Array) o **`.pt`** (PyTorch Tensor).

Las dimensiones de los tensores guardados deben seguir estrictamente el estándar esperado por la red neuronal convolucional (CNN):
`[Muestras Temporales] x [Antenas Rx] x [Subportadoras OFDM]`

Por ejemplo, un archivo de 10 segundos grabado a 100 Hz con un sistema 1x3 MIMO en 64 subportadoras tendrá una matriz multidimensional (`shape`) de `[1000, 3, 64]`.
