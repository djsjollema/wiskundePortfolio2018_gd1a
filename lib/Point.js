class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.lineWidth = "4";
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.fillStyle = this.color;
    context.stroke();
    context.fill();
    context.closePath();
  }

  set position(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }

  get position(){
    let ans = new Vector2d(this.x,this.y);
    return ans;
  }

}
