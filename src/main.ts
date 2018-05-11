import ICommandFactory = require("./command/ICommandFactory");
import CommandParser = require("./command/CommandParser");

import SqlCommand = require("./command/SqlCommand");

let availableCommands: Array<ICommandFactory> = [
    new SqlCommand()
];

let parser: CommandParser = new CommandParser(availableCommands);
let command = parser.ParseCommand(process.argv);

command.execute();




