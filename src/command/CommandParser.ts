import ICommandFactory = require("./ICommandFactory");
import ICommand = require("./ICommand");
import NullCommand = require("./NullCommand");

class CommandParser {
    private readonly _availableCommands: Array<ICommandFactory>;
    constructor(availableCommands: Array<ICommandFactory>) {
        this._availableCommands = availableCommands;
    }

    private FindRequestedCommand(commandName: string): ICommandFactory {
        return this._availableCommands.find((com) => {
            let lowerCommand = com.CommandName.toLowerCase();
            let lowerCompareCommand = commandName == null ? "" : commandName.toLowerCase();
            return lowerCommand == commandName;
        });
    }

    ParseCommand(args: Array<string>): ICommand {
        let requestedCommand = args[2];
        let command = this.FindRequestedCommand(requestedCommand);

        if (command) {
            return command.MakeCommand(args);
        }
        else {
            return new NullCommand();
        }
    }
}

export = CommandParser;