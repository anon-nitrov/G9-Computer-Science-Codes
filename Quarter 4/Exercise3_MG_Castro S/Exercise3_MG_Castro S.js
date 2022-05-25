function multiplicationTable() {
    var table;
    table='<table id="mtable">';

    var countRows       =   document.getElementById("number1").value;
    var countColumns    =   document.getElementById("number2").value;
    
    if (countRows < 2 || countRows > 10 || countRows ===" " || isNaN(countRows)) {
        window.alert("Please enter values between 2 and 10 ONLY.");
        return;
    }

    if (countColumns < 2 || countColumns > 10 || countColumns ===" " || isNaN(countColumns)) {
        window.alert("Please enter values between 2 and 10 ONLY.");
        return;
    }
    
    for (i   =   1; i    <=  countRows; i++){
        table+='<tr>';

        for (num =   1; num  <=  countColumns; num++){
            table   +=  '<td>' + (num * i) + '</td>';
        } 
        
        table+='</tr>';
    }

    table+='</table>';
    document.getElementById("result").innerHTML = table;
}