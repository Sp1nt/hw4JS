function sayError(){
    alert('Some error occurred!')
}


function showError(x){
    alert("Error " + x + " occurred!");
}

function createHeaders(N) {
    for (let i = 0; i < N; i++) {
        document.write("<h2>Header " + parseInt(i + 1) + "</h2>");
        document.write("<br/>");
    }
}

function checkPassword(x){
    if(x === "Web" || x === "Step" || x === "JavaScript"){
        return true;
    }
    else{
        return false;
    }
}

let sign = x => x < 0 ? -1 : x > 0 ? 1 : 0;



function listDay(x) {
    switch (x) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Error!";
    }
}

function calculateDaysOfWork () {
    let userInput = parseInt(prompt('Введите начальный объем воды в литрах'));
    let percentage = 0.1;
    let i;

    if (userInput < 10){
        alert('Аварийная ситуация. Воды меньше 10-ти литров!')
        return false;
    }
    else{
        for (i = 0; userInput >= 10; i++) {
            userInput -= percentage * userInput;
        }
    }

    alert(`Вода закончится через ${i} дней`);
}



