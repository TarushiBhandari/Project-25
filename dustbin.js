class Dustbin{

	constructor(x,y){
		this.x= x;
		this.y= y;
		this.dustbinWidth= 200;
		this.dustbinHeight= 215;
		this.wallThickness= 20;
		
		this.image= loadImage("sprites/dustbin.png")
		this.bottomBody= Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftBody= Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightBody= Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);

	}
	display()
	{
			var posBottom= this.bottomBody.position;
			var posLeft= this.leftBody.position;
			var posRight= this.rightBody.position;

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}
  