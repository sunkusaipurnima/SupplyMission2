class Package{
    constructor(x,y,w,h){
        var options = {
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("package.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        // push();
         translate(pos.x,pos.y)
        // imageMode(CENTER);
        // image(this.image,0,0,this.width,this.height);
        rectMode(CENTER);        
        rect(0,0,this.width,this.height)

    }

}