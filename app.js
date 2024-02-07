function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const result = encrypt(inputText);
    document.getElementById('encryptedText').value = result;
  }
  
  function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const result = decrypt(inputText);
    document.getElementById('encryptedText').value = result;
  }
  
  function copyResult() {
    const resultElement = document.getElementById('encryptedText');
    const resultText = resultElement.value;
  
    // Se a caixa de texto criptografada estiver vazia, copia o texto original
    const textToCopy = resultText || document.getElementById('inputText').value;
  
    // Cria um elemento de texto temporário e o seleciona
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
  
    // Copia o texto para a área de transferência
    document.execCommand('copy');
  
    // Remove o elemento temporário
    document.body.removeChild(tempElement);
  
    alert('Texto copiado para a área de transferência!');
  }
  
  function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }
  
  function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
  }
  
