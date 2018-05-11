import ICommand = require("./ICommand");
import ICommandFactory = require("./ICommandFactory");

import DataFlow = require("../dataflows/DataFlow");
import ConcreteReader = require("../dataflows/readers/ConcreteReader");
import FileConnector = require("../connectors/FileConnector");

class FileCommand implements ICommand, ICommandFactory {
    CommandName: string;
    Description: string;
    constructor() { 
        this.CommandName = "File";
        this.Description = "FileCommand";
    }
    MakeCommand(args: string[]): ICommand {
        return new FileCommand();
    }
    execute(): void {
        let fileConnector = new FileConnector();
        let concreteReader = new ConcreteReader(fileConnector);
        let dataFlow = new DataFlow(concreteReader);
        dataFlow.Read();
    }
}

export = FileCommand;