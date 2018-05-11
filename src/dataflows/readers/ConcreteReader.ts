import IReader = require("./IReader");
import IConnector = require("../../connectors/IConnector");

class ConcreteReader implements IReader {
    public readonly _connector: IConnector;

    constructor(connector: IConnector) { 
        this._connector = connector;
    }
    Read(): void {
        this._connector.Execute();
    }
}

export = ConcreteReader;