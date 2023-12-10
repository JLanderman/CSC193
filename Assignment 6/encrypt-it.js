(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    const encryptButton = document.getElementById('encrypt-it');
    const resetButton = document.getElementById('reset');
    encryptButton.addEventListener('click', handleClick);
    resetButton.addEventListener('click', handleReset);
  }

  function handleClick() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = shiftCipher(inputText); // Encrypt the input text
    displayResult(encryptedText); // Display the encrypted text
  }

  function handleReset() {
    const inputText = document.getElementById('input-text');
    inputText.value = '';
    displayResult(''); // Clear the displayed result on reset
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char < 'a' || char > 'z') {
        result += char;
      } else if (char === 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let code = text.charCodeAt(i);
        let shiftedCode = code + 1;
        let resultLetter = String.fromCharCode(shiftedCode);
        result += resultLetter;
      }
    }
    return result;
  }

  function displayResult(text) {
    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = text;
  }

})();
