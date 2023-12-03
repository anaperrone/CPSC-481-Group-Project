

document.addEventListener('DOMContentLoaded', function () {

    var text = 0

    // --------------------------------  profile page 1 ---------------------------------------------------------
    var cardsContainer3 = document.getElementById('community-content');

    // -----------------------------------------------------------------------------------------------------------   


    var MeasurementArr = fetch("./community.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data1) {
        var data2 = [];
        document.getElementById("friend-search-button").onclick = function(){
            var userSearched = document.getElementById("friend-search").value;
            console.log(userSearched );

            const data2 = data1.filter(({author}) => author === userSearched);

            const boxes = document.querySelectorAll('.category-container2');

            boxes.forEach(box => {
                box.remove();
            });
            makeCards(data2);

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
            if (["Friend"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container2');

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
        card.classList.add('card-community');

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