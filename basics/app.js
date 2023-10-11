// FORM INPUTS

const formDiv = document.getElementById("form-inputs");
const formInputs = document.querySelector(".form_userinputs");
const submitBtn = document.querySelector(".submit_btn");
const userInputDiv = document.getElementById("user-input");
const userName = document.getElementById("userinput_name");
const userAge = document.getElementById('userinput_age');
const userProfession = document.getElementById('userinput_profession');
const logoutBtn = document.querySelector(".logout");

let displayDiv = false;

let userData = {
  firstname: "",
  lastname: "",
  age: 0,
  profession: "",
};

userInputDiv.style.display = "none";

const isShown = (boolean) => {
  boolean
    ? (userInputDiv.style.display = "block")
    : (userInputDiv.style.display = "none");

  boolean
    ? (formDiv.style.display = "none")
    : (formDiv.style.display = "block");
};

const handleInput = (e) => {
  if (e.target.tagName === "INPUT") {
    userData[e.target.id] = e.target.value;
  } else if (e.target.tagName === "SELECT") {
    userData.profession = e.target.value;
  }
  console.log(userData);
};

formInputs.addEventListener("input", handleInput);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  displayDiv = !displayDiv;

  isShown(displayDiv);

  userName.innerHTML = `${userData.firstname} ${userData.lastname}`;
  userAge.innerHTML = `${userData.age} year(s)`;
  userProfession.innerHTML = `You chose a profession in ${userData.profession}`;

  if (userData.firstname.length > 5 || userData.lastname.length > 5) {
    userName.style.color = "green";
  }

  userData.profession === "IT" ? userInputDiv.style.backgroundColor = "purple" : userInputDiv.style.backgroundColor = "yellow";
});

logoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  displayDiv = !displayDiv;

  isShown(displayDiv);

  userData.firstname = "";
  userData.lastname = "";
  userData.age = "";
  userData.profession = "";

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("myProfession").value = "none";
});