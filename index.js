var rect = require('./rectangle');

function solveRect(l,b){
    console.log("solving for rectangle with legth = "+ l + " and breadth = "+ b);
    if(l<= 0 || b<= 0){
        console.log("invalid dimmentions");
    }
    else{
        console.log(" perimeter = " + rect.perimeter(l,b) );
        console.log("area = " + rect.area(l,b));
    }

}
solveRect(2,4);
solveRect(0,3);
solveRect(-3,5);
solveRect(10,3);

 