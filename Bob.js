class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill("red");
      translate(pos.x, pos.y);
      rectMode(CENTER);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }



  //roofObject=new roof(width/2,height/4,width/7,20);

	//bobDiameter=40;

	//startBobPositionX=width/2;
	//startBobPositionY=height/4+500;
	//bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	//bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	//bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	//bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	//bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);