const path = require('path');
const fs = require('fs');
const { program } = require('commander');

program
  .version('0.0.1')
  .description('Caesar cipher cli');

program
  .option('-s, --shift', 'a shift', () => {console.log('SHIFT')})
  .option('-i, --input', 'an input file', () => {console.log('INPUT')})
  .option('-o, --output', 'an output file', () => {console.log('OUTPUT')})
  .option('-a, --actio', 'an action encode/decode', () => {console.log('ACTION')})

program.parse(process.argv);

const fileOutput = path.join(__dirname, 'caesar-cipher-cli', 'output.txt');
const fileInput = path.join(__dirname, 'caesar-cipher-cli', 'input.txt');

const text = fs.readFileSync(fileInput, 'utf-8', (err, content) => content.toString());

fs.appendFile(fileOutput, `\n${text}`, () => {});
 