// let root = document.getElementsByClassName('root');

var a = 10;
var b = 30;


let operation = {};
function showData(){
    for(let ans in operation){
        let hi = document.createElement('h1');
        hi.textContent = operation[ans];
        document.body.appendChild(hi);
    }    
}
function operate(){
    operation["add"] = "A + B =  " + (a + b);
    operation["sub"] = "A - B =  " + (a - b);
    operation["mul"] = "A * B =  " + (a * b);
    operation["div"] = "A / B =  " + (a / b);
}
operate();
showData();
