class Crumbled {
	constructor(x,y,radius) {
    var options = {
		isStatic : false,
		restitution :0.3,
		friction : 0.5 ,
		density : 1.2
    }
	this.crumbled = Bodies.circle (x,y,radius,options)
	World.add (world,this.crumbled)
	this.radius = radius
	
}
displayBall(){
	ellipse(this.crumbled.position.x,this.crumbled.position.y,this.radius)
}
}
