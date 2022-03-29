//Robot Bounded In a Circle

var isRobotBounded = function(instructions) {
    let dir = 0
    let x = 0
    let y = 0
    //split the incoming string into an array of characters
    //for each character run the following switch case on it
    //cases 0-3 equal up, right, down, left respectively
    instructions.split('').forEach(v => {
        switch(dir) {
            //up
            case 0: {
                if(v === 'G') {
                    y++
                } else if(v === 'L') {
                    dir = 3
                } else if(v === 'R') dir = 1
            }
            break
            //right
            case 1: {
                if(v === 'G') {
                    x--
                } else if(v === 'L') {
                    dir = 0
                } else if(v === 'R') dir = 2
            }
            break
            //down
            case 2: {
                if(v === 'G') {
                    y--
                } else if(v === 'L') {
                    dir = 1
                } else if(v === 'R') dir = 3
            }
            break
            //left
            case 3: {
                if(v === 'G') {
                    x++
                } else if(v === 'L') {
                    dir = 2
                } else if(v === 'R') dir = 0
            }
            break
        }
    })
    //in this case we have made a full circle back to our starting point of (0,0) therefore we return true
    if((x === 0) && (y === 0)){ 
        return true
    };
    // If it returns to (0, 0) after one round, then it must loop
    // dir === 0 represents up. If the direction is upward after one round, then it will continue to go straight up, not loop
    //If the direction is another direction after one round, this either constitutes a Regular polygon (the far point is a vertex of a regular polygon), or cyclically on a line segment
    if(dir !== 0){
        return true
    };
    //if the above conditions are not true then we have not completed the loop and we return false
    return false 
};