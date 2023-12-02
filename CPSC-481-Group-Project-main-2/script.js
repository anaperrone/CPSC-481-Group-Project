document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons and content sections
  var homeButton = document.getElementById("home-button");
  var aboutButton = document.getElementById("about-button");
  var homeContent = document.getElementById("home-content");
  var aboutContent = document.getElementById("about-content");

  // Initial state - show home content, hide about content
  homeContent.style.display = "flex";
  aboutContent.style.display = "none";

  // Add 'active' class to home button and remove from about button
  homeButton.classList.add("active");
  aboutButton.classList.remove("active");

  // Add click event listeners to the buttons
  homeButton.addEventListener("click", function () {
    homeContent.style.display = "flex";
    aboutContent.style.display = "none";

    // Add 'active' class to home button and remove from about button
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");

    showArrows();
  });

  aboutButton.addEventListener("click", function () {
    homeContent.style.display = "none";
    aboutContent.style.display = "flex";

    // Add 'active' class to about button and remove from home button
    aboutButton.classList.add("active");
    homeButton.classList.remove("active");

    hideArrows();
  });
});
const loginButton = document.getElementById("login-button");

// Add a click event listener to the button
loginButton.addEventListener("click", function () {
  // Redirect to the desired page when the button is clicked
  window.location.href = "sign-in-form-main/index.html";
});
function hideArrows() {
  document.getElementById("moveLeftAppetizer").style.display = "none";
  document.getElementById("moveRightAppetizer").style.display = "none";
  document.getElementById("moveLeftMain").style.display = "none";
  document.getElementById("moveRightMain").style.display = "none";
  document.getElementById("moveLeftDessert").style.display = "none";
  document.getElementById("moveRightDessert").style.display = "none";
}

function showArrows() {
  document.getElementById("moveLeftAppetizer").style.display = "block";
  document.getElementById("moveRightAppetizer").style.display = "block";
  document.getElementById("moveLeftMain").style.display = "block";
  document.getElementById("moveRightMain").style.display = "block";
  document.getElementById("moveLeftDessert").style.display = "block";
  document.getElementById("moveRightDessert").style.display = "block";
}
// Find the logout button element by its ID
const logoutButton = document.getElementById("logout-button");

// Add a click event listener to the logout button
logoutButton.addEventListener("click", function () {
  // Redirect to the index.html page when the logout button is clicked
  window.location.href = "index.html";
});
