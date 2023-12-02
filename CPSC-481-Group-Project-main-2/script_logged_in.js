document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons and content sections
  var homeButton = document.getElementById("home-button");
  var profileButton = document.getElementById("profile-button");
  var favoritesButton = document.getElementById("favorites-button");
  var createRecipeButton = document.getElementById("create-recipe-button");
  var aboutButton = document.getElementById("about-button");
  var homeContent = document.getElementById("home-content");
  var profileContent = document.getElementById("profile-content");
  var favoritesContent = document.getElementById("favorites-content");
  var createRecipeContent = document.getElementById("create-recipe-content");
  var aboutContent = document.getElementById("about-content");

  // Initial state - show home content, hide about content
  homeContent.style.display = "flex";
  profileContent.style.display = "none";
  favoritesContent.style.display = "none";
  createRecipeContent.style.display = "none";
  aboutContent.style.display = "none";

  // Add 'active' class to home button and remove from about button
  homeButton.classList.add("active");
  profileButton.classList.remove("active");
  favoritesButton.classList.remove("active");
  createRecipeButton.classList.remove("active");
  aboutButton.classList.remove("active");

  // Add click event listeners to the buttons
  homeButton.addEventListener("click", function () {
    homeContent.style.display = "flex";
    profileContent.style.display = "none";
    favoritesContent.style.display = "none";
    createRecipeContent.style.display = "none";
    aboutContent.style.display = "none";

    homeButton.classList.add("active");
    profileButton.classList.remove("active");
    favoritesButton.classList.remove("active");
    createRecipeButton.classList.remove("active");
    aboutButton.classList.remove("active");

    showArrows();
  });

  profileButton.addEventListener("click", function () {
    homeContent.style.display = "none";
    profileContent.style.display = "flex";
    favoritesContent.style.display = "none";
    createRecipeContent.style.display = "none";
    aboutContent.style.display = "none";

    homeButton.classList.remove("active");
    profileButton.classList.add("active");
    favoritesButton.classList.remove("active");
    createRecipeButton.classList.remove("active");
    aboutButton.classList.remove("active");

    hideArrows();
  });

  favoritesButton.addEventListener("click", function () {
    homeContent.style.display = "none";
    profileContent.style.display = "none";
    favoritesContent.style.display = "flex";
    createRecipeContent.style.display = "none";
    aboutContent.style.display = "none";

    homeButton.classList.remove("active");
    profileButton.classList.remove("active");
    favoritesButton.classList.add("active");
    createRecipeButton.classList.remove("active");
    aboutButton.classList.remove("active");

    hideArrows();
  });

  createRecipeButton.addEventListener("click", function () {
    homeContent.style.display = "none";
    profileContent.style.display = "none";
    favoritesContent.style.display = "none";
    createRecipeContent.style.display = "flex";
    aboutContent.style.display = "none";

    homeButton.classList.remove("active");
    profileButton.classList.remove("active");
    favoritesButton.classList.remove("active");
    createRecipeButton.classList.add("active");
    aboutButton.classList.remove("active");

    hideArrows();
  });

  aboutButton.addEventListener("click", function () {
    homeContent.style.display = "none";
    profileContent.style.display = "none";
    favoritesContent.style.display = "none";
    createRecipeContent.style.display = "none";
    aboutContent.style.display = "flex";

    homeButton.classList.remove("active");
    profileButton.classList.remove("active");
    favoritesButton.classList.remove("active");
    createRecipeButton.classList.remove("active");
    aboutButton.classList.add("active");

    hideArrows();
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
});
// Find the logout button element by its ID
const logoutButton = document.getElementById("logout-button");

// Add a click event listener to the logout button
logoutButton.addEventListener("click", function () {
  // Redirect to the index.html page when the logout button is clicked
  window.location.href = "index.html";
});
