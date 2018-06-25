const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let bird;

let image = new Image();
image.src = "bird.png";
image.height = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


image.addEventListener('load',()=>{
  bird = {};
  bird.image = image;
  bird.pos = new Vector2d(canvas.width,300);
  bird.vel = new Vector2d(-10,0);

  animate();
});

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  bird.pos.add(bird.vel);
  if(bird.pos.dx < -100){
    bird.pos.dx = canvas.width;
    bird.pos.dy = Math.random()*canvas.height;
  }
  context.drawImage(bird.image,bird.pos.dx,bird.pos.dy,100,100);
}
