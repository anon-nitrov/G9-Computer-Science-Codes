function multiplicationTable() {
    var table;
    table   =   '<table id="mtable">';
    var num1    =   document.getElementById("number1").value;
    var num2    =   document.getElementById("number2").value;

    if (num1    <   2 || num1   >   10 || num1   ===   " " || isNaN (num1)) {
        window.alert("Please enter values between 2 and 10 ONLY.");
    } else if (num2 <   2 || num2   >   10 || num2  === " " || isNaN (num2)) {
        window.alert("Please enter values between 2 and 10 ONLY.");
    } else {
        for(i   =   1; i <=  num1; i++){
            table   +=  '<tr>';
            for (num1 = 1; num1   <=  num2; num1++) {
                table   +=  '<td>'  +   num1    *   i   +   '</td>';
            } table +=  '</tr>';
        }
        table   +=  '</table>';
        document.getElementById("result").innerHTML = table;
    }
}