const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let a = new Point(100,100,10,"green");

function loop(){
  context.clearRect(0,0,canvas.width,canvas.height)
  a.x +=1;
  a.draw(context);
}

setInterval(loop,10)
