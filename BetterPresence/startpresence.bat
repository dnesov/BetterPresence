@echo off
title BetterPresence
if exist "./node_modules" if exist "./node_modules/async-limiter" if exist "./node_modules/discord.js" if exist "./node_modules/discord-rpc" if exist "./node_modules/pako" if exist "./node_modules/prism-media" if exist "./node_modules/safe-buffer" if exist "./node_modules/snekfetch" if exist "./node_modules/tweetnacl" if exist "./node_modules/ws" goto startapp
:dependenciesalert
@echo In order to make this utility work, you need to install dependencies!
@echo do you want to install them? (Y/N)
set /p answer=
if %answer% == Y goto installdependencies
if %answer% == N goto exitapp

:installdependencies
@echo Installing dependencies...
npm i discord-rpc
pause
:exitapp
exit
:startapp
node ./src/main.js