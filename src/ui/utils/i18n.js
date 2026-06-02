// Internationalization - EN/PL language support
// Detects browser language, persists choice, translates UI strings

const translations = {
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.hardware': 'Hardware',
    'nav.demo': 'Live Demo',
    'nav.architecture': 'Architecture',
    'nav.performance': 'Performance',
    'nav.applications': 'Applications',
    'nav.sensing': 'Sensing',
    'nav.training': 'Training',
    'nav.poseFusion': 'Pose Fusion',
    'nav.observatory': 'Observatory',

    // Dashboard
    'dashboard.title': 'Revolutionary WiFi-Based Human Pose Detection',
    'dashboard.subtitle': 'Human Tracking Through Walls Using WiFi Signals',
    'dashboard.description': 'AI can track your full-body movement through walls using just WiFi signals. Researchers at Carnegie Mellon have trained a neural network to turn basic WiFi signals into detailed wireframe models of human bodies.',
    'dashboard.status': 'System Status',
    'dashboard.metrics': 'System Metrics',
    'dashboard.features': 'Features',
    'dashboard.liveStats': 'Live Statistics',
    'dashboard.activePersons': 'Active Persons',
    'dashboard.avgConfidence': 'Avg Confidence',
    'dashboard.totalDetections': 'Total Detections',
    'dashboard.zoneOccupancy': 'Zone Occupancy',

    // Status
    'status.apiServer': 'API Server',
    'status.hardware': 'Hardware',
    'status.inference': 'Inference',
    'status.streaming': 'Streaming',
    'status.dataSource': 'Data Source',

    // Metrics
    'metrics.cpu': 'CPU Usage',
    'metrics.memory': 'Memory Usage',
    'metrics.disk': 'Disk Usage',

    // Benefits
    'benefit.throughWalls': 'Through Walls',
    'benefit.throughWallsDesc': 'Works through solid barriers with no line of sight required',
    'benefit.privacy': 'Privacy-Preserving',
    'benefit.privacyDesc': 'No cameras or visual recording - just WiFi signal analysis',
    'benefit.realtime': 'Real-Time',
    'benefit.realtimeDesc': 'Maps 24 body regions in real-time at 100Hz sampling rate',
    'benefit.lowCost': 'Low Cost',
    'benefit.lowCostDesc': 'Built using $30 commercial WiFi hardware',

    // Stats
    'stat.bodyRegions': 'Body Regions',
    'stat.samplingRate': 'Sampling Rate',
    'stat.accuracy': 'Accuracy (AP@50)',
    'stat.hardwareCost': 'Hardware Cost',

    // Actions
    'action.startDetection': 'Start Detection',
    'action.stopDetection': 'Stop Detection',
    'action.toggleTheme': 'Toggle theme',
    'action.exportData': 'Export data',
    'action.screenshot': 'Take screenshot',

    // Connection
    'conn.connected': 'Connected',
    'conn.connecting': 'Connecting...',
    'conn.offline': 'Offline',
    'conn.reconnecting': 'Reconnecting...',
    'conn.live': 'Live',
    'conn.simulated': 'Simulated',

    // Tooltips
    'tooltip.apiServer': 'REST API server state for dashboard integration',
    'tooltip.hardware': 'Physical WiFi interface (ESP32/CSI-card) connectivity status',
    'tooltip.inference': 'Neural Network backend state (RuVector/DensePose)',
    'tooltip.streaming': 'WebSocket pipeline for real-time telemetry',
    'tooltip.dataSource': 'Current source of telemetry (Simulated or Live)',
    'tooltip.cpu': 'Percentage of host CPU consumed by the sensing processes',
    'tooltip.memory': 'RAM allocation for the neural network and models',
    'tooltip.disk': 'Storage used for saved models and telemetry logs',
    'tooltip.activePersons': 'Number of discrete human bodies currently detected in the sensing field',
    'tooltip.avgConfidence': 'Mean Average Precision (mAP) or confidence score of the current pose estimations',
    'tooltip.totalDetections': 'Cumulative sum of pose keypoints successfully resolved since startup',
    'tooltip.zoneOccupancy': 'Heatmap representing presence distribution across predefined physical zones',
    'tooltip.heartRate': 'Estimated heart rate derived from chest cavity micro-displacements via WiFi phase shifts',
    'tooltip.respiration': 'Breathing rate (RPM) captured from periodic chest movements through walls',
    'tooltip.confidence': 'AI confidence level regarding the stability and accuracy of the extracted vital signs',
    'tooltip.rssi': 'Received Signal Strength Indicator (dBm). Closer to 0 means stronger signal',
    'tooltip.variance': 'CSI amplitude variance indicating raw motion energy in the physical space',
    'tooltip.motion': 'Quantified kinetic motion score derived from subcarrier Doppler shifts',
    'tooltip.presence': 'Binary classification of human presence vs empty room',
    'tooltip.fusionVideo': 'Pose estimation confidence derived purely from the optical camera stream',
    'tooltip.fusionCsi': 'Pose estimation confidence derived purely from the WiFi CSI stream',
    'tooltip.csiHeatmap': 'Time-series visualization of WiFi channel state information (CSI) subcarrier amplitudes',
    'tooltip.embeddingSpace': '2D PCA projection of the latent space representations from the dual modalities',
    'tooltip.ruVector': '6-stage WASM-accelerated neural attention pipeline for spatial-temporal fusion',

    // Architecture
    'arch.title': 'System Architecture',
    'arch.step1.title': 'CSI Input',
    'arch.step1.desc': 'Channel State Information collected from WiFi antenna array',
    'arch.step2.title': 'Phase Sanitization',
    'arch.step2.desc': 'Remove hardware-specific noise and normalize signal phase',
    'arch.step3.title': 'Modality Translation',
    'arch.step3.desc': 'Convert WiFi signals to visual representation using CNN',
    'arch.step4.title': 'DensePose-RCNN',
    'arch.step4.desc': 'Extract human pose keypoints and body part segmentation',
    'arch.step5.title': 'Wireframe Output',
    'arch.step5.desc': 'Generate final human pose wireframe visualization',

    // Performance
    'perf.title': 'Performance Analysis',
    'perf.wifiCard': 'WiFi-based (Same Layout)',
    'perf.ap': 'Average Precision:',
    'perf.ap50': 'AP@50:',
    'perf.ap75': 'AP@75:',
    'perf.imageCard': 'Image-based (Reference)',
    'perf.advLimTitle': 'Advantages & Limitations',
    'perf.advTitle': 'Advantages',
    'perf.adv1': 'Through-wall detection',
    'perf.adv2': 'Privacy preserving',
    'perf.adv3': 'Lighting independent',
    'perf.adv4': 'Low cost hardware',
    'perf.adv5': 'Uses existing WiFi',
    'perf.limTitle': 'Limitations',
    'perf.lim1': 'Performance drops in different layouts',
    'perf.lim2': 'Requires WiFi-compatible devices',
    'perf.lim3': 'Training requires synchronized data',

    // Misc
    'misc.loading': 'Loading...',
    'misc.error': 'An error occurred',
    'misc.noData': 'No data available',
    'misc.close': 'Close',
    'misc.cancel': 'Cancel',
    'misc.confirm': 'Confirm',
    'misc.settings': 'Settings',
    'misc.language': 'Language'
  },

  pl: {
    // Navigation
    'nav.dashboard': 'Panel',
    'nav.hardware': 'Sprzet',
    'nav.demo': 'Demo na zywo',
    'nav.architecture': 'Architektura',
    'nav.performance': 'Wydajnosc',
    'nav.applications': 'Aplikacje',
    'nav.sensing': 'Czujniki',
    'nav.training': 'Trening',
    'nav.poseFusion': 'Fuzja Poz',
    'nav.observatory': 'Obserwatorium',

    // Dashboard
    'dashboard.title': 'Rewolucyjne wykrywanie pozy czlowieka przez WiFi',
    'dashboard.subtitle': 'Sledzenie ludzi przez sciany za pomoca sygnalow WiFi',
    'dashboard.description': 'AI moze sledzic ruchy calego ciala przez sciany uzywajac jedynie sygnalow WiFi. Badacze z Carnegie Mellon wytrenowali siec neuronowa do zamiany sygnalow WiFi w szczegolowe modele szkieletowe.',
    'dashboard.status': 'Status systemu',
    'dashboard.metrics': 'Metryki systemu',
    'dashboard.features': 'Funkcje',
    'dashboard.liveStats': 'Statystyki na zywo',
    'dashboard.activePersons': 'Aktywne osoby',
    'dashboard.avgConfidence': 'Srednia pewnosc',
    'dashboard.totalDetections': 'Laczne detekcje',
    'dashboard.zoneOccupancy': 'Zajecie stref',

    // Status
    'status.apiServer': 'Serwer API',
    'status.hardware': 'Sprzet',
    'status.inference': 'Wnioskowanie',
    'status.streaming': 'Streaming',
    'status.dataSource': 'Zrodlo danych',

    // Metrics
    'metrics.cpu': 'Uzycie CPU',
    'metrics.memory': 'Uzycie pamieci',
    'metrics.disk': 'Uzycie dysku',

    // Benefits
    'benefit.throughWalls': 'Przez sciany',
    'benefit.throughWallsDesc': 'Dziala przez przeszkody stale bez linii wzroku',
    'benefit.privacy': 'Ochrona prywatnosci',
    'benefit.privacyDesc': 'Brak kamer i nagrywania - tylko analiza sygnalow WiFi',
    'benefit.realtime': 'Czas rzeczywisty',
    'benefit.realtimeDesc': 'Mapuje 24 regiony ciala w czasie rzeczywistym przy 100Hz',
    'benefit.lowCost': 'Niski koszt',
    'benefit.lowCostDesc': 'Zbudowany z komercyjnego sprzetu WiFi za $30',

    // Stats
    'stat.bodyRegions': 'Regiony ciala',
    'stat.samplingRate': 'Czestotliwosc',
    'stat.accuracy': 'Dokladnosc (AP@50)',
    'stat.hardwareCost': 'Koszt sprzetu',

    // Actions
    'action.startDetection': 'Rozpocznij detekcje',
    'action.stopDetection': 'Zatrzymaj detekcje',
    'action.toggleTheme': 'Zmien motyw',
    'action.exportData': 'Eksportuj dane',
    'action.screenshot': 'Zrob zrzut ekranu',

    // Connection
    'conn.connected': 'Polaczono',
    'conn.connecting': 'Laczenie...',
    'conn.offline': 'Offline',
    'conn.reconnecting': 'Ponowne laczenie...',
    'conn.live': 'Na zywo',
    'conn.simulated': 'Symulacja',

    // Tooltips
    'tooltip.apiServer': 'Stan serwera REST API dla integracji panelu',
    'tooltip.hardware': 'Status polaczenia z fizycznym interfejsem WiFi (ESP32/CSI)',
    'tooltip.inference': 'Stan backendu sieci neuronowej (RuVector/DensePose)',
    'tooltip.streaming': 'Potok WebSocket do telemetrii w czasie rzeczywistym',
    'tooltip.dataSource': 'Zrodlo danych telemetrii (Symulacja lub Na zywo)',
    'tooltip.cpu': 'Procent procesora hosta zuzywany przez procesy',
    'tooltip.memory': 'Alokacja pamieci RAM dla sieci neuronowej',
    'tooltip.disk': 'Miejsce na dysku dla modeli i logow telemetrii',
    'tooltip.activePersons': 'Liczba oddzielnych osob aktualnie wykrytych w polu',
    'tooltip.avgConfidence': 'Srednia precyzja lub wynik pewnosci aktualnych poz',
    'tooltip.totalDetections': 'Skumulowana suma poprawnie rozwiazanych punktow pozy',
    'tooltip.zoneOccupancy': 'Mapa cieplna obecnosci w zdefiniowanych strefach',
    'tooltip.heartRate': 'Szacowane tetno na podstawie mikroruchow klatki piersiowej',
    'tooltip.respiration': 'Czestotliwosc oddechu (RPM) z ruchow klatki piersiowej',
    'tooltip.confidence': 'Poziom pewnosci AI dotyczacy wyekstrahowanych funkcji zyciowych',
    'tooltip.rssi': 'Wskaznik sily sygnalu (dBm). Blizej 0 oznacza silniejszy sygnal',
    'tooltip.variance': 'Wariancja amplitudy CSI wskazujaca energie ruchu w przestrzeni',
    'tooltip.motion': 'Wynik ruchu kinetycznego z przesuniec Dopplera podnosnych',
    'tooltip.presence': 'Binarna klasyfikacja obecnosci czlowieka',
    'tooltip.fusionVideo': 'Pewnosc pozy na podstawie kamery optycznej',
    'tooltip.fusionCsi': 'Pewnosc pozy na podstawie strumienia WiFi CSI',
    'tooltip.csiHeatmap': 'Wizualizacja amplitud podnosnych WiFi CSI w czasie',
    'tooltip.embeddingSpace': 'Projekcja 2D PCA utajonych reprezentacji',
    'tooltip.ruVector': '6-etapowy potok uwagi neuronowej akcelerowany przez WASM',

    // Architecture
    'arch.title': 'Architektura Systemu',
    'arch.step1.title': 'Wejscie CSI',
    'arch.step1.desc': 'Informacje o stanie kanalu zebrane z szyku antenowego WiFi',
    'arch.step2.title': 'Oczyszczanie Fazy',
    'arch.step2.desc': 'Usuwanie szumow sprzetowych i normalizacja fazy sygnalu',
    'arch.step3.title': 'Translacja Modalnosci',
    'arch.step3.desc': 'Konwersja sygnalow WiFi na reprezentacje wizualna przy uzyciu CNN',
    'arch.step4.title': 'DensePose-RCNN',
    'arch.step4.desc': 'Ekstrakcja punktow kluczowych pozy ludzkiej i segmentacja czesci ciala',
    'arch.step5.title': 'Wyjscie Modelu Krawedziowego',
    'arch.step5.desc': 'Generowanie ostatecznej wizualizacji szkieletu pozy ludzkiej',

    // Performance
    'perf.title': 'Analiza Wydajnosci',
    'perf.wifiCard': 'Na bazie WiFi (Ten sam uklad)',
    'perf.ap': 'Srednia Precyzja:',
    'perf.ap50': 'AP@50:',
    'perf.ap75': 'AP@75:',
    'perf.imageCard': 'Na bazie Obrazu (Odniesienie)',
    'perf.advLimTitle': 'Zalety i Ograniczenia',
    'perf.advTitle': 'Zalety',
    'perf.adv1': 'Wykrywanie przez sciany',
    'perf.adv2': 'Ochrona prywatnosci',
    'perf.adv3': 'Niezaleznosc od oswietlenia',
    'perf.adv4': 'Niskokosztowy sprzet',
    'perf.adv5': 'Wykorzystuje istniejace WiFi',
    'perf.limTitle': 'Ograniczenia',
    'perf.lim1': 'Spadek wydajnosci w roznych ukladach pomieszczen',
    'perf.lim2': 'Wymaga urzadzen kompatybilnych z WiFi',
    'perf.lim3': 'Trening wymaga zsynchronizowanych danych',

    // Misc
    'misc.loading': 'Ladowanie...',
    'misc.error': 'Wystapil blad',
    'misc.noData': 'Brak danych',
    'misc.close': 'Zamknij',
    'misc.cancel': 'Anuluj',
    'misc.confirm': 'Potwierdz',
    'misc.settings': 'Ustawienia',
    'misc.language': 'Jezyk'
  },

  es: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.hardware': 'Hardware',
    'nav.demo': 'Demo en Vivo',
    'nav.architecture': 'Arquitectura',
    'nav.performance': 'Rendimiento',
    'nav.applications': 'Aplicaciones',
    'nav.sensing': 'Sensores',
    'nav.training': 'Entrenamiento',
    'nav.poseFusion': 'Fusión de Poses',
    'nav.observatory': 'Observatorio',

    // Dashboard
    'dashboard.title': 'Detección Revolucionaria de Pose Humana por WiFi',
    'dashboard.subtitle': 'Rastreo Humano a Través de Paredes Usando Señales WiFi',
    'dashboard.description': 'La IA puede rastrear tus movimientos a través de paredes usando solo señales WiFi. Investigadores han entrenado una red neuronal para convertir señales WiFi en modelos de cuerpos humanos.',
    'dashboard.status': 'Estado del Sistema',
    'dashboard.metrics': 'Métricas del Sistema',
    'dashboard.features': 'Características',
    'dashboard.liveStats': 'Estadísticas en Vivo',
    'dashboard.activePersons': 'Personas Activas',
    'dashboard.avgConfidence': 'Confianza Promedio',
    'dashboard.totalDetections': 'Detecciones Totales',
    'dashboard.zoneOccupancy': 'Ocupación por Zonas',

    // Status
    'status.apiServer': 'Servidor API',
    'status.hardware': 'Hardware',
    'status.inference': 'Inferencia',
    'status.streaming': 'Transmisión',
    'status.dataSource': 'Fuente de Datos',

    // Metrics
    'metrics.cpu': 'Uso de CPU',
    'metrics.memory': 'Uso de Memoria',
    'metrics.disk': 'Uso de Disco',

    // Benefits
    'benefits.throughWalls.title': 'A Través de Paredes',
    'benefits.throughWalls.desc': 'Funciona a través de barreras sólidas sin requerir línea de visión',
    'benefits.privacy.title': 'Preservación de Privacidad',
    'benefits.privacy.desc': 'Sin cámaras ni grabación visual - solo análisis de señales WiFi',
    'benefits.realTime.title': 'Tiempo Real',
    'benefits.realTime.desc': 'Mapea 24 regiones corporales en tiempo real a 100Hz',
    'benefits.lowCost.title': 'Bajo Costo',
    'benefits.lowCost.desc': 'Construido con hardware comercial de 30$',

    // Apps 
    'apps.elderly.title': 'Cuidado de Mayores',
    'apps.elderly.desc': 'Monitoriza mayores en busca de caídas o emergencias sin invadir la privacidad.',
    'apps.security.title': 'Sistemas de Seguridad',
    'apps.security.desc': 'Detecta intrusos y monitoriza la seguridad del hogar sin cámaras.',
    'apps.healthcare.title': 'Cuidado de Pacientes',
    'apps.healthcare.desc': 'Monitoriza signos vitales y rastrea anomalías en tiempo real.',
    'apps.building.title': 'Edificios Inteligentes',
    'apps.building.desc': 'Optimiza el consumo y la ocupación de edificios usando WiFi.',
    'apps.arvr.title': 'Aplicaciones AR/VR',
    'apps.arvr.desc': 'Seguimiento de cuerpo completo para entornos virtuales sin trajes especiales.',

    // Stats
    'stat.bodyRegions': 'Regiones del Cuerpo',
    'stat.samplingRate': 'Tasa de Muestreo',
    'stat.accuracy': 'Precisión (AP@50)',
    'stat.hardwareCost': 'Costo Hardware',

    // Actions
    'action.startDetection': 'Iniciar Detección',
    'action.stopDetection': 'Detener Detección',
    'action.toggleTheme': 'Cambiar Tema',
    'action.exportData': 'Exportar Datos',
    'action.screenshot': 'Capturar Pantalla',

    // Connection
    'conn.connected': 'Conectado',
    'conn.connecting': 'Conectando...',
    'conn.offline': 'Desconectado',
    'conn.reconnecting': 'Reconectando...',
    'conn.live': 'En Vivo',
    'conn.simulated': 'Simulado',

    // Tooltips
    'tooltip.apiServer': 'Estado del servidor API REST para la integración del panel web',
    'tooltip.hardware': 'Estado de conectividad de la interfaz física WiFi (ESP32 / Tarjeta CSI)',
    'tooltip.inference': 'Estado del motor de red neuronal que calcula las posturas (RuVector)',
    'tooltip.streaming': 'Tubería de WebSocket para telemetría dinámica en tiempo real',
    'tooltip.dataSource': 'Origen de los datos de telemetría (Simulados o Hardware en Vivo)',
    'tooltip.cpu': 'Porcentaje del procesador del servidor consumido por los procesos analíticos',
    'tooltip.memory': 'Asignación de memoria RAM reservada para la red neuronal y modelos',
    'tooltip.disk': 'Almacenamiento utilizado para guardar modelos y registros de telemetría',
    'tooltip.activePersons': 'Número de cuerpos humanos diferentes actualmente detectados',
    'tooltip.avgConfidence': 'Precisión promedio (AP@50) de la estimación de postura actual (0-100%)',
    'tooltip.totalDetections': 'Suma acumulada de puntos clave anatómicos resueltos desde el inicio',
    'tooltip.zoneOccupancy': 'Distribución gráfica de presencia a través de zonas predefinidas',
    'tooltip.heartRate': 'Frecuencia cardíaca (BPM) estimada a partir de micro-desplazamientos del pecho vía WiFi',
    'tooltip.respiration': 'Frecuencia respiratoria (RPM) capturada de los movimientos periódicos del pecho',
    'tooltip.confidence': 'Nivel de confianza de la IA sobre la estabilidad de los signos vitales extraídos',
    'tooltip.rssi': 'Indicador de fuerza de señal (dBm). Valores cercanos a 0 indican mejor señal',
    'tooltip.variance': 'Varianza de amplitud CSI; indica la energía de movimiento crudo en la sala',
    'tooltip.motion': 'Puntuación cinética de movimiento derivado de los cambios Doppler subportadores',
    'tooltip.presence': 'Clasificación binaria de presencia humana vs habitación vacía',
    'tooltip.fusionVideo': 'Confianza de estimación de postura derivada puramente del sensor de video óptico',
    'tooltip.fusionCsi': 'Confianza de estimación de postura derivada puramente de las ondas WiFi CSI',
    'tooltip.csiHeatmap': 'Visualización temporal de las amplitudes subportadoras de Información de Estado de Canal (CSI)',
    'tooltip.embeddingSpace': 'Proyección 2D PCA de las representaciones latentes de ambas modalidades',
    'tooltip.ruVector': 'Tubería de atención neuronal de 6 etapas acelerada por WebAssembly',

    // Architecture
    'arch.title': 'Arquitectura del Sistema',
    'arch.step1.title': 'Entrada CSI',
    'arch.step1.desc': 'Información de Estado del Canal recopilada de antenas WiFi',
    'arch.step2.title': 'Saneamiento de Fase',
    'arch.step2.desc': 'Eliminación del ruido de hardware y normalización de la fase',
    'arch.step3.title': 'Traducción de Modalidad',
    'arch.step3.desc': 'Conversión de señales WiFi a representación visual usando CNN',
    'arch.step4.title': 'DensePose-RCNN',
    'arch.step4.desc': 'Extracción de puntos clave de postura y segmentación corporal',
    'arch.step5.title': 'Salida Wireframe',
    'arch.step5.desc': 'Generación de la visualización final del esqueleto humano',

    // Performance
    'perf.title': 'Análisis de Rendimiento',
    'perf.wifiCard': 'Basado en WiFi (Mismo plano)',
    'perf.ap': 'Precisión Media:',
    'perf.ap50': 'AP@50:',
    'perf.ap75': 'AP@75:',
    'perf.imageCard': 'Basado en Imagen (Referencia)',
    'perf.advLimTitle': 'Ventajas y Limitaciones',
    'perf.advTitle': 'Ventajas',
    'perf.adv1': 'Detección a través de paredes',
    'perf.adv2': 'Preservación de la privacidad',
    'perf.adv3': 'Independiente de la iluminación',
    'perf.adv4': 'Hardware de bajo coste',
    'perf.adv5': 'Utiliza infraestructura WiFi existente',
    'perf.limTitle': 'Limitaciones',
    'perf.lim1': 'Cae el rendimiento en planos diferentes',
    'perf.lim2': 'Requiere dispositivos WiFi compatibles',
    'perf.lim3': 'El entrenamiento requiere datos sincronizados',

    // Misc
    'misc.loading': 'Cargando...',
    'misc.error': 'Ocurrió un error',
    'misc.noData': 'Sin datos',
    'misc.close': 'Cerrar',
    'misc.cancel': 'Cancelar',
    'misc.confirm': 'Confirmar',
    'misc.settings': 'Ajustes',
    'misc.language': 'Idioma'
  },

  eu: {
    // Navigation
    'nav.dashboard': 'Aginte-Mahaia',
    'nav.hardware': 'Hardwarea',
    'nav.demo': 'Zuzeneko Erakustaldia',
    'nav.architecture': 'Arkitektura',
    'nav.performance': 'Etekinak',
    'nav.applications': 'Aplikazioak',
    'nav.sensing': 'Sentsoreak',
    'nav.training': 'Entrenamendua',
    'nav.poseFusion': 'Jarrera Fusioa',
    'nav.observatory': 'Behatokia',

    // Dashboard
    'dashboard.title': 'WiFi Bidezko Giza Jarreraren Detekzio Iraultzailea',
    'dashboard.subtitle': 'Horma Bidezko Giza Jarraipena WiFi Seinaleak Erabiliz',
    'dashboard.description': 'Adek inteligentzia artifiziala horma bidez gorputzaren mugimenduak jarrai ditzake WiFi seinaleak soilik erabilita. Ikertzaileek neurona-sare bat garatu dute seinale hauek 3D ereduetan bihurtzeko.',
    'dashboard.status': 'Sistemaren Egoera',
    'dashboard.metrics': 'Sistemaren Metrikak',
    'dashboard.features': 'Ezaugarriak',
    'dashboard.liveStats': 'Zuzeneko Estatistikak',
    'dashboard.activePersons': 'Pertsona Aktiboak',
    'dashboard.avgConfidence': 'Batez besteko Segurtasuna',
    'dashboard.totalDetections': 'Detekzio Osoak',
    'dashboard.zoneOccupancy': 'Zonen Okupazioa',

    // Status
    'status.apiServer': 'API Zerbitzaria',
    'status.hardware': 'Hardwarea',
    'status.inference': 'Inherentzia',
    'status.streaming': 'Transmisioa',
    'status.dataSource': 'Datuen Iturria',

    // Metrics
    'metrics.cpu': 'PUZ Erabilera',
    'metrics.memory': 'Memoria Erabilera',
    'metrics.disk': 'Disko Erabilera',

    // Benefits
    'benefits.throughWalls.title': 'Hormen Bidez',
    'benefits.throughWalls.desc': 'Hesi solidoen bidez funtzionatzen du ikusmen lerrorik gabe',
    'benefits.privacy.title': 'Pribatutasuna Babesten',
    'benefits.privacy.desc': 'Kamerarik eta ikus-grabaziorik gabe - WiFi seinaleen analisia soilik',
    'benefits.realTime.title': 'Denbora Errealean',
    'benefits.realTime.desc': 'Gorputzeko 24 zona denbora errealean mapatzen ditu (100Hz)',
    'benefits.lowCost.title': 'Kostu Baxua',
    'benefits.lowCost.desc': '30$ balio duen WiFi hardwarearekin eraikia',

    // Apps 
    'apps.elderly.title': 'Adinekoen Zaintza',
    'apps.elderly.desc': 'Adinekoak erorikoen edo larrialdien bila behatzen ditu, pribatutasuna urratu gabe.',
    'apps.security.title': 'Etxeko Segurtasuna',
    'apps.security.desc': 'Kamera gabe etxearen segurtasuna jarraitzen du eta intrusoak detektatu.',
    'apps.healthcare.title': 'Gaixoen Osasuna',
    'apps.healthcare.desc': 'Bizi-seinaleak irakurri eta anomaliak ikusten ditu medikuntza-zentroetan.',
    'apps.building.title': 'Eraikin Adimendunak',
    'apps.building.desc': 'Energia aurrezten laguntzen du eraikinetako pertsonen presentzia jarraituz.',
    'apps.arvr.title': 'AR/VR Aplikazioak',
    'apps.arvr.desc': 'Errealitate Birtualerako gorputz-jarraipena gaitzen du, ekipamendu astunik gabe.',

    // Stats
    'stat.bodyRegions': 'Gorputz Zatiak',
    'stat.samplingRate': 'Lagin-tasa',
    'stat.accuracy': 'Zehaztasuna (AP@50)',
    'stat.hardwareCost': 'Hardware Kostua',

    // Actions
    'action.startDetection': 'Hasi Detekzioa',
    'action.stopDetection': 'Gelditu Detekzioa',
    'action.toggleTheme': 'Aldatu Gaia',
    'action.exportData': 'Datuak Esportatu',
    'action.screenshot': 'Pantaila Atera',

    // Connection
    'conn.connected': 'Konektatuta',
    'conn.connecting': 'Konektatzen...',
    'conn.offline': 'Lineaz kanpo',
    'conn.reconnecting': 'Birkonektatzen...',
    'conn.live': 'Zuzenean',
    'conn.simulated': 'Simulatua',

    // Tooltips
    'tooltip.apiServer': 'Web aginte-mahaiarekin integratzeko REST API zerbitzariaren egoera',
    'tooltip.hardware': 'WiFi interfaze fisikoaren konektagarritasun egoera (ESP32/CSI-txartela)',
    'tooltip.inference': 'Jarrerak kalkulatzen dituen neurona-sarearen motorraren egoera (RuVector)',
    'tooltip.streaming': 'Denbora errealeko telemetria dinamikorako WebSocket bidea',
    'tooltip.dataSource': 'Telemetriako datuen jatorria (Simulatua edo Zuzeneko Hardwarea)',
    'tooltip.cpu': 'Sentsore prozesuek kontsumitzen duten prozesadorearen ehunekoa',
    'tooltip.memory': 'Neurona-sarerako eta ereduetarako erreserbatutako RAM memoria',
    'tooltip.disk': 'Ereduak eta telemetriako erregistroak gordetzeko disko espazioa',
    'tooltip.activePersons': 'Sentsore-eremuan une honetan detektatutako giza-gorputz kopurua',
    'tooltip.avgConfidence': 'Uneko jarreraren estimazioaren batez besteko zehaztasuna (AP@50)',
    'tooltip.totalDetections': 'Hasieratik arrakastaz ebatzitako puntu anatomikoen batura metatua',
    'tooltip.zoneOccupancy': 'Aurredefinitutako zonen bidezko presentziaren banaketa grafikoa',
    'tooltip.heartRate': 'Bihotz-maiztasun estimatua (BPM), bularreko mikromugimenduetatik WiFi bidez lortua',
    'tooltip.respiration': 'Arnasketa-tasa (RPM) bularraren mugimendu periodikoetatik atzemana',
    'tooltip.confidence': 'Adimen Artifizialaren konfiantza-maila ateratako bizi-seinaleen egonkortasunaren inguruan',
    'tooltip.rssi': 'Seinalearen indarraren adierazlea (dBm). 0tik gertuago, seinale hobea',
    'tooltip.variance': 'CSI anplitudearen bariantza, espazioko mugimendu gordinaren energia adierazten du',
    'tooltip.motion': 'Mugimendu zinetikoaren puntuazioa, uhin-azpieramaileen Doppler aldaketetatik lortua',
    'tooltip.presence': 'Giza presentziaren sailkapen bitarra gela hutsaren aurrean',
    'tooltip.fusionVideo': 'Bideo sentsore optikotik soilik eratorritako jarreraren estimazio-konfiantza',
    'tooltip.fusionCsi': 'WiFi CSI uhinetatik soilik eratorritako jarreraren estimazio-konfiantza',
    'tooltip.csiHeatmap': 'Kanaleko Egoeraren Informazioaren (CSI) anplitudeen denbora-serieko bistaratzea',
    'tooltip.embeddingSpace': 'Bi modalitateetako irudikapen latenteen 2D PCA proiekzioa',
    'tooltip.ruVector': 'WebAssembly bidez azeleratutako 6 etapako arreta neuronaleko kanala',

    // Architecture
    'arch.title': 'Sistemaren Arkitektura',
    'arch.step1.title': 'CSI Sarrera',
    'arch.step1.desc': 'WiFi antena saretik jasotako Kanaleko Egoeraren Informazioa',
    'arch.step2.title': 'Fasearen Saneamendua',
    'arch.step2.desc': 'Hardware zarata ezabatu eta seinalearen fasea normalizatu',
    'arch.step3.title': 'Modalitate Itzulpena',
    'arch.step3.desc': 'WiFi seinaleak irudikapen bisualera bihurtzea CNN bidez',
    'arch.step4.title': 'DensePose-RCNN',
    'arch.step4.desc': 'Giza jarreraren puntu gakoak eta gorputz atalen segmentazioa atera',
    'arch.step5.title': 'Wireframe Irteera',
    'arch.step5.desc': 'Giza jarreraren azken eskeletoaren bistaratzea sortu',

    // Performance
    'perf.title': 'Errendimendu Analisia',
    'perf.wifiCard': 'WiFi bidezkoa (Eremu berean)',
    'perf.ap': 'Batez Besteko Zehaztasuna:',
    'perf.ap50': 'AP@50:',
    'perf.ap75': 'AP@75:',
    'perf.imageCard': 'Irudi bidezkoa (Erreferentzia)',
    'perf.advLimTitle': 'Abantailak eta Mugak',
    'perf.advTitle': 'Abantailak',
    'perf.adv1': 'Horma zeharkako detekzioa',
    'perf.adv2': 'Pribatutasuna babesten du',
    'perf.adv3': 'Argiztapenaren independentea',
    'perf.adv4': 'Kostu baxuko hardwarea',
    'perf.adv5': 'Dagoen WiFi azpiegitura erabiltzen du',
    'perf.limTitle': 'Mugak',
    'perf.lim1': 'Errendimenduak behera egiten du gela ezberdinetan',
    'perf.lim2': 'WiFi bidezko gailu bateragarriak behar ditu',
    'perf.lim3': 'Entrenamenduak datu sinkronizatuak behar ditu',

    // Misc
    'misc.loading': 'Kargatzen...',
    'misc.error': 'Akats bat gertatu da',
    'misc.noData': 'Daturik ez',
    'misc.close': 'Itxi',
    'misc.cancel': 'Utzi',
    'misc.confirm': 'Baieztatu',
    'misc.settings': 'Ezarpenak',
    'misc.language': 'Hizkuntza'
  }
};

