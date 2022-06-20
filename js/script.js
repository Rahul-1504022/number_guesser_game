//function


let min = 20;
let max = 40;
let num = getRandom(min, max);
console.log(num);
let chance = 1;

//Random Number Generator
function getRandom(min, max) {

    return parseInt(Math.random() * (max - min) + min);
}

//random number generator
function startGame() {
    let guess = parseInt(document.getElementById('input_number').value);
    //check 3 chance for guess
    if (chance <= 3) {

        if (guess === num) {
            document.getElementById('input_number').value = "";
            document.querySelector('#result').innerHTML = `<b>!!!!WHOOWHOOO!!!!<br>You guess (${guess}) the correct answer at ${chance}-th time</b>`;
            document.querySelector('#result').style.color = "green";
            document.querySelector('#input_number').setAttribute('disabled', '');
            document.querySelector('#restart').style.visibility = "visible";
        }
        else if (guess > num) {
            if (chance == 3) {
                document.querySelector('#input_number').setAttribute('disabled', '');
                document.querySelector('#restart').style.visibility = "visible";
                document.querySelector('#correct_ans').innerHTML = `<b> Correct Answer : ${num} </b>`;
                document.querySelector('#correct_ans').style.color = "green";
            }
            document.querySelector('#result').innerHTML = `<b>Your guess (${guess}) is high!!!<br>${3 - chance} chance left</b>`;
            document.querySelector('#result').style.color = "red";
            document.getElementById('input_number').value = "";

            chance++;
        }
        else {
            if (chance == 3) {
                document.querySelector('#input_number').setAttribute('disabled', '');
                document.querySelector('#restart').style.visibility = "visible";
                document.querySelector('#correct_ans').innerHTML = `<b> Correct Answer : ${num} </b>`;
                document.querySelector('#correct_ans').style.color = "green";
            }
            document.querySelector('#result').innerHTML = `<b>Your guess is (${guess}) low!!!<br>${3 - chance} chance left</b>`;
            document.querySelector('#result').style.color = "red";
            document.getElementById('input_number').value = "";
            chance++;
        }
    }
}

// form visibility set
let form = () => {
    document.querySelector('.guess_num_form').style.visibility = "visible";
}
//reload function
function fresh() {
    location.reload();
}

//add eventlistener
document.querySelector('#submit_number').addEventListener('click', startGame);
document.querySelector('#start').addEventListener('click', form);
document.querySelector('#restart').addEventListener('click', fresh);
