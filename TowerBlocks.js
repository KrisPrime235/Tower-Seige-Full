class Block extends BaseClass{
    constructor(x, y){
        super(x, y, 30, 40, );
        this.Visibility = 255;

        
    }

    
    display(){
        

        text("SCORE : " + score,750, 40);

        if(this.body.speed < 8){
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            pop();  
        }
        
        if(score === 500){
            
            text("You Win!!! Press Command + R To Play Again", 660, 90)
        }
        
        
    }
     

   Score(){
	if (this.Visibility < 0 && this.Visibility > -105){
		score ++;
	}
}

}
var score = 0;