class Block{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.width = 30;
		this.height = 40;
		
		this.body=Bodies.rectangle(this.x, this.y, options);
		World.add(world, this.body);
	}

	display()
	{
		var blockPos=this.body.position;	
		push();
		translate(blockPos.x, blockPos.y);
	    rectMode(CENTER);
		rotate(this.body.angle);
		fill(255,0,255);
		rectMode(CENTER);
		rect(this.rect, 0,0);
		pop();
 }
}