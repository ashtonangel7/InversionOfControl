import ICommand = require("./ICommand");

interface ICommandFactory {
    CommandName: string;
    Description: string;

    MakeCommand(args: Array<string>): ICommand;
}

export = ICommandFactory;