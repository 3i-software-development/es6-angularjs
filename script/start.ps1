node ./script/precompile.js
node ./script/lib/css.js client/assets/stylesheets/main.css client/main.css
# node ./script/lib/watch.js --root ./client
# node ./script/lib/server.js --port=3010 --open=true --verbose --root ./client
$npm = "C:\Program Files\nodejs\node.exe"
$params1 = "./script/lib/watch.js --root ./client"
$params2 = "./script/lib/server.js --port=3010 --open=true --verbose --root ./client"
Start-Process -NoNewWindow $npm $params1
Start-Process -NoNewWindow $npm $params2