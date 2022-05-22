alert("This is a calculator");

let operation = +prompt("Choose what mathematical operation to use\n[1] *\n[2] /\n[3] +\n[4] -")
let num1 = +prompt("Number 1");
let num2 = +prompt("Number 2");

let answer = "";
switch (operation) {
    case 1: 
        answer = num1 * num2;
        window.alert("The product is " + answer);
        break;
    
    case 2:
        if (num2 == 0) {
            window.alert("The quotient is Undefined");
            break;
        } 

        answer = num1 / num2;
        window.alert("The quotient is " + answer);
        break;
        
    case 3:
        answer = num1 + num2;
        window.alert("The sum is " + answer);
        break;

    case 4:
        answer = num1 - num2;
        window.alert("The difference is " + answer);
        break;

    default:
        window.alert("No Answer");
}


