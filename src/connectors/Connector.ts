import IConnector = require("./IConnector");

abstract class Connector implements IConnector {
    abstract Execute(): void;
    constructor() { }
    Connect(): void { }
    Disconnect(): void { }
}

export = Connector;
