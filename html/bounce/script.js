const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pos = new Vector2d(100,100)
let vel = new Vector2d(2,2);

let ball = new Point(100,100,10,"red");

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  pos.add(vel);
  ball.position = pos;
  ball.draw(context);
  console.log(ball.position);
}

animate();
