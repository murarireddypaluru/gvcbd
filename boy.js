class UmBo {
    constructor(x, y){
      this.image = loadImage("boy.png");
      this.body = Bodies.rectangle(x, y, 50, 50)
      World.add(world, this.body)
    }
    display(){
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    }
}
  