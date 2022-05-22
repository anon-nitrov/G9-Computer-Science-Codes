function validOutput() {
    let gender = document.getElementById("gender");
    if (gender.value == "Male" || gender.value == "Female" || gender.value == "Prefer not to say") {
        gender.style.border = "solid green";
        // If the user's gender is either "Male", "Female", or "Prefer not to say"
        // Change the border color to green
    }
}

function invalidOutput() { 
    let gender = document.getElementById("gender");
    if (gender.value == "Male" || gender.value == "Female" || gender.value == "Prefer not to say") {
        return;
        // If the user's Gender is either "Male", "Female", or "Prefer not to say"
        // Do nothing, and terminate this function
    } 

    gender.style.border = "solid red";
    // If the given input is invalid
    // Change the border color to red
}

function outputGender() {
    let gender = document.getElementById("gender").value;
    if (gender == "Male" || gender == "Female") {
        alert(document.getElementById("output").innerHTML = "You're a " + gender);
        return;
        // If the user's gender is either "Male" or "Female"
        // Print and Alert the user's gender
    }

    if (gender == "Prefer not to say") {
        alert(document.getElementById("output").innerHTML = "User prefers not to say their gender");
        return;
        // If the user's input is "Prefer not to say"
        // Print and Alert that they don't want to say their gender
    }

    alert("Invalid Input");
    // If there is no input, or the given input is invalid
    // Tell the user that their input is invalid
}