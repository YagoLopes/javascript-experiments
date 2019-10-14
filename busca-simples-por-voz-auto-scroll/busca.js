(function() {
  var speakBtn = document.querySelector("#speakbt");
  var resultSpeaker = document.querySelector("#resultSpeak");

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    var myRecognition = new SpeechRecognition();

    myRecognition.lang = "pt-BR";

    speakBtn.addEventListener(
      "click",
      function() {
        try {
          myRecognition.start();

          resultSpeaker.innerHTML = "Estou te ouvindo!";
        } catch (erro) {
          alert("erro:" + erro.message);
        }
      },
      false
    );

    myRecognition.addEventListener(
      "result",
      function(evt) {
        var resultSpeak = evt.results[0][0].transcript;
        if (resultSpeak) {
          resultSpeaker.innerHTML = resultSpeak;
        }
      },
      false
    );

    myRecognition.addEventListener(
      "error",
      function(evt) {
        resultSpeaker.innerHTML =
          "Se você disse alguma coisa, não ouvi muito bem!";
      },
      false
    );
  } else {
    resultSpeaker.innerHTML = "Seu navegador não suporta tanta tecnoligia!";
  }
})();
