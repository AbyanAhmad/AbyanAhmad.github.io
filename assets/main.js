var typing = document.getElementById('jumbotron-subtitle')

var i = 0;
var txt = 'A Computer Science Student';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    typing.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();