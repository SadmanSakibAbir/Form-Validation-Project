document.addEventListener("DOMContentLoaded", function () {
  // Input Elements
  const userName = document.querySelector(".username");
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const confPassword = document.querySelector(".password-confirm");
  const submit = document.querySelector(".submit");

  // Message Elements
  const userNameMessage = document.querySelector(".user-msg");
  const emailMessage = document.querySelector(".email-msg");
  const passwordMessage = document.querySelector(".password-msg");
  const confPasswordMessage = document.querySelector(".password-confirm-msg");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      userName.value === "" &&
      email.value === "" &&
      password.value === "" &&
      confPassword.value === ""
    ) {
      alert("Please fill in all fields.");
    }

    if (userName.value === "") {
      showMessage(userNameMessage, "Please enter a username", "red");
    } else {
      showMessage(userNameMessage, "Looks good!", "green");
    }

    if (email.value === "") {
      showMessage(emailMessage, "Please enter an email", "red");
    } else if (!email.value.includes("@")) {
      showMessage(emailMessage, "Please enter a valid email", "red");
    } else {
      showMessage(emailMessage, "Looks good!", "green");
    }

    if (password.value === "") {
      showMessage(passwordMessage, "Please enter a password", "red");
    } else if (password.value.length < 8) {
      showMessage(
        passwordMessage,
        "Password must be at least 8 characters",
        "red"
      );
    } else {
      showMessage(passwordMessage, "Looks good!", "green");
    }

    if (confPassword.value === "") {
      showMessage(confPasswordMessage, "Please confirm your password", "red");
    } else if (confPassword.value !== password.value) {
      showMessage(confPasswordMessage, "Passwords do not match", "red");
    } else {
      showMessage(confPasswordMessage, "Looks good!", "green");
    }
  });

  const showMessage = (element, msg, color) => {
    element.style.visibility = "visible";
    element.textContent = msg;
    element.style.color = color;
    element.previousElementSibling.style.border = `2px solid ${color}`;
  };
});
