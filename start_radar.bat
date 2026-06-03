@echo off
title Lanzador Biosense-WiFi-Radar (Edge Server)
color 0B

echo ========================================================
echo       BIOSENSE WIFI RADAR - IoMT Edge Server
echo ========================================================
echo.
echo Iniciando infraestructura de contenedores Docker...
echo.

:: Navegar al directorio de despliegue donde está el docker-compose.yml
cd /d "%~dp0\deploy"

:: Apagar cualquier instancia previa que pudiera haberse quedado colgada
echo [1/3] Limpiando contenedores huérfanos previos...
docker-compose down

:: Levantar el nuevo entorno en segundo plano (-d detached)
echo.
echo [2/3] Levantando el servidor de Telemetria y WebGL...
docker-compose up -d

:: Esperar 3 segundos para asegurar que el servidor web interno haya arrancado
timeout /t 3 /nobreak > NUL

:: Abrir el navegador por defecto apuntando al dashboard
echo.
echo [3/3] Abriendo Consola Clinica en el navegador...
start http://localhost:3030/ui/index.html

echo.
echo ========================================================
echo Sistema desplegado con exito.
echo Para apagar el servidor, cierra la ventana del navegador 
echo y ejecuta 'docker-compose down' en la carpeta deploy.
echo Puedes cerrar esta ventana negra de consola.
echo ========================================================
pause
