const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = {};

function setUp(){
  ball.point = new Point(100,100,50,"yellow");
  ball.pos = new Vector2d(100,100);
  ball.vel = new Vector2d(1,1);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  ball.pos.add(ball.vel);
  ball.point.position = ball.pos;
  ball.point.draw(context);
}

setUp();
