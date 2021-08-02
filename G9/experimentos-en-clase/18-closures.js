function padre() {
  //hoisting
  var dentro;
  var algo = 1;
  var otracosa = 2;
  var algomas = 3;

  // function scope
  function hijo() {
    var interno;
    console.log("hijo => ", { algo, otracosa, algomas, interno });
    interno = 4;
  }

  function hija() {
    console.log("hija => ", { algo, otracosa, algomas });
  }

  // block scope
  if (true) {
    let dentro = 5;
  }

  console.log("padre => ", { algo, otracosa, algomas, dentro });

  hijo();
  hija();
}

padre();
