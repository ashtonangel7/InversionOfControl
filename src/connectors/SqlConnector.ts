import Connector = require("./Connector");

class SqlConnector extends Connector {
    constructor() {
        super();
    }
    Connect(): void {
        console.log("SqlConnector Connected.");
    }
    Execute(): void {
        this.Connect();
        console.log("Sql Connctor command executed.");
        this.Disconnect();
    }
    Disconnect(): void {
        console.log("SqlConnector disconnected.");
    }
}

export = SqlConnector