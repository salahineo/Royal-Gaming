// Get Form Elements
let formName = document.getElementById("name");
let formEmail = document.getElementById("email");
let formSubject = document.getElementById("subject");
let formMessage = document.querySelector("textarea");
let formSubmit = document.querySelector("button[type=submit]");
let alertContainer = document.querySelector(".form-alert");
let alertContainerJQ = $(".form-alert");
let formAlert;
// Form Submit Button Listener
formSubmit.addEventListener("click", formValidattion);
// Form Validation
function formValidattion(e) {
  // Check Empty Fields
  if (
    formName.value === "" ||
    formEmail.value === "" ||
    formSubject.value === "" ||
    formMessage.value === ""
  ) {
    e.preventDefault();
    setAlert("danger", "Error", "All Fields Are Required");
  }
  // Check Name < 3 Chars
  else if (formName.value.length < 3) {
    e.preventDefault();
    setAlert("danger", "Error", "Name should be more than 3 characters");
  }
  // Check Email Contain '@' Symbol
  else if (formEmail.value.split("@").length <= 1) {
    e.preventDefault();
    setAlert("danger", "Error", "Enter a correct email");
  }
  // No Errors
  else {
    e.preventDefault();
    setAlert("success", "Success", "Your message has been sent");
    emptyFields();
  }
  // Show Alert
  alertContainer.innerHTML = formAlert;
  alertContainerJQ.fadeIn();
}
// Empty Fields
function emptyFields() {
  formName.value = "";
  formEmail.value = "";
  formSubject.value = "";
  formMessage.value = "";
}
// Set Alert Message
function setAlert($color, $state, $message) {
  formAlert = `<div class="alert alert-${$color} alert-dismissible fade show">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">
      &times;
    </a>
    <strong>${$state}!</strong> ${$message}
  </div>`;
}
