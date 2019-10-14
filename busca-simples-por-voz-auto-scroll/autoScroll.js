(function() {
  var run = function() {
    setTimeout(function() {
      document.getElementById("_").value +=
        Array.apply(0, Array(Math.floor(Math.random() * 111)))
          .map(function() {
            return (function(charset) {
              return charset.charAt(Math.floor(Math.random() * charset.length));
            })(
              " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
            );
          })
          .join("") + "\n";
      // window.scroll(0,document.body.scrollHeight);
      run();

      setTimeout(function() {
        var textArea = document.getElementById("_");
        textArea.scrollTop = textArea.scrollHeight;
      }, 10);
    }, 111);
  };
  run();
})();
