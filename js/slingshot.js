class Sling{
    constructor(a,b){
        var options = {
            bodyA:a,
            pointB:b,
            stiffness: 0.004,
            length:1
        }
        this.pointB=b;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    
    attach(body){
        this.chain.bodyA=body;
    }
    
    fly(){
        this.chain.bodyA=null;
    }
    display(){
        if(this.chain.bodyA){
        var pointa = this.chain.bodyA.position;
        var pointb = this.pointB;
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x,pointb.y);
        }
    }
}