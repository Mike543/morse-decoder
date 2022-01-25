const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    let n = 0;
    for (let i = 0; i < (expr.length / 10); i++, n += 10) {
      let char = "";
      let code = expr.substr(n, 10);
      if (code[0] == "*") {
        result += " ";
        continue;
      }
      let j = 0;
      while (code[j] == "0") j++;
      j++;
      for (j; j < 10; j += 2) {
        if (code[j] == 0) {
          char += ".";
        } else {
          char += "-";
        }
      }
      result += MORSE_TABLE[char];
    }
    return result;
  }
module.exports = {
    decode
}