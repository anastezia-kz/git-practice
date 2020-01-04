

const theRover = {
    direction:"N",
    x:5,
    y:5
  };
  
  const grid = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ','O',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ','O',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','O',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] 
  ]
  
  function turnLeft(rover) {
    switch(rover.direction) {
      case"N":
        rover.direction = "W";
        break;
      case"W":
        rover.direction = "S";
        break;
      case"S":
        rover.direction = "E";
        break;
      case"E":
        rover.direction = "N";
        break;
    }
    console.log("turnLeft was called!");
  }
  
  function turnRight(rover){
    switch(rover.direction) {
      case"N":
        rover.direction = "E";
        break;
      case"E":
        rover.direction = "S";
        break;
      case"S":
        rover.direction = "W";
        break;
      case"W":
        rover.direction = "N";
        break;
    }
    
    console.log("turnRight was called!");
  }
  
  function moveForward(rover) {
    let newY = rover.y
    let newX = rover.x
    if(rover.y>0 && rover.y<10) { 
     switch(rover.direction) {
        case "N":
          newY = rover.y-1 
        break;
        case "S":  
           newY = rover.y-1
          break;
      }  
    }else{
      console.log("You will break you wheel outside the grid!")
    }
    
    if(rover.x>0 && rover.x<10) {
      switch(rover.direction) {
        case "W":
          newX = rover.x-1
          break;
        case "E":
          newX = rover.x-1
          break;
      }   
    }else{   
       console.log("You will break you wheel outside the grid!")
    }
    if (grid[newY][newX] === 'O'){
      console.log("Stop!")
    }else{
      rover.x = newX
      rover.y =newY
    }
  }
  
  function moveBackward(rover){
    let newY = rover.y
    let newX = rover.x
    if(rover.y>0 && rover.y<10) { 
     switch(rover.direction) {
        case "N":
          newY = rover.y-1 
        break;
        case "S":  
           newY = rover.y-1
          break;
      }  
    }else{
      console.log("You will break you wheel outside the grid!")
    }
    
    if(rover.x>0 && rover.x<10) {
      switch(rover.direction) {
        case "W":
          newX = rover.x-1
          break;
        case "E":
          newX = rover.x-1
          break;
      }   
    }else{   
       console.log("You will break you wheel outside the grid!")
    }
    if (grid[newY][newX] === 'O'){
      console.log("Stop!")
    }else{
      rover.x = newX
      rover.y =newY
    }
  } 
  
  function order(rover, commands) {
    
    for(let i=0; i<commands.length; i++){
      let command = commands[i]
        switch(command){
          case "f":
            moveForward(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
        }
    }
  }
  
  order(theRover, "fffff")
  
  console.log(theRover)
  
  
  