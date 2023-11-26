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
    });
});
