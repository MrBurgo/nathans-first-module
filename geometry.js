// Geometry stuff
const { sphereVolume, torusVolume } = require('./volume.js');
const chalk = require('chalk')

console.log(chalk.yellow(torusVolume(4, 3)));

console.log(chalk.bgRed(sphereVolume(1)));
