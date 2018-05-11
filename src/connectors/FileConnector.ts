import IConnector = require("./IConnector");

class FileConnector implements IConnector {
    constructor() { }
    Execute(): void {
        console.log("File connector command executed");
    }
}

export = FileConnector;