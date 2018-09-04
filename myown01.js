window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width * .5,
    centerY = height * .5;
	//Hola
    
  cartesian();
  //sinoical(30, 40, 4);
for (var i = 0; i < random(1,333); i++) {
  sinoical(random(1,55),random(1,333),random(1,10),setRandomColor());
}

  function sinoical(a, b, pi, color) {
    context.beginPath();
    for (var angle = 0; angle < Math.PI * pi; angle += random(0.001,0.05)) {
      var x = angle * a,
          y = Math.sin(angle) * b;
      context.fillRect(x, y, 2, 2);
      context.fillStyle = color;
    }
  }
  function random(a, b){
      var nrandom = Math.random() * (b - a) + a;
      return nrandom;
  };

  function cartesian() {
    context.beginPath();
    context.fillRect(0, height * .5 - 3, width, 3);
    context.fillRect(width * .5 - 3, 0, 3, height);
    context.fill();

    context.translate(0, height / 2); /*moves the form to the center */
    context.scale(1, -1); /* This flips the y axis because by default we work at the fourth cuadrant */
  }
  function setRandomColor(){
    var letters = '0123456789ABCDEF',
        color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)]
    }
    return color;
  };
};
