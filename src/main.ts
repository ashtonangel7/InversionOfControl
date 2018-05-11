import ICommandFactory = require("./command/ICommandFactory");
import CommandParser = require("./command/CommandParser");

import SqlCommand = require("./command/SqlCommand");
import FileCommand = require("./command/FileCommand");

let availableCommands: Array<ICommandFactory> = [
    new SqlCommand(),
    new FileCommand()
];

if (process.argv.length < 3) {
    console.log("Available commands.");
    for (let availableCommand of availableCommands){ 
        console.log(`--> ${availableCommand.CommandName}`);
    }
}

let parser: CommandParser = new CommandParser(availableCommands);
let command = parser.ParseCommand(process.argv);

command.execute();




