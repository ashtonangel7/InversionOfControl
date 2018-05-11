import DataFlow = require("./dataflows/DataFlow");
import ConcreteReader = require("./dataflows/readers/ConcreteReader");
import SqlConnector = require("./connectors/SqlConnector")
import FileConnector = require("./connectors/FileConnector");

import ICommandFactory = require("./command/ICommandFactory");
import SqlCommand = require("./command/SqlCommand");
import CommandParser = require("./command/CommandParser");

let sqlConnector = new SqlConnector();
let fileConnector = new FileConnector();

let concreteReader: ConcreteReader;
concreteReader = new ConcreteReader(fileConnector);

let availableCommands: Array<ICommandFactory> = [
    new SqlCommand()
];

let parser: CommandParser = new CommandParser(availableCommands);
let command = parser.ParseCommand(process.argv);

if (command) {
    command.execute();
}

let dataFlow = new DataFlow(concreteReader);
dataFlow.Read();

