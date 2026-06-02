import argparse

# Simulación del estimador clínico de Presión Arterial (HRV-BP) basado en RuView
# Este script está preparado para cuando se tenga el hardware físico por conexión Serial (COM).

def parse_args():
    parser = argparse.ArgumentParser(description='Estimador de Presión Arterial sin Contacto (HRV-BP)')
    parser.add_argument('--port', type=str, default='COM4', help='Puerto serial de la placa ESP32 (ej. COM4)')
    parser.add_argument('--cal-systolic', type=int, default=120, help='Presión sistólica de anclaje inicial (mmHg)')
    parser.add_argument('--cal-diastolic', type=int, default=80, help='Presión diastólica de anclaje inicial (mmHg)')
    parser.add_argument('--cal-hr', type=int, default=72, help='Frecuencia cardíaca de anclaje inicial (latidos/min)')
    return parser.parse_args()

def main():
    args = parse_args()
    print("======================================================")
    print(" Iniciando Estimador Clínico de Presión Arterial (PoC) ")
    print("======================================================")
    print(f"[*] Escuchando puerto serial: {args.port}")
    print(f"[*] Calibración inicial recibida:")
    print(f"    - Sistólica:  {args.cal_systolic} mmHg")
    print(f"    - Diastólica: {args.cal_diastolic} mmHg")
    print(f"    - Frec. Cardíaca: {args.cal_hr} bpm")
    print("\n[!] AVISO: Hardware físico no detectado. En espera de integración con Radar 60GHz FMCW.")
    print("    Por favor, conecte el ESP32 y reinicie el script para recibir lecturas reales.")

if __name__ == '__main__':
    main()
