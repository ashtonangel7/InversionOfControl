import ICommand = require("./ICommand");
import ICommandFactory = require("./ICommandFactory");

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
        console.log("Executing Sql Command.");
    }
}

export = SqlCommand;