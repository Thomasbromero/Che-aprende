@echo off
title Che, aprende
cd /d "%~dp0"

REM --- Verifica que este instalado Node.js ---
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo   No se encontro Node.js.
  echo   Instalalo desde https://nodejs.org y volve a hacer doble clic aca.
  echo.
  pause
  exit /b 1
)

echo.
echo   ================================================
echo      Che, aprende  -  http://localhost:3039
echo   ------------------------------------------------
echo      Se abre sola en el navegador en unos segundos.
echo      Deja esta ventana abierta mientras la uses.
echo      Para apagar la app: cerra esta ventana.
echo   ================================================
echo.

REM --- Abre el navegador a los 2 segundos, sin bloquear el servidor ---
start "" /min powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:3039'"

REM --- Arranca el servidor (queda corriendo hasta que cierres la ventana) ---
node "%~dp0server.js"

echo.
echo   El servidor se detuvo. Podes cerrar esta ventana.
pause
