setTimeout(function TareaA() {
  setTimeout(function TareaB() {
    setTimeout(function TareaC() {
      setTimeout(function TareaD() {}, 1000);
    }, 1000);
  }, 1000);
}, 1000);
