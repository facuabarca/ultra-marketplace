const { app, BrowserWindow } = require("electron");

let appWin;

function isDev() {
    return !app.isPackaged;
}

createWindow = () => {
    appWin = new BrowserWindow({
        width: 1500,
        height: 1200,
        title: "Ultra-Marketplace",
        resizable: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    
    appWin.loadURL(`file://${__dirname}/dist/index.html`)

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});