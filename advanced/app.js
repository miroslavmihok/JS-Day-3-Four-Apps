const circle = document.querySelector('.circle');
const msg = document.getElementById('message');

circle.addEventListener('mouseover', function() {
    msg.textContent = "you are over the circle";
})

circle.addEventListener('mouseout', function() {
    msg.textContent = "you are outside the circle";
})

circle.addEventListener('click', function() {
    circle.style.backgroundColor = "gray";
})

circle.addEventListener('dblclick', function() {
    circle.style.backgroundColor = "lightcyan";
})