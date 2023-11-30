document.addEventListener('DOMContentLoaded', function () {
    // Event listener for search bar
    const searchInput = document.querySelector('.search-bar');
    const cardsContainer = document.getElementById('cards-container');
    const dietDropdown = document.querySelector('.diet-dropdown');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedDiet = dietDropdown.value;
    
        const filteredRecipes = MeasurementArr.filter((recipe) => {
            const titleMatch = recipe.title && recipe.title.toLowerCase().includes(searchTerm);
            const dietMatch = !selectedDiet || (recipe.dietaryRestrictions && recipe.dietaryRestrictions.includes(selectedDiet));
            
            return titleMatch && dietMatch;
        });
    
        // Clear existing cards
        cardsContainer.innerHTML = '';
    
        // Group and append filtered cards
        const filteredCategories = {};
        filteredRecipes.forEach((data) => {
            if (!filteredCategories[data.category]) {
                filteredCategories[data.category] = [];
            }
            filteredCategories[data.category].push(createCard(data));
        });
    
        for (const category in filteredCategories) {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container');
    
            filteredCategories[category].forEach((card) => {
                categoryContainer.appendChild(card);
            });
    
            cardsContainer.appendChild(categoryContainer);
        }
    });
    
    

    const textMeasurement = '[{"dietaryRestrictions":"lactose-free", "title":"Fried Chicken", "favourites":"True", "star":"3", "category": "Appetizers", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"}, {"favourites":"True", "star":"2", "category": "Appetizers", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"favourites":"True", "star":"1", "category": "MainDishes", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"favourites":"False", "star":"4", "category": "MainDishes", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"}, {"title":"Mike", "favourites":"True", "star":"5", "category": "Dessert", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"favourites":"True", "star":"5", "category": "Dessert", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"favourites":"False", "star":"4", "category": "Appetizers", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"}, {"favourites":"False", "star":"3", "category": "Appetizers", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"favourites":"True", "star":"2", "category": "MainDishes", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"star":"1", "category": "MainDishes", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"}, {"favourites":"True", "star":"5", "category": "Dessert", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""}, {"favourites":"True", "star":"4", "category": "Dessert", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": ""} ]';
    const MeasurementArr = JSON.parse(textMeasurement);

    // Group cards by category
    const categories = {};
    MeasurementArr.forEach((data) => {
        if (!categories[data.category]) {
            categories[data.category] = [];
        }
        categories[data.category].push(createCard(data));
    });

    // Append cards to the container by category
    for (const category in categories) {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        categories[category].forEach((card) => {
            categoryContainer.appendChild(card);
        });

        cardsContainer.appendChild(categoryContainer);
    }

    // Function to create a card element
    function createCard(data) {
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
        rating.innerHTML = getStarRating(data.star); //'&#9733;&#9733;&#9733;&#9733;&#9733;';

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

    function getStarRating(starValue) {
        const filledStars = '★'.repeat(starValue); // Unicode character for a filled star
        const emptyStars = '☆'.repeat(5 - starValue); // Unicode character for an empty star
        return filledStars + emptyStars;
    }

});


function buttonScroll(){

    const buttonRight = document.getElementById('moveRight');
    const buttonLeft = document.getElementById('moveLeft');

    buttonRight.onclick = function () {
      document.getElementById('cardsInThisDiv').scrollLeft += 20;
    };
    buttonLeft.onclick = function () {
      document.getElementById('cardsInThisDiv').scrollLeft -= 20;
    };

}