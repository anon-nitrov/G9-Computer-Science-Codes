let countRows       =   document.getElementById("countRows").value;
let countColumns    =   document.getElementById("countColumns").value;
let count           =   [countRows, countColumns];
let table   =   "<table>";

function multiplicationTable(countRows, countColumns) {
    if (count <= 2 || count >= 10) {
        window.alert("Please enter values between 2 and 10 ONLY.");
        return;
    }

    if (count === "") {
        window.alert("One or Two of the cells are empty!");
        return;
    }

    if (Number.isNaN(count) == false) {
        window.alert("Input must only be in numbers!")
        return;
    }
}