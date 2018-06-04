const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ballObject = {};
ballObject.ball = new Point(500,400,40,"red");
ballObject.speedX = 2;
ballObject.speedY = 2;

function animation(){
  requestAnimationFrame(animation);
  context.clearRect(0,0,canvas.width,canvas.height);
  ballObject.ball.x += ballObject.speedX;
  ballObject.ball.y -= ballObject.speedY;
  ballObject.ball.draw(context);
  if(ballObject.ball.y < ballObject.ball.r){
    ballObject.speedY = -ballObject.speedY;
  }
  if (ballObject.ball.x > canvas.width-ballObject.ball.r){
    ballObject.speedX = - ballObject.speedX;
  }

  if(ballObject.ball.y > canvas.height-ballObject.ball.r){
    ballObject.speedY = - ballObject.speedY;
  }

  if(ballObject.ball.x < ballObject.ball.r){
    ballObject.speedX = - ballObject.speedX;
  }
}

animation();
