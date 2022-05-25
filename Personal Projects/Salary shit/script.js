



function calculatePayroll() {
    alert("");
    let salary  =   +prompt("Basic Salary + Allowances: ");
    let tax     =   "";

    if (salary <= 150000) {
        tax =   0;
    }

    else if (151000 <= salary <= 300000) {
        tax =   0.15;
    }

    else if (300001 <= salary <= 500000) {
        tax =   0.2;
    }

    else if (500001 <= salary <= 750000) {
        tax =   0.25;
    }

    else if (750001 <= salary <= 1000000) {
        tax =   0.3;
    }

    NetSalary   =   salary * (1 - tax);
    
}