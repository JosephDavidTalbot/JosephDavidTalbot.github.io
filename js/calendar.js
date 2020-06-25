
function validNum(str) {
    // tests for any valid integer or float
    // number must start with a number or - sign
    // no other characters are allowed
    var re = /^(-?\d+\.\d+)$|^(-?\d+)$/;
    return re.test(str);
}

function sendDate(dd, mm) {
    /*
     * this function is the one that send the data from the form
     * to the server for processing
     */
    $.ajax({
        /* this tells ajax where to send the data */
        url: 'php/calendar.php',
        /* this tells ajax how to send the data */
        type: 'POST',
        /* this tells ajax what data to send */
        data: {day: dd, month: mm},
        /* this tells ajax what data to send */
        success: function (val) {
            /* this is what will happen if calculate.php completes normally */
            console.log(val); //this is for debug
            /* this puts the final answer back into the web page */
            $("#answer").html("Your sun sign is: " + val);
        },
        error: function () {
            /* this is what will happen if calculate.php crashes */
            $("#answer").html("Server Error");
        }
    });
}

function calculate() {
    $("#answer").html("");

    // get the data from the form (they will be strings, not numbers)
    let num1 = $("#number1").val().trim();
    let num2 = $("#number2").val().trim();

    // if they are valid numbers, we can process them
    if (validNum(num1) && validNum(num2)) {
        console.log(num1 + " " + num2); //for debug
        // call the function that send the data
        sendDate(num1, num2);
    } else {
        // if they aren't valid numbers, show an error message
        $("#answer").html("Your inputs must be a valid numbers.");
    }
}

/*
 * code inside the docready lister is automatically
 * executed when the document is completely downloaded
 * and rendered in the browser. put your event handlers
 * inside a docready lister for safety.
 */
$(document).ready(function () {
    // this is an even handler that says what to do when
    // the calculate button is pressed
    $("#calculate").click(function () {
        calculate();
    });
});
