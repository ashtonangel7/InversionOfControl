import IDataFlow = require("./IDataFlow");
import IReader = require("./readers/IReader");

class DataFlow implements IDataFlow {
    
    private readonly _reader: IReader;

    constructor(reader: IReader) {
        this._reader = reader;
    }
    Read(): void {
        this._reader.Read();
    }
    Write(): void {
        throw new Error("Method not implemented.");
    }
}

export = DataFlow;