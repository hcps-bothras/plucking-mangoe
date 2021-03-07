class stone{
    constructor(x,y,r){
        var options = {
            restitution: 0, 
            friction: 0,
            density: 0.2
        }
    this.body = Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.image = loadImage("stone.png")
    World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, 0, 0, this.r,this.r); 
        pop();
    }
}