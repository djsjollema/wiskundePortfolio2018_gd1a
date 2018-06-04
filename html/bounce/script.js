const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pos = new Vector2d(100,100)
let vel = new Vector2d(3,0);
let acc = new Vector2d(0,1);

let ball = new Point(100,100,50,"red");

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  vel.add(acc);
  pos.add(vel);
  ball.position = pos;
  ball.draw(context);

  if(pos.dx < ball.r){
    vel.dx = - vel.dx;
    pos.dx = ball.r;
  }

  if(pos.dx > canvas.width - ball.r){
    vel.dx = - vel.dx;
    pos.dx =canvas.width - ball.r
  }

  if(pos.dy < ball.r){
    vel.dy = - vel.dy;
    pos.dy = ball.r;
  }

  if(pos.dy > canvas.height - ball.r){
    vel.dy = - vel.dy;
    pos.dy = canvas.height - ball.r;
  }
}

animate();
