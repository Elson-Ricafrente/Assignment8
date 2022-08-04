

function addValue() {
    // get the operands value
    var inp1 = document.getElementById('input_a').value;
    var inp2 = document.getElementById('input_b').value;

    // parse to integer. You can use: parseInt(input, 10);
    var num1 = parseFloat(inp1);
    var num2 = parseFloat(inp2);

    var operator = document.querySelector('input[name="add"]').value;

    // perform operation
    if (isNaN(inp1) || isNaN(inp2)) {
        text = "Please enter numbers only.";
    }
    else if (inp1 == "" || inp2 == "") {
        text = "Please provide input"
    }
    else {
        var ans = num1 + num2;

        if (Number.isInteger(ans)) {
            f_ans = ans;
        }
        else {
            f_ans = ans.toFixed(2);
        }
   
        // creating the text output
        text = num1 + " " + operator + " " + num2 + " = " + f_ans;
        // text = num1 + " + " + num2 + " = " + f_ans;
    }

    // (if you want to check) print out in console
    console.log(num1)
    console.log(num2)
    console.log(ans)

    // change the text area
    document.mycalculator.output.value = text;

}


function mulValue() {
    var inp1 = document.getElementById('input_a').value;
    var inp2 = document.getElementById('input_b').value;

    var num1 = parseFloat(inp1);
    var num2 = parseFloat(inp2);

    var operator = document.querySelector('input[name="mul"]').value;

    if (isNaN(inp1) || isNaN(inp2)) {
        text = "Please enter numbers only.";
    }
    else if (inp1 == "" || inp2 == "") {
        text = "Please provide input"
    }
    else {
        var ans = num1 * num2;

        if (Number.isInteger(ans)) {
            f_ans = ans;
        }
        else {
            f_ans = ans.toFixed(2);
        }

        text = num1 + " " + operator + " " + num2 + " = " + f_ans;
        // text = num1 + " + " + num2 + " = " + f_ans;
    }

    console.log(num1)
    console.log(num2)
    console.log(ans)

    document.mycalculator.output.value = text;
}

function divValue() {

    var inp1 = document.getElementById('input_a').value;
    var inp2 = document.getElementById('input_b').value;

    var num1 = parseFloat(inp1);
    var num2 = parseFloat(inp2);

    var operator = document.querySelector('input[name="div"]').value;

    if (isNaN(inp1) || isNaN(inp2)){
        text = "Please enter numbers only.";
    }
    else if (inp1 == "" || inp2 == "") {
        text = "Please provide input"
    }
    else {
        var ans = num1 / num2;

        if (Number.isInteger(ans)) {
            f_ans = ans;
        }
        else {
            f_ans = ans.toFixed(2);
        }

        text = num1 + " " + operator + " " + num2 + " = " + f_ans;
        // text = num1 + " / " + num2 + " = " + f_ans;
    }

    console.log(num1)
    console.log(num2)
    console.log(ans)

    document.mycalculator.output.value = text;
}
