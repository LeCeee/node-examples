module.exports = (a,b,callback) => {
    if(a <= 0 || b <= 0){
        setTimeout(() =>
            callback(new Error("invalid input"),null)  
        ,2000);
    }
    else{
        setTimeout(() => 
           callback(null,{
            perimeter : () => (2*(a+b)),
            area : () => (a*b)
           }) 
        ,2000);
    }
    
}




