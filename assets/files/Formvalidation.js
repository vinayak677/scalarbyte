document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate inputs
    var inputName = document.getElementById("InputName").value.trim();
    var inputEmail = document.getElementById("InputEmail1").value.trim();
    var inputMessage = document.getElementById("InputText").value.trim();

    // Clear previous error messages
    document.getElementById("fullnameError").textContent = "";
    document.getElementById("fullEmailError").textContent = "";
    document.getElementById("fullTextError").textContent = "";

    if (inputName === "") {
      const tag = document.getElementById("fullnameError");
      tag.textContent = "please enter name";
      return;
    }

    if (inputEmail === "") {
      const emails = document.getElementById("fullEmailError");
      emails.textContent = "please enter email";
      return;
    }

    if (inputMessage === "") {
      const enterText = document.getElementById("fullTextError");
      enterText.textContent = "Please enter a message.";
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      const emails = document.getElementById("fullEmailError");
      emails.textContent = "Please enter a valid email address.";
      return;
    }

    // alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  });
