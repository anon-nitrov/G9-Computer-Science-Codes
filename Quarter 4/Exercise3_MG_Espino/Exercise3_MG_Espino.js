function multiplicationTable() {

    let countRows       =   document.getElementById("countRows").value;
    let countColumns    =   document.getElementById("countColumns").value;

    let count   =   {
        Rows:      Number(document.getElementById("countRows").value),
        Columns:   Number(document.getElementById("countColumns").value)
    }
    let table   =   "<table>";

    alert("Rows = " + count.Rows);
    alert("Columns = " + count.Columns);

    let counts = [
        countRows,
        countColumns
    ]

    for (num of counts) {
        alert(num);
    }


    if (count <= 2 || count >= 10) {
        window.alert("Please enter values between 2 and 10 ONLY.");
        return;
    }

    if (count == "" || count == 0) {
        window.alert("One or Two of the cells are empty!");
        return;
    }

    // if (isNaN(count) == true) {
    //     window.alert("Input must only be in numbers!")
    //     return;
    // }

    for (len; len   <   count; len++) {
        table += "<tr>";
        for (count.Rows  =   1, count.Rows    <   count.Columns; count.Rows++;) {
            table   +=  "<td>" + count.Rows * len + "</td>";
        } table += "</tr>";
    }

    table   +=  "</table>";
    document.getElementById("multiplicationTable").innerHTML = table;
}