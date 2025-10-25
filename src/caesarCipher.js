export default function caesarCipher(str, shift) {
    const shiftChar = (char) => {
      const code = char.charCodeAt(0);
  
      if (code >= 65 && code <= 90) { // A–Z
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) { // a–z
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        return char; // punctuation, spaces
      }
    };
  
    return str.split('').map(shiftChar).join('');
  }
  