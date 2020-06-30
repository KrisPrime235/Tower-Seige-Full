class PolyBall{
    constructor(x, y,_radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': false,
        }
        this.body = Matter.Bodies.circle(x, y, _radius, options, 6);
        this.x = x;
        this.y = y;
        this.maxSides = 6;
        this.radius = this.radius;
        
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(CENTER);
        fill(255,0,238);
        ellipse( this.body.position.x, this.body.position.y, this.radius);
        pop();
      }
}