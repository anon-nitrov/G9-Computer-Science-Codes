function multiplicationTable() {

    let table   =   "<table>";
    let countRows       =   document.getElementById("countRows").value;
    let countColumns    =   document.getElementById("countColumns").value;

    let counts = [
        countRows,
        countColumns
    ]

    let count   =   {
        Rows:      document.getElementById("countRows").value,
        Columns:   document.getElementById("countColumns").value
    }


    for (num of counts) {
        if (num <= 2 || num >= 10) {
            window.alert("Please enter values between 2 and 10 ONLY.");
            return;
        }
        // If any of the given input is not between 2 and 10, throw an error

        if (num == "" || num == 0) {
            window.alert("One or Two of the cells are empty!");
            return;
        }
        // If any of the given input is empty, throw an error

        if (isNaN(num)) {
            window.alert("Input must only be in numbers!")
            return;
        }
        // If any of the given input is not a number, throw an error

        for (len = 1; len   <=   count.Rows; len++) {
            table += "<tr>";
            // Makes "count.Rows" number of rows for the table
            for (count.Rows  =   1, count.Rows    <=   count.Columns; count.Rows++;) {
                table   +=  "<td>" + count.Rows * len + "</td>";
            } table += "</tr>";
        }
    }

    table   +=  "</table>";
    document.getElementById("multiplicationTable").innerHTML = table;
}