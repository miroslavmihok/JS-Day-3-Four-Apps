const btns = document.querySelectorAll(".btn");

function removeItem() {
  if (this.classList.contains("santa")) {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => {
      this.remove();
    }, 1000);
  }
}

btns.forEach(function (btn) {
  btn.addEventListener("click", removeItem);
});

const backgroundBtn = document.querySelector(".background_btn");

backgroundBtn.addEventListener("click", function () {

  let number1 = Math.random() * 255;
  let number2 = Math.random() * 255;
  let number3 = Math.random() * 255;

  document.querySelector('.box').style.backgroundColor = `rgb(${number1},${number2},${number3})`;
});
