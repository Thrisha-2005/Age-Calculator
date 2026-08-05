const button = document.getElementById("calculateBtn");

button.addEventListener("click", function () {

    let dob = document.getElementById("dob").value;

    if (dob == "") {
        document.getElementById("result").innerText =
            "Please enter your date of birth";
        return;
    }


    // Get DOB manually from YYYY-MM-DD
    let birthYear = Number(dob.substring(0, 4));
    let birthMonth = Number(dob.substring(5, 7));
    let birthDay = Number(dob.substring(8, 10));


    // Get current date automatically
    let today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();


    // Basic subtraction
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;


    // Borrow month if days are negative
    if (days < 0) {

        months--;

        let previousMonth = currentMonth - 1;
        let previousYear = currentYear;

        if (previousMonth == 0) {
            previousMonth = 12;
            previousYear--;
        }

        let daysInPreviousMonth;


        // February
        if (previousMonth == 2) {

            // Leap year
            if (
                previousYear % 400 == 0 ||
                (previousYear % 4 == 0 && previousYear % 100 != 0)
            ) {
                daysInPreviousMonth = 29;
            }
            else {
                daysInPreviousMonth = 28;
            }
        }

        // Months having 30 days
        else if (
            previousMonth == 4 ||
            previousMonth == 6 ||
            previousMonth == 9 ||
            previousMonth == 11
        ) {
            daysInPreviousMonth = 30;
        }

        // Months having 31 days
        else {
            daysInPreviousMonth = 31;
        }


        days = days + daysInPreviousMonth;
    }


    // Borrow year if months are negative
    if (months < 0) {

        years--;

        months = months + 12;
    }


    document.getElementById("result").innerText =
        years + " Years, " +
        months + " Months, " +
        days + " Days";

});