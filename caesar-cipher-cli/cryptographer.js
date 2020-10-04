const path = require('path');
const fs = require('fs');

const cryptographer = (shift, input, output, action) => {
  const fileInput = path.join(__dirname, '', input);
  const fileOutput = path.join(__dirname, '', output);
  const text = fs.readFileSync(fileInput, 'utf-8', (err, content) => content.toString());
  const charsArray = text.split('').map(el => el.charCodeAt());
  let result = '';

  if (shift < 0) {
    return process.stderr.write('Shift must be positive number \n')
  } else if (shift > 26) {
    shift = shift % 26
  }

  if (action === 'encode') {
    const newCharsArray = charsArray.map(el => {
      if (el >= 65 && el <= 90) {
        if (el + Number(shift) > 90) {
          return (el + Number(shift)) - 26;
        } else {
          return el + Number(shift);
        }
      } else if (el >= 97 && el <= 122) {
        if (el + Number(shift) > 122) {
          return (el + Number(shift)) - 26;
        } else {
          return el + Number(shift);
        }
      } else {
        return el
      }
    });
    result = String.fromCharCode(...newCharsArray);
    // console.log(text, '   ', result);    
  } else if (action === 'decode') {
    const newCharsArray = charsArray.map(el => {
      if (el >= 65 && el <= 90) {
        if (el - Number(shift) < 65) {
          return (el - Number(shift)) + 26;
        } else {
          return el - Number(shift);
        }
      } else if (el >= 97 && el <= 122) {
        if (el - Number(shift) < 97) {
          return (el - Number(shift)) + 26;
        } else {
          return el - Number(shift);
        }
      } else {
        return el
      }
    });
    result = String.fromCharCode(...newCharsArray);
    // console.log(text, '   ', result);
  } else {
    return process.stderr.write('Wrong action \n');
  }

  fs.appendFile(fileOutput, `${result}\n`, () => {});
};

module.exports = cryptographer;
