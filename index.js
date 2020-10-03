// const path = require('path');
// const fs = require('fs');
const { program } = require('commander');
const cryptographer = require('./caesar-cipher-cli/cryptographer');

program
  .version('0.0.1')
  .description('Caesar cipher cli');

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .option('-a, --actio <action>', 'an action encode/decode')
  
program.parse(process.argv);

cryptographer(program.shift, program.input, program.output, program.actio);