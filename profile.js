document.addEventListener("DOMContentLoaded", function () {
  var cardsContainer1 = document.getElementById("profile-my-recipes-content");
  var cardsContainer2 = document.getElementById("profile-private-recipes-content");
  var cardsContainer3 = document.getElementById("profile-friends-content");

  var myRecipesButton = document.getElementById("profile-my-recipes-button");
  var privateRecipesButton = document.getElementById("profile-private-recipes-button");
  var friendsButton = document.getElementById("profile-friends-button");

  myRecipesButton.addEventListener("click", function () {
    cardsContainer1.style.display = "flex";
    cardsContainer2.style.display = "none";
    cardsContainer3.style.display = "none";

    myRecipesButton.classList.add("active");
    privateRecipesButton.classList.remove("active");
    friendsButton.classList.remove("active");
  });

  privateRecipesButton.addEventListener("click", function () {
    cardsContainer1.style.display = "none";
    cardsContainer2.style.display = "flex";
    cardsContainer3.style.display = "none";

    myRecipesButton.classList.remove("active");
    privateRecipesButton.classList.add("active");
    friendsButton.classList.remove("active");
  });

  friendsButton.addEventListener("click", function () {
    cardsContainer1.style.display = "none";
    cardsContainer2.style.display = "none";
    cardsContainer3.style.display = "flex";

    myRecipesButton.classList.remove("active");
    privateRecipesButton.classList.remove("active");
    friendsButton.classList.add("active");
  });

  fetch("./data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data1) {
      makeCards(data1);
    });

  const categories = {
    MyRecipe: cardsContainer1,
    PersonalRecipe: cardsContainer2,
    Friend: cardsContainer3,
  };

  function makeCards(MeasurementArr) {
    MeasurementArr.forEach((data) => {
      const card = createCard(data, handleCardClick);
      categories[data.category].appendChild(card);
      initializeCard(card, data.category);
    });
  }

  function createCard(data, clickCallback) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-category", data.category);

    const cardLink = document.createElement("a");
    cardLink.target = "_blank";

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = data.image;
    image.alt = "Image";
    imageContainer.appendChild(image);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = data.author;

    const rating = document.createElement("div");
    rating.classList.add("rating");
    rating.innerHTML = getStarRating(data.star);

    if (data.category === "MyRecipe" || data.category === "PersonalRecipe") {
        const toggleContainer = document.createElement("label");
        toggleContainer.classList.add("profile-switch");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("profile-toggle-checkbox");
        const sliderSpan = document.createElement("span");
        sliderSpan.classList.add("profile-slider", "round");
  
        toggleContainer.appendChild(input);
        toggleContainer.appendChild(sliderSpan);
        detailsContainer.appendChild(toggleContainer);
  
        input.addEventListener("change", function () {
          toggleCard(card, card.getAttribute("data-category"));
        });

        card.style.cursor = "pointer"; // Add pointer cursor to indicate clickability
        card.addEventListener("click", function () {
            // Invoke the provided click callback with the card data
            clickCallback(data);
        });
    }

    detailsContainer.appendChild(author);
    detailsContainer.appendChild(rating);

    cardLink.appendChild(imageContainer);
    cardLink.appendChild(detailsContainer);

    card.appendChild(cardLink);

    return card;
  }

  function handleCardClick(data) {
    // Update main-panel content or navigate to another section based on card data
    const mainPanel = document.getElementById('main-panel');
    const previousContent = mainPanel.innerHTML;

    // Update main-panel content with the Recipe Detail Page
    mainPanel.innerHTML = `
        <link rel="stylesheet" type="text/css" href="create_recipe_filled_in.css">
        <button id="back-button">
          <img id="back-button-icon" src ="assets/left arrow icon.png" alt="Go back"/>
        </button>
        <div id="create-recipe-filled-content" class="content">
        <h1 id="create-recipe-filled-h1">Edit Recipe</h1>
        <h2 id="recipe-title">Recipe Title:</h2>
        <input type="text" id="recipe-title-filled-input" name="recipe-title" value="Apple Pie"><br>
        <div class="visibility-toggle-filled">
            <label class="toggle-filled">
                <input type="checkbox" id="toggleBtn-filled">
                <span class="slider-filled"></span>
            </label>
            <span id="toggleText-filled">Private recipe</span>
        </div>
        <h2 id="recipe-cover-filled">Enter a Recipe Cover Picture:</h2>
        <div class="recipe-cover-drop-zone-filled">
            <img id="uploaded-image-static" src="assets/ApplePie.jpg">  
        </div>
        <h2 id="recipe-description">Recipe Description:</h2>
        <textarea type="text" id="recipe-description-input" name="recipe-description" placeholder="Enter description here...">Dear Sweethearts,
        Oh, my darlings, gather 'round, for I have a treasure to share with you - a recipe that has been whispered through the generations, a secret delight that warms the heart and fills the soul. It's none other than Grandma's Love-Filled Apple Pie!
        As the crisp autumn breeze dances through the orchard, my heart swells with love for each one of you. The scent of cinnamon and apples wafting through the kitchen transports me back to the days when I, too, sat at my own grandmother's table, savoring the magic of her apple pie.
        Now, let me share this precious recipe with you, my dears. First, start with the apples - a mix of tart and sweet varieties, hand-picked from the trees with care. Peel them with laughter in your hearts, knowing that the joy you infuse into each slice will make the pie taste all the more delightful.
        As you dice the apples, remember the times we spent together, telling stories and sharing secrets. Let those memories flavor the filling, creating a symphony of warmth and nostalgia. Sprinkle in cinnamon, nutmeg, and a pinch of love, for these are the spices that transform a simple pie into a masterpiece.</textarea>
        <h2 id="recipe-category-question">How would you categorize your recipe?</h2>
        <select id="recipe-category-select" name="recipe-category">
            <option value="Appetizers">Appetizer</option>
            <option value="MainDishes">Main Dish</option>
            <option value="Desserts" selected>Dessert</option>
        </select>
        <h2 id="recipe-ingredients">Recipe Ingredients:</h2>
        <input type="text" id="recipe-ingredients-input" placeholder="Enter an ingredient then hit return, do this for all recipe ingredients...">
        <div id="ingredients-list">
            <div class="ingredient-tag">Flour<button class="remove-button"></button></div>
            <div class="ingredient-tag">Eggs<button class="remove-button"></button></div>
            <div class="ingredient-tag">Salt<button class="remove-button"></button></div>
            <div class="ingredient-tag">Butter<button class="remove-button"></button></div>
            <div class="ingredient-tag">Shortening<button class="remove-button"></button></div>
            <div class="ingredient-tag">Apples<button class="remove-button"></button></div>
            <div class="ingredient-tag">Sugar<button class="remove-button"></button></div>
            <div class="ingredient-tag">Cinnamon<button class="remove-button"></button></div>
            <div class="ingredient-tag">Water<button class="remove-button"></button></div>
        </div>
        <h2 id="recipe-measurements">Enter Recipe Measurements:</h2>
        <ul id="measurements-list">
            <li>
                <span>Flour:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="2 cups">
            </li>
            <li>
                <span>Eggs:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="3 eggs">
            </li>
            <li>
                <span>Salt:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1 teaspoon">
            </li>
            <li>
                <span>Butter:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="3/4 cups">
            </li>
            <li>
                <span>Shortening:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="2 tablespoons">
            </li>
            <li>
                <span>Apples:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="6-7 apples">
            </li>
            <li>
                <span>Sugar:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1 cup">
            </li>
            <li>
                <span>Cinnamon:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1 1/2 teaspoons">
            </li>
            <li>
                <span>Water:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1/2 cups">
            </li>
        </ul>
        <h2 id="recipe-instructions">Enter Recipe Instructions:</h2>
        <div id="instructions-list">
            <div class="recipe-step-input-container">
                <span>1.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Step 1: Preheat the oven">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>2.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Step 2: Mix the ingredients">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>3.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Step 2: Mix the ingredients">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>4.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Step 2: Mix the ingredients">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>5.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Step 2: Mix the ingredients">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>6.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Step 2: Mix the ingredients">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
        </div>
        <h2 id="recipe-prep-time">Enter Prep Time:</h2>
        <input type="text" id="prep-time-input" placeholder="Enter prep time here..." value="30 minutes">
        <h2 id="recipe-cook-time">Enter Cook Time:</h2>
        <input type="text" id="cook-time-input" placeholder="Enter cook time here..." value="1 hour">
        <h2 id="recipe-total-time">Enter Total Recipe Time:</h2>
        <input type="text" id="cook-total-input" placeholder="Enter total time here..." value="1 hour and 30 minutes">
        <h2 id="recipe-restriction-question">Does your recipe satisfy any dietary restrictions?</h2>
        <div id="recipe-restriction-checkboxes">
            <label>
                <input type="checkbox" id="restriction-option1" name="recipe-restriction[]" value="lactose" checked>
                Lactose Free
            </label>

            <label>
                <input type="checkbox" id="restriction-option2" name="recipe-restriction[]" value="gluten">
                Gluten Free
            </label>

            <label>
                <input type="checkbox" id="restriction-option3" name="recipe-restriction[]" value="vegan">
                Vegan
            </label>

            <label>
                <input type="checkbox" id="restriction-option4" name="recipe-restriction[]" value="kosher">
                Kosher
            </label>
        </div>
        <h2 id="recipe-restriction-message">Don't worry we will double check this for you!</h2>
        <button id="draft-button" onclick="addToProfilePage()">Save Draft</button>
        <button id="publish-button" onclick="addToMainPage()">PUBLISH</button>
        <div class="spacer"></div>
    </div>
    `;

    // Add an event listener to the back button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', function () {
            // Restore the previous main-panel content
            mainPanel.innerHTML = previousContent;
            // Refresh the entire HTML page
            location.reload();
        });
    }
  }

  function getStarRating(starValue) {
    const filledStars = "★".repeat(starValue);
    const emptyStars = "☆".repeat(5 - starValue);
    return filledStars + emptyStars;
  }

  function initializeCard(card, initialCategory) {
    const checkbox = card.querySelector(".profile-toggle-checkbox");
    if (checkbox) {
      checkbox.checked = initialCategory === "MyRecipe";
      card.classList.toggle("active", checkbox.checked);
      updateToggleColor(checkbox);
    }
  }

  function toggleCard(card, currentCategory) {
    const newCategory =
      currentCategory === "MyRecipe" ? "PersonalRecipe" : "MyRecipe";
    card.setAttribute("data-category", newCategory);
    card.classList.toggle("active");

    const targetContainer = categories[newCategory];
    card.remove();
    targetContainer.appendChild(card);

    const checkbox = card.querySelector(".profile-toggle-checkbox");
    if (checkbox) {
      updateToggleColor(checkbox);
    }
  }

  function updateToggleColor(checkbox) {
    const slider = checkbox.nextElementSibling;
    if (checkbox.checked) {
      slider.style.backgroundColor = "#9747FF";
    } else {
      slider.style.backgroundColor = "#ccc";
    }
  }
});
