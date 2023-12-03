

document.addEventListener('DOMContentLoaded', function () {

    // --------------------------------  profile page 1 ---------------------------------------------------------
    var cardsContainer1 = document.getElementById('MyRecipe');  

    var cardsContainer2 = document.getElementById('PersonalRecipe');
    cardsContainer2.style.display = "none";
    var cardsContainer3 = document.getElementById('Friend');
    cardsContainer3.style.display = "none";

    // var button2 = document.getElementById('private-button');
    // button2.style.display = "none";
    // var button3 = document.getElementById('friend-button');
    // button3.style.display = "none";
    // -----------------------------------------------------------------------------------------------------------   


    var MeasurementArr = fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data1) {
        document.getElementById("private-button").onclick = function(){
            cardsContainer1.style.display = "none";
            cardsContainer3.style.display = "none";
            cardsContainer2.style.display = "FLEX";

        } 

        document.getElementById("myrecipe-button").onclick = function(){
            cardsContainer1.style.display = "flex";
            cardsContainer3.style.display = "none";
            cardsContainer2.style.display = "none";
        } 

        document.getElementById("friend-button").onclick = function(){
            cardsContainer1.style.display = "none";
            cardsContainer3.style.display = "flex";
            cardsContainer2.style.display = "none";
        } 

        makeCards(data1);

    });




    function makeCards(MeasurementArr) {

        // Group cards by category
        const categories = {}
        MeasurementArr.forEach((data) => {
            if (!categories[data.category]) {
                categories[data.category] = [];
            };
            categories[data.category].push(createCard(data));
        });

        // ---------------------------- profile page 3 --------------------------------------------------------------
        for (const category in categories) {
            if (["MyRecipe"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container1');

                categories[category].forEach((card) => {
                    categoryContainer.appendChild(card);
                });

                cardsContainer1.appendChild(categoryContainer);
            }
        }

        for (const category in categories) {
            if (["PersonalRecipe"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container1');

                categories[category].forEach((card) => {
                    categoryContainer.appendChild(card);
                });

                cardsContainer2.appendChild(categoryContainer);
            }
        }

        for (const category in categories) {
            if (["Friend"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container1');

                categories[category].forEach((card) => {
                    categoryContainer.appendChild(card);
                });

                cardsContainer3.appendChild(categoryContainer);
            }
        }
    }
    // ----------------------------------------------------------------------------------------------------------

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

        // Star rating (you can customize this part based on your needs)
        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = getStarRating(data.star); //'&#9733;&#9733;&#9733;&#9733;&#9733;';

        // Append elements to the details container
        detailsContainer.appendChild(author);
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