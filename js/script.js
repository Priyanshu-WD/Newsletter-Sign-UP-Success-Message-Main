let form = document.querySelector(".form-email");
let emailInput = document.querySelector("#email");
let label = document.querySelector("label[for='email']");
let conatinerEl = document.getElementById("conatiner");
let popUpBx = document.getElementById("popBox");
let dmsBtn = document.getElementById("dims-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailAddress = emailInput.value.trim().toLowerCase();
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailAddress === "") {
    errorFunc(emailInput, "Valid email required", "emailError");
  } else if (!emailAddress.match(emailPattern)) {
    errorFunc(emailInput, "Valid email required", "emailError");
  } else {
    successFunc(emailInput, "emailError");
  }
});

function errorFunc(req, message, errorId) {
  const errorDiv = document.getElementById(errorId);
  errorDiv.innerText = message;
  req.classList.add("error");
  if (req !== emailInput) {
    req.value = "";
  } else {
    req.style.backgroundColor = "hsla(4, 100%, 67%, 0.632)";
    req.style.color = "hsl(4, 100%, 67%)";
  }
}

function successFunc(req, errorId) {
  const errorDiv = document.getElementById(errorId);
  errorDiv.innerText = "";
  req.classList.remove("error");
  conatinerEl.style.display = "none";
  popUpBx.style.display = "block";
}

dmsBtn.addEventListener("click", () => {
  conatinerEl.style.display = "block";
  popUpBx.style.display = "none";
});
