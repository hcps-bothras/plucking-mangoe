class constraintStone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 80,
            stiffness: 0.2
        }

        this.constraint = Constraint.create (options);
        this.pointB = pointB
        World.add(world, this.constraint);
    }

    attach(body){
        this.constraint.bodyA = body;
    }

    fly(){
        this.constraint.bodyA = null;
    }

    display(){
        
        if (this.constraint.bodyA){
        strokeWeight (1)
        stroke (230)
         var pointA = this.constraint.bodyA.position
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}