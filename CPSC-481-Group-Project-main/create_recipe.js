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
