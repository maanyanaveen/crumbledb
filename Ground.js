class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        };
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

    }
    display(){
        var GroundPose = this.body.position;
        push();
        rect(0,0,this.w,this.h);
        rectMode(CENTER);
        pop();
    }
}