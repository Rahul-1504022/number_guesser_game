//function
//random number generator
function getRandom(min, max) {

    return parseInt(Math.random() * (max - min) + min);
}

function startGame() {
    let min = 20;
    let max = 40;
    let num = getRandom(min, max);
    console.log(num);
    let guess = parseInt(document.getElementById('input_number').value);
    if (guess === num) {
        document.querySelector('#result').textContent = "You guess the correct answer!!!";
    }
    else if (guess > num) {
        document.querySelector('#result').textContent = "Your guess is high!!!";
    }
    else {
        document.querySelector('#result').textContent = "Your guess is low!!!";
    }
    //let input = document.querySelector('.guess_num_form').style.visibility = "visible";
    //let hint = document.querySelector('#hint').innerHTML = `Guess a number between ${min} to ${max} `;

    //document.querySelector('#submit_number').addEventListener('click',inputNumber(num))

}

// function inputNumber(num){
//     let guess = parseInt(document.getElementById('input_number').value);
//     console.log(guess);
//     console.log(num);

// }









//add eventlistener
document.querySelector('#submit_number').addEventListener('click', startGame);
//document.querySelector('#start').addEventListener('click',startGame);
// document.querySelector('#submit_number').addEventListener('click',inputNumber);