class Ball {
    constructor(x,y,radius) {
      var options = {
          
        'restitution':0.8,
        'friction':0.3,
        'density':0.11
        
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
    
     
      World.add(world, this.body);
      
    }
    display(){
  
     fill("blue");
     ellipse(50,443,30); 
  
 
      

      
      
    }
  }