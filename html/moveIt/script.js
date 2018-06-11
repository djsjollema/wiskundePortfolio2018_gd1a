const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
    console.log('key left')
    break;
    case 38:
    console.log('key up')
    break;
    case 39:
    console.log('key rechts')
    break;
    case 40:
    console.log('key down')
    break;
  }
})

let ball = {};

function setUp(){
  ball.point = new Point(100,100,50,"yellow");
  ball.pos = new Vector2d(100,100);
  ball.vel = new Vector2d(10,10);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
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
