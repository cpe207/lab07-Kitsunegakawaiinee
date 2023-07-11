const firstnameinput = document.querySelector("#first-name-input");
const lastname_input = document.querySelector("#last-name-input");
const email_input = document.querySelector("#email-input");
const password_check = document.querySelector("#password-input");

const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const check_pass = 
[
  false, //name
  false, //last_name
  false, //email
  false  //password
];

function change_stat(input,bool_input)
{
  if(bool_input) 
  {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
  else
  {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}

firstnameinput.onkeyup = () =>
{
  check_pass[0] = (firstnameinput.value === "")? false: true;
  change_stat(firstnameinput, check_pass[0]);
};
lastname_input.onkeyup = () =>
{
  check_pass[1] = (lastname_input.value === "")? false: true;
  change_stat(lastname_input, check_pass[1]);
};
email_input.onkeyup = () =>
{
  check_pass[2] = (validateEmail(email_input.value))? true: false;
  change_stat(email_input, check_pass[2]);
};
password_check.onkeyup = () =>
{
  check_pass[3] = (password_check.value.length < 6)? false: true;
  change_stat(password_check, check_pass[3]);
};

submitBtn.onclick = () =>
{
  if (check_pass[0] && check_pass[1] && check_pass[3] && check_pass[2]) alert("Registered successfully");
};

