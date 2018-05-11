import ICommandFactory = require("./ICommandFactory");
import ICommand = require("./ICommand");

class CommandParser {
    private readonly _availableCommands: Array<ICommandFactory>;
    constructor(availableCommands: Array<ICommandFactory>) {
        this._availableCommands = availableCommands;
    }

    private FindRequestedCommand(commandName: string): ICommandFactory {
        return this._availableCommands.find((com) => {
            return com.CommandName == commandName;
        });
    }

    ParseCommand(args: Array<string>): ICommand {
        let requestedCommand = args[2];
        let command = this.FindRequestedCommand(requestedCommand);

        if (command) {
            return command.MakeCommand(args);
        }
        else {
            console.log("Command not found.");
            return null;
        }
    }
}

export = CommandParser;