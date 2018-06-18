const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

balls = [];


function animation(){
  requestAnimationFrame(animation);
  if(getRandomNumber(0,100)<80){
    let ball = getBallObject();
    balls.push(ball)
  }

  context.clearRect(0,0,canvas.width,canvas.height);
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].point.draw(context);
    if(balls[i].pos.dy > canvas.height){
      balls.splice(i,1);
    }
  }
}

animation();

function getBallObject(){
  let ballObject = {};
  ballObject.pos = new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(-10,0));
  ballObject.point = new Point(ballObject.pos.dx,ballObject.pos.dy,"10","red");
  ballObject.vel = new Vector2d(0,getRandomNumber(1,20));
  ballObject.update = function(){
    ballObject.pos.add(ballObject.vel);
    ballObject.point.position = ballObject.pos;
  }
  return ballObject;
}

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min))+min;
}
