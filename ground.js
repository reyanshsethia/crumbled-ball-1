class Ground {
    constructor(){
        var options = {
            isStatic : true


    }
    this.ground = Bodies.rectangle(width/2,height-10,width,10,options)
    this.width = width
    this.height = 10
    World.add(world,this.ground)
    }
    displayGround(){
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    }


}