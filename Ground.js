class Can {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.4,
          friction:5.0,
          density:5.0,
      }
     // this.image = loadImage("sprites/wood2.png");
      this.body = Bodies.rectangle(x,y,10,30,options);
      //this.image = loadImage("sprites/wood2.png");
      
      this.Visiblity = 255
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed )
      var pos =this.body.position;
      var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
      rectMode(CENTER);
     
      
      
        fill("yellow"); 
      
      
      rect(0, 0, 10, 30);
      pop();
     /* if(this.body.speed<10){
        
      }
      else{
        
        //World.remove(world,this.body)
        push();
        this.Visiblity = this.Visiblity - 5
        tint(255,this.Visiblity)
        image(this.image,this.body.position.x,this.body.position.y,10,30)
        pop();
      }*/
    }
  };