export class I18n {
  constructor() {
    this.locale = this.getSavedLocale() || this.detectLocale();
    this.listeners = [];
  }

  init() {
    this.createSelector();
    this.applyTranslations();
  }

  detectLocale() {
    const lang = navigator.language?.toLowerCase() || 'en';
    if (lang.startsWith('pl')) return 'pl';
    return 'en';
  }

  getSavedLocale() {
    try { return localStorage.getItem('ruview-locale'); }
    catch { return null; }
  }

  saveLocale(locale) {
    try { localStorage.setItem('ruview-locale', locale); }
    catch { /* noop */ }
  }

  t(key) {
    const dict = translations[this.locale] || translations.en;
    return dict[key] || translations.en[key] || key;
  }

  setLocale(locale) {
    if (!translations[locale]) return;
    this.locale = locale;
    this.saveLocale(locale);
    document.documentElement.setAttribute('lang', locale);
    this.applyTranslations();
    this.listeners.forEach(cb => { try { cb(locale); } catch { /* noop */ } });
  }

  onLocaleChange(callback) {
    this.listeners.push(callback);
    return () => {
      const i = this.listeners.indexOf(callback);
      if (i > -1) this.listeners.splice(i, 1);
    };
  }

  applyTranslations() {
    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', this.t(key));
    });

    // Translate tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', this.t(key));
    });

    // Update language selector
    const selector = document.getElementById('lang-selector');
    if (selector) selector.value = this.locale;
  }

  createSelector() {
    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector-wrap';
    wrapper.innerHTML = `
      <select id="lang-selector" class="lang-selector" aria-label="Language">
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="es">ES</option>
        <option value="eu">EU</option>
      </select>
    `;

    const select = wrapper.querySelector('select');
    select.value = this.locale;
    select.addEventListener('change', () => this.setLocale(select.value));

    // Busca un contenedor apto en las distintas páginas
    const container = document.querySelector('.header-info') || 
                      document.querySelector('#status-bar') || 
                      document.querySelector('.header-right');
                      
    if (container) {
      container.appendChild(wrapper);
    }
  }

  getAvailableLocales() {
    return Object.keys(translations);
  }

  dispose() {
    this.listeners = [];
  }
}

export const i18n = new I18n();
