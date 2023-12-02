

document.addEventListener('DOMContentLoaded', function () {

    var text = 0

    // --------------------------------  profile page 1 ---------------------------------------------------------
    const cardsContainer1 = document.getElementById('MyRecipe');  
    const cardsContainer2 = document.getElementById('PersonalRecipe');
    const cardsContainer3 = document.getElementById('Friend');
    // -----------------------------------------------------------------------------------------------------------   


    var MeasurementArr = fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data1) {
        document.getElementById("retrieveMovies").onclick = function(){
            text = document.getElementById("textbox1").value;
            //makeCards({"star":text, "category": "Appetizers", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"});
            data1[data1.length + 1] = {"star":text, "category": "Friend", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"};
            const boxes = Array.from(document.getElementsByClassName('category-container'));

            boxes.forEach(box => {
            box.remove();
});
            makeCards(data1);
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
                categoryContainer.classList.add('category-container');

                categories[category].forEach((card) => {
                    categoryContainer.appendChild(card);
                });

                cardsContainer1.appendChild(categoryContainer);
            }
        }

        for (const category in categories) {
            if (["PersonalRecipe"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container');

                categories[category].forEach((card) => {
                    categoryContainer.appendChild(card);
                });

                cardsContainer2.appendChild(categoryContainer);
            }
        }

        for (const category in categories) {
            if (["Friend"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container');

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