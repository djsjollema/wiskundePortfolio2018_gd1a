const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let gameObjects = [];

for(let i = 0; i<10;i++){
  let gameObject = {};
  gameObject.pos = new Vector2d(getRandomNumber(canvas.width,canvas.heigth),getRandomNumber(canvas.width,canvas.heigth));
  gameObject.vel = new Vector2d(getRandomNumber(3),0);
  gameObject.acc = new Vector2d(0,1);
  gameObject.ball = new Point(0,0,50,"red");
  gameObjects.push(gameObject);
}


// let pos = new Vector2d(100,100)
// let vel = new Vector2d(3,0);
// let acc = new Vector2d(0,1);
//
// let ball = new Point(100,100,50,"red");

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  for(let i = 0; i<gameObjects.length; i++ ){
    gameObjects[i].ball.position = gameObjects[i].pos;
    gameObjects[i].vel.add(gameObjects[i].acc);
    gameObjects[i].pos.add(gameObjects[i].vel);
    gameObjects[i].ball.draw(context);
    if(gameObjects[i].pos.dx < 0){
      gameObjects[i].vel.dx = - gameObjects[i].vel.dx;
    }
    if(gameObjects[i].pos.dx > canvas.width){
      gameObjects[i].vel.dx = - gameObjects[i].vel.dx;
    }
    if(gameObjects[i].pos.dy < gameObjects[i].ball.r){
      gameObjects[i].vel.dy = - gameObjects[i].vel.dy;
      gameObjects[i].pos.dy = gameObjects[i].ball.r;
    }
    if(gameObjects[i].pos.dy> canvas.height){
      gameObjects[i].vel.dy = - gameObjects[i].vel.dy;
      gameObjects[i].pos.dy=  canvas.height - gameObjects[i].ball.r;
    }
  }

  // vel.add(acc);
  // pos.add(vel);
  // ball.position = pos;
  // ball.draw(context);
  //
  // if(pos.dx < ball.r){
  //   vel.dx = - vel.dx;
  //   pos.dx = ball.r;
  // }
  //
  // if(pos.dx > canvas.width - ball.r){
  //   vel.dx = - vel.dx;
  //   pos.dx =canvas.width - ball.r
  // }
  //
  // if(pos.dy < ball.r){
  //   vel.dy = - vel.dy;
  //   pos.dy = ball.r;
  // }
  //
  // if(pos.dy > canvas.height - ball.r){
  //   vel.dy = - vel.dy;
  //   pos.dy = canvas.height - ball.r;
  // }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

animate();
