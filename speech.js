if ('speechSynthesis' in window) {
    console.log('Web Speech API is supported.');
  
    var div = document.createElement('div');
    div.style.width = '580px';
    div.style.height = '280px';
    div.style.backgroundColor = 'aliceblue';
    div.style.padding = '20px';
    div.style.borderRadius = '6px';
    div.style.textAlign = 'center';
    document.body.appendChild(div);

    var h1 = document.createElement('h1');
    h1.textContent = 'Text-Speech';
    div.appendChild(h1);

    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.style.width = '80%';
    inputField.style.height = '100px';
    inputField.style.margin = '10px 0';
    inputField.style.padding= '5px';
    inputField.style.outline = 'none';
    inputField.placeholder = 'Enter text here';
    div.appendChild(inputField);
  
    
    var button = document.createElement('button');
    button.textContent = 'SpeakOut';
    button.style.width = '150px';
    button.style.height = '30px';
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.borderRadius = '6px';
    button.style.border = 'none'
    div.appendChild(button);
  
    
    button.addEventListener('click', () => {
      var text = inputField.value;
      if (text) {
        textToVoice(text);
      }
    });
  
    function textToVoice(text) {

      var utterance = new SpeechSynthesisUtterance(text);
  
      
      utterance.lang = 'en-US'; 
      utterance.pitch = 3;      
      utterance.rate = 0.6;   
      utterance.volume = 2;     
  
     
      window.speechSynthesis.speak(utterance);
    }
  } else {
    console.log('Web Speech API is not supported in this browser.');
  }