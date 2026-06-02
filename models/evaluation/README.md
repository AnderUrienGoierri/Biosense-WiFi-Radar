# 📈 Evaluación y Validación Clínica

Cualquier sistema biomédico (como lo requiere el estándar *BiosenseLink* y el ecosistema *Point-of-Care*) debe demostrar su fiabilidad probabilística antes de entrar en producción hospitalaria.

Este subdirectorio se destina a los scripts analíticos (preferiblemente notebooks interactivos `.ipynb` o scripts de Python puro) que evalúan el rendimiento del modelo contra un conjunto de datos de prueba ciegos (Test Set).

## Métricas de Certificación a Extraer
*   **F1-Score / Accuracy:** Para clasificaciones binarias discretas (Ej. Detectar una caída vs. Sentarse bruscamente en una silla).
*   **Mean Per Joint Position Error (MPJPE):** Para medir la precisión milimétrica tridimensional de las articulaciones inferidas a través del muro. Una desviación de menos de 5-8 cm es generalmente considerada clínica y comercialmente aceptable.
*   **Matrices de Confusión:** Para entender los *falsos positivos* (Ej. Interpretar la caída de una toalla en el baño como si fuese la caída de un anciano).
