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
    });

    aboutButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        aboutContent.style.display = "flex";

        // Add 'active' class to about button and remove from home button
        aboutButton.classList.add("active");
        homeButton.classList.remove("active");
    });
});
