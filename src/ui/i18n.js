export const translations = {
    en: {
        "dashboard.subtitle": "Human Tracking Through Walls Using WiFi Signals",
        "dashboard.title": "Revolutionary WiFi-Based Human Pose Detection",
        "dashboard.status": "System Status",
        "dashboard.metrics": "System Metrics",
        "dashboard.features": "Features",
        "dashboard.liveStats": "Live Statistics",
        "metrics.cpu": "CPU Usage",
        "metrics.memory": "Memory Usage",
        "metrics.disk": "Disk Usage",
        "benefits.throughWalls.title": "Through Walls",
        "benefits.throughWalls.desc": "Works through solid barriers with no line of sight required",
        "benefits.privacy.title": "Privacy-Preserving",
        "benefits.privacy.desc": "No cameras or visual recording - just WiFi signal analysis",
        "benefits.realTime.title": "Real-Time",
        "benefits.realTime.desc": "Maps 24 body regions in real-time at 100Hz sampling rate",
        "benefits.lowCost.title": "Low Cost",
        "benefits.lowCost.desc": "Built using $30 commercial WiFi hardware",
        "apps.elderly.title": "Elderly Care Monitoring",
        "apps.elderly.desc": "Monitor elderly individuals for falls or emergencies without invading privacy. Track movement patterns and detect anomalies in daily routines.",
        "apps.security.title": "Home Security Systems",
        "apps.security.desc": "Detect intruders and monitor home security without visible cameras. Track multiple persons and identify suspicious movement patterns.",
        "apps.healthcare.title": "Healthcare Patient Monitoring",
        "apps.healthcare.desc": "Monitor patients in hospitals and care facilities. Track vital signs through movement analysis and detect health emergencies.",
        "apps.building.title": "Smart Building Occupancy",
        "apps.building.desc": "Optimize building energy consumption by tracking occupancy patterns. Control lighting, HVAC, and security systems automatically.",
        "apps.arvr.title": "AR/VR Applications",
        "apps.arvr.desc": "Enable full-body tracking for virtual and augmented reality applications without wearing additional sensors or cameras."
    },
    es: {
        "dashboard.subtitle": "Rastreo Humano a Través de Paredes Usando Señales WiFi",
        "dashboard.title": "Detección Revolucionaria de Pose Humana por WiFi",
        "dashboard.status": "Estado del Sistema",
        "dashboard.metrics": "Métricas del Sistema",
        "dashboard.features": "Características",
        "dashboard.liveStats": "Estadísticas en Vivo",
        "metrics.cpu": "Uso de CPU",
        "metrics.memory": "Uso de Memoria",
        "metrics.disk": "Uso de Disco",
        "benefits.throughWalls.title": "A Través de Paredes",
        "benefits.throughWalls.desc": "Funciona a través de barreras sólidas sin requerir línea de visión",
        "benefits.privacy.title": "Preservación de Privacidad",
        "benefits.privacy.desc": "Sin cámaras ni grabación visual - solo análisis de señales WiFi",
        "benefits.realTime.title": "Tiempo Real",
        "benefits.realTime.desc": "Mapea 24 regiones corporales en tiempo real a 100Hz",
        "benefits.lowCost.title": "Bajo Coste",
        "benefits.lowCost.desc": "Construido con hardware WiFi comercial de 30$",
        "apps.elderly.title": "Monitorización de Cuidado de Ancianos",
        "apps.elderly.desc": "Monitorea a personas mayores para detectar caídas o emergencias sin invadir la privacidad. Rastrea patrones de movimiento y anomalías.",
        "apps.security.title": "Sistemas de Seguridad del Hogar",
        "apps.security.desc": "Detecta intrusos y monitorea la seguridad sin cámaras visibles. Rastrea múltiples personas y patrones sospechosos.",
        "apps.healthcare.title": "Monitorización de Pacientes",
        "apps.healthcare.desc": "Monitorea pacientes en hospitales y centros de cuidado. Rastrea signos vitales mediante movimiento y detecta emergencias.",
        "apps.building.title": "Ocupación de Edificios Inteligentes",
        "apps.building.desc": "Optimiza el consumo energético rastreando patrones de ocupación. Controla iluminación, climatización y seguridad automáticamente.",
        "apps.arvr.title": "Aplicaciones AR/VR",
        "apps.arvr.desc": "Permite el seguimiento de cuerpo completo para realidad virtual y aumentada sin sensores o cámaras adicionales."
    },
    eu: {
        "dashboard.subtitle": "Horma Bidezko Giza Jarraipena WiFi Seinaleak Erabiliz",
        "dashboard.title": "WiFi Bidezko Giza Jarreraren Detekzio Iraultzailea",
        "dashboard.status": "Sistemaren Egoera",
        "dashboard.metrics": "Sistemaren Metrikak",
        "dashboard.features": "Ezaugarriak",
        "dashboard.liveStats": "Zuzeneko Estatistikak",
        "metrics.cpu": "PUZ Erabilera",
        "metrics.memory": "Memoria Erabilera",
        "metrics.disk": "Disko Erabilera",
        "benefits.throughWalls.title": "Horma Bidez",
        "benefits.throughWalls.desc": "Horma solidoen bidez funtzionatzen du, ikusmen-lerro zuzenik gabe",
        "benefits.privacy.title": "Pribatutasunaren Babesa",
        "benefits.privacy.desc": "Kamera edo grabazio bisualik gabe - WiFi seinaleen analisia soilik",
        "benefits.realTime.title": "Denbora Errealean",
        "benefits.realTime.desc": "Gorputzeko 24 eskualde mapatzen ditu denbora errealean 100Hz-ko tasan",
        "benefits.lowCost.title": "Kostu Baxua",
        "benefits.lowCost.desc": "30$ balio duten WiFi hardware komertzialekin eraikia",
        "apps.elderly.title": "Adinekoen Zaintzaren Jarraipena",
        "apps.elderly.desc": "Adinekoak monitorizatu erorikoak edo larrialdiak detektatzeko pribatutasuna urratu gabe. Mugimendu ereduak eta anomaliak jarraitu.",
        "apps.security.title": "Etxeko Segurtasun Sistemak",
        "apps.security.desc": "Intrusoak detektatu eta etxeko segurtasuna monitorizatu kamera ikusgarriak gabe. Pertsona anitzen eta portaera susmagarrien jarraipena egin.",
        "apps.healthcare.title": "Gaixoen Osasun-Jarraipena",
        "apps.healthcare.desc": "Gaixoak ospitale eta zaintza zentroetan monitorizatu. Bizi-seinaleak jarraitu mugimenduaren bidez eta osasun larrialdiak detektatu.",
        "apps.building.title": "Eraikin Adimendunen Okupazioa",
        "apps.building.desc": "Energia kontsumoa optimizatu okupazio ereduak jarraituz. Argiztapena, klimatizazioa eta segurtasuna automatikoki kontrolatu.",
        "apps.arvr.title": "AR/VR Aplikazioak",
        "apps.arvr.desc": "Gorputz osoko jarraipena ahalbidetu errealitate birtual eta areagotuko aplikazioetarako sentsore edo kamera gehigarririk gabe."
    }
};

export function updateLanguage(lang) {
    const dict = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
            element.textContent = dict[key];
        }
    });
    localStorage.setItem('ruview_lang', lang);
}
