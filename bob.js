class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,this.radius/2,options);
      
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };