const { app, BrowserWindow } = require('electron');


function createWindow() {
    //Create a browser window
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    // load the index.html file
    win.loadFile('index.html');
}

app.on('ready', createWindow);