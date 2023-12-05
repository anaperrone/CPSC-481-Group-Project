const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('change', () => {
    toggleText.textContent = toggleBtn.checked ? 'Public recipe' : 'Private recipe';
});

document.addEventListener("DOMContentLoaded", function () {
    const ingredientInput = document.getElementById("recipe-ingredients-input");
    const ingredientList = document.getElementById("ingredients-list");
    const ingredientMeasurements = document.getElementById("measurements-list");
    const addStepButton = document.getElementById("add-step-button");
    const instructionsList = document.getElementById("instructions-list");
    let stepNumber = 1; // Initialize step number

    addDefaultIngredient();

    ingredientInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const ingredientName = ingredientInput.value.trim();

            if (ingredientName !== "") {
                addIngredientTag(ingredientName);
                addIngredientMeasurement(ingredientName);
                ingredientInput.value = "";
                ingredientList.scrollTop = ingredientList.scrollHeight;
                ingredientMeasurements.scrollTop = ingredientMeasurements.scrollHeight;
            }
        }
    });

    function addDefaultIngredient() {
        addIngredientTag("Example Ingredient");
        addIngredientMeasurement("Example Ingredient");
    }

    function addIngredientTag(ingredientName) {
        const tag = document.createElement("div");
        tag.classList.add("ingredient-tag");
        tag.textContent = ingredientName;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerHTML = "&times;"; // × symbol
        removeButton.addEventListener("click", function () {
            tag.remove();
            removeIngredientMeasurement(ingredientName);
        });

        tag.appendChild(removeButton);
        ingredientList.appendChild(tag);
    }

    function addIngredientMeasurement(ingredientName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${ingredientName}:</span>
            <input type="text" class="measurement-input" placeholder="Enter measurement">
        `;
        ingredientMeasurements.appendChild(listItem);
    }

    function removeIngredientMeasurement(ingredientName) {
        const items = ingredientMeasurements.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const span = items[i].getElementsByTagName("span")[0];
            const spanText = span.textContent.trim();
            if (spanText.startsWith(ingredientName)) {
                items[i].remove();
                break;
            }
        }
    }

    addStepButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        addRecipeStepInput();
    });

    function addRecipeStepInput() {
        const stepInput = document.createElement("div");
        stepInput.classList.add("recipe-step-input-container");
    
        const stepNumberSpan = document.createElement("span");
        stepNumberSpan.textContent = `${stepNumber}.`;
    
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.classList.add("recipe-step-input");
        inputField.placeholder = "Enter recipe step here...";

        const fileSpan = document.createElement("span");
        fileSpan.textContent = `Attach image (optional):`;
    
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.classList.add("recipe-step-image-input");
        fileInput.addEventListener("change", function () {
            handleImageUpload(fileInput);
        });
    
        // Append step number, input field, and file input to the container
        stepInput.appendChild(stepNumberSpan);
        stepInput.appendChild(inputField);
        stepInput.appendChild(fileSpan);
        stepInput.appendChild(fileInput);
    
        // Insert the new step input above the button
        instructionsList.insertBefore(stepInput, addStepButton);
    
        // Increment the step number for the next step
        stepNumber++;
    
        // Clear the input values for the next step
        inputField.value = "";
        fileInput.value = ""; // Clear the file input value to ensure the change event triggers on the next selection

        instructionsList.scrollTop = instructionsList.scrollHeight;
    }
    
});

function addToMainPage() {
    var dietaryRestrictions = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    var selectedRestrictions = [];
    dietaryRestrictions.forEach(function (checkbox) {
        selectedRestrictions.push(checkbox.value);
    });
    const restrictions = selectedRestrictions.join(',');

    var categorySelect = document.getElementById('recipe-category-select');
    var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("recipe-title-input").value;
    const category = selectedOption.value;
    const author = document.getElementById("profile-h2").textContent;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;
    //console.log(image);

    
    var isPublicRecipe = document.getElementById("toggleBtn").checked;

    const data = {"private":!isPublicRecipe, "dietaryRestrictions":restrictions, "title":title, "favourites":"False", "star":"0", "category":category, "image": image, "author": author, "href":href};
    
    const card = createNewCard(data);
    
    if(isPublicRecipe){
        document.getElementById("home-button").click();
        if(category == "Appetizers"){
            document.getElementById('cards-container').getElementsByClassName('category-container')[0].appendChild(card);
        } else if(category == "MainDishes"){
            document.getElementById('cards-container').getElementsByClassName('category-container')[1].appendChild(card);
        } else{
            document.getElementById('cards-container').getElementsByClassName('category-container')[2].appendChild(card);
        }
        addToProfilePageMyRecipes();
    } else{
        addToProfilePage();
    }
}

function addToProfilePageMyRecipes() {
    var dietaryRestrictions = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    var selectedRestrictions = [];
    dietaryRestrictions.forEach(function (checkbox) {
        selectedRestrictions.push(checkbox.value);
    });
    const restrictions = selectedRestrictions.join(',');

    var categorySelect = document.getElementById('recipe-category-select');
    var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("recipe-title-input").value;
    const category = "PersonalRecipe";
    const author = document.getElementById("profile-h2").textContent;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;
    //console.log(image);

    const data = {"dietaryRestrictions":restrictions, "title":"", "favourites":"False", "star":"0", "category":category, "image": image, "author": title, "href":href};
    
    const card = createNewCard(data);
    
    document.getElementById('profile-my-recipes-content').appendChild(card);
}

function addToProfilePage() {
    var dietaryRestrictions = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    var selectedRestrictions = [];
    dietaryRestrictions.forEach(function (checkbox) {
        selectedRestrictions.push(checkbox.value);
    });
    const restrictions = selectedRestrictions.join(',');

    var categorySelect = document.getElementById('recipe-category-select');
    var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("recipe-title-input").value;
    const category = "PersonalRecipe";
    const author = document.getElementById("profile-h2").textContent;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;
    //console.log(image);

    const data = {"dietaryRestrictions":restrictions, "title":"", "favourites":"False", "star":"0", "category":category, "image": image, "author": title, "href":href};
    
    const card = createNewCard(data);
    
    document.getElementById("profile-button").click();
    document.getElementById('profile-private-recipes-content').appendChild(card);
}





    function getNewStarRating(starValue) {
        const filledStars = '★'.repeat(starValue); // Unicode character for a filled star
        const emptyStars = '☆'.repeat(5 - starValue); // Unicode character for an empty star
        return filledStars + emptyStars;
    }

    function createNewCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.href = data.href || '#'; // Set a default link if 'href' is not provided
        cardLink.target = '_blank'; // Open the link in a new tab/window

        // Image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const image = document.createElement('img');
        image.src = data.image;
        image.alt = 'Image';
        imageContainer.appendChild(image);

        // Details container
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');

        // Author name
        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = data.author;

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = data.title;

        // Star rating (you can customize this part based on your needs)
        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = getNewStarRating(data.star); //'&#9733;&#9733;&#9733;&#9733;&#9733;';

        // Append elements to the details container
        detailsContainer.appendChild(author);
        detailsContainer.appendChild(title);
        detailsContainer.appendChild(rating);

        // Append image container and details container to the card link
        cardLink.appendChild(imageContainer);
        cardLink.appendChild(detailsContainer);

        // Append the card link to the main card container
        card.appendChild(cardLink);

        return card;
    }