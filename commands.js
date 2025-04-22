import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
// function createCommandChoices() {
//   const choices = getRPSChoices();
//   const commandChoices = [];

//   for (let choice of choices) {
//     commandChoices.push({
//       name: capitalize(choice),
//       value: choice.toLowerCase(),
//     });
//   }

//   return commandChoices;
// }

// Simple test command
var TEST_COMMAND = {
  name: 'count',
  description: 'Counting test',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// Command containing options
var TIMELEFT_COMMAND = {
  name: 'time',
  description: 'Displays time left before server shuts down',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

var ALL_COMMANDS = [TEST_COMMAND, TIMELEFT_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
