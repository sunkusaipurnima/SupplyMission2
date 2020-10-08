class Box{
   constructor(x,y,w,h){
       this.body= Bodies.rectangle(x,y,width,height,{isStatic:true});
       World.add(world,this.body);
       this.width=w;
       this.height=h;
   }
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("red");
       rect(pos.x,pos.y,this.width,this.height);
   }


}