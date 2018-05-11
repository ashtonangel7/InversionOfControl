import ICommand = require("./ICommand");
import ICommandFactory = require("./ICommandFactory");

import DataFlow = require("../dataflows/DataFlow");
import ConcreteReader = require("../dataflows/readers/ConcreteReader");
import SqlConnector = require("../connectors/SqlConnector")

class SqlCommand implements ICommand, ICommandFactory {
    CommandName: string;
    Description: string;

    constructor() {
        this.CommandName = "SqlCommand";
        this.Description = "SqlCommand";
    }
    MakeCommand(args: string[]): ICommand {
        return new SqlCommand();
    }
    execute(): void {
        
        let sqlConnector = new SqlConnector();
        let concreteReader = new ConcreteReader(sqlConnector);
        let dataFlow = new DataFlow(concreteReader);
        dataFlow.Read();
    }
}

export = SqlCommand;