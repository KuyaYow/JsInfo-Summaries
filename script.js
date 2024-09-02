"use strict";

// Function to handle login process
function handleLogin() {
  let userName = prompt("Who are you?", "");
  if (userName === "Kuya Yow") {
    let pass = prompt("Enter PIN", "");
    if (pass === "*****") {
      alert("Welcome Back, " + userName + "!");
      sessionStorage.setItem("loggedIn", "true"); // Set login status in session storage
    } else if (pass === "" || pass === "null") {
      alert("Cancelled");
      window.location.href = "https://google.com";
    } else {
      alert("Invalid PIN");
      window.location.href = "https://google.com";
    }
  } else if (userName === "" || userName === null) {
    alert("Cancelled");
    window.location.href = "https://google.com";
  } else {
    alert("Invalid Username");
    window.location.href = "https://google.com";
  }
}

// Check if user is logged in on page load
window.onload = function () {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    handleLogin(); // Prompt for login if not logged in
  }
};

// Function to handle logout
function logout() {
  sessionStorage.removeItem("loggedIn");
  // Optionally redirect or update UI here
  alert("You have been logged out.");
  window.location.href = "https://google.com"; // Redirect to a different page if needed
}

function myContact() {
  alert(
    "Contact no. (+63) 995 028 9948 \nEmail address: Yuansabellina@gmail.com \nGithub: @KuyaYow"
  );
}
function about() {
  alert(
    "This is a website that features summaries from the book 'Javascript.info'"
  );
}
