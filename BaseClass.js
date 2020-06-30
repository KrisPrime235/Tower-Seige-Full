class BaseClass{
    constructor(x, y){
        var options = {
            'restitution': 0.1,
            'isStatic': false,
            'friction': 1.5
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.Visibility = 255

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill(0, 216, 255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        
        
    }
     
}
