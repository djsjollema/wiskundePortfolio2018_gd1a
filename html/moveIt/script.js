const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
    ball.vel.add(new Vector2d(-1,0));
    break;
    case 38:
    ball.vel.add(new Vector2d(0,-1));
    break;
    case 39:
    ball.vel.add(new Vector2d(1,0));
    break;
    case 40:
    ball.vel.add(new Vector2d(0,1));
    break;
  }
})

let ball = {};

function setUp(){
  ball.point = new Point(100,100,10,"yellow");
  ball.pos = new Vector2d(100,100);
  ball.vel = new Vector2d(0,0);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.05)";
  context.fillRect(0,0,canvas.width,canvas.height);
  //context.clearRect(0,0,canvas.width,canvas.height);
  ball.pos.add(ball.vel);
  ball.point.position = ball.pos;
  ball.point.draw(context);

  if(ball.pos.dx < -ball.point.r){
    ball.pos.dx = canvas.width + ball.point.r;
  }

  if(ball.pos.dy < -ball.point.r){
    ball.pos.dy = canvas.height + ball.point.r;
  }

  if(ball.pos.dx > canvas.width + ball.point.r){
    ball.pos.dx = -ball.point.r;
  }

  if(ball.pos.dy > canvas.height + ball.point.r){
    ball.pos.dy = -ball.point.r;
  }
}

setUp();
