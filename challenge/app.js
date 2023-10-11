const userName1 = document.getElementById('user_name_1');
const userName2 = document.getElementById('user_name_2');
const number1 = document.getElementById('randomNr1');
const number2 = document.getElementById('randomNr2');
const numberBtn = document.querySelectorAll('.btn');

window.addEventListener('load', function() {
    userName1.textContent = prompt("What is first player's name?");
    userName2.textContent = prompt("What is second player's name?");

    number1.innerHTML = Math.ceil(Math.random() * 6);
    number2.innerHTML = Math.ceil(Math.random() * 6);
})

numberBtn.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("number1")) {
            number1.innerHTML = Math.ceil(Math.random() * 6);
        } else {
            number2.innerHTML = Math.ceil(Math.random() * 6);
        }
    })
});