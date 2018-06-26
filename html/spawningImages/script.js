const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let bird;

let image = new Image();
image.src = "myLittlePony.png";
image.height = 100;

//let shot = new Audio("shot.wav");
let shot = new Audio('shot.wav');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


image.addEventListener('load',()=>{
  bird = {};
  bird.image = image;
  bird.pos = new Vector2d(-100,300);
  bird.vel = new Vector2d(10,0);

  animate();
});

window.addEventListener('mousedown',(evt)=>{
  shot.play();
  let mouseX = evt.clientX;
  let mouseY = evt.clientY;
  if(mouseX > bird.pos.dx && mouseX < bird.pos.dx + 200 && mouseY > bird.pos.dy && mouseY < bird.pos.dy + 200){
    bird.pos.dx = -100;
    console.log('raak');
  }
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  bird.pos.add(bird.vel);
  if(bird.pos.dx > canvas.width){
    bird.pos.dx = -100;
    bird.pos.dy = Math.random()*canvas.height;

  }
  context.drawImage(bird.image,bird.pos.dx,bird.pos.dy,200,200);
}
