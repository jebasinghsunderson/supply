class package{
    constructor(x,y,width,height){
      var options={
          'restitution':0,
          'isStatic':false
      }
      this.body=Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height;

      World.add(world,this.body)
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      Push();
      translate(pox.x,pos.y);
      rotate(angle);
      rectMode(CENRTER);
      pop();
    }
}