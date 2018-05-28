const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = new Point(500,400,40,"red");
let speedX = 2;
let speedY = 2;

function animation(){
  requestAnimationFrame(animation);
  context.clearRect(0,0,canvas.width,canvas.height);
  ball.x += speedX;
  ball.y -= speedY;
  ball.draw(context);
  if(ball.y < ball.r){
    speedY = -speedY;
  }
  if (ball.x > canvas.width-ball.r){
    speedX = - speedX;
  }

  if(ball.y > canvas.height-ball.r){
    speedY = - speedY;
  }

  if(ball.x < ball.r){
    speedX = - speedX;
  }
}

animation();
