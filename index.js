var rect = require('./rectangle');

function solveRect(l,b){
    console.log("solving for rectangle with legth = "+ l + " and breadth = "+ b);
    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("ERROR : " + err.message);
        }
        else{
            console.log("The area of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("this message is actually after calling of rect");
};


solveRect(2,4);
solveRect(0,3);
solveRect(-3,5);
solveRect(10,3);

 