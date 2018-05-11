import ICommand = require("./ICommand");
import ICommandFactory = require("./ICommandFactory");

class NullCommand implements ICommand, ICommandFactory {
    CommandName: string;
    Description: string;

    constructor() { }
    MakeCommand(args: string[]): ICommand {
        return new NullCommand();
    }
    execute(): void {
        console.log("Command not found.");
    }
}

export = NullCommand;