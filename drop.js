class Drops{
    constructor(){
        var drop_options = {
            friction: 0.1,
            restitution: 0.1
        }
        this.body = Bodies.circle(random(0, 1200), random(0, 400), 5, drop_options)
        this.r = 5
        World.add(world, this.body)
    }
    
    display(){
        ellipseMode(RADIUS)
        ellipse(x, y, this.r, this.r)
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,1200), y: random(0, 400)})
        }
    }
}