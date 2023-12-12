let currentTopic;
let isAdded = false;

let favs = JSON.parse(localStorage.getItem('favs')) || [];


const favoritesHandler = () => {

    if (isAdded) {
        favs = favs.filter(t => t.id !== currentTopic.id);
        changeButtonText('Add to Favorites');
        isAdded = false;
    } else {
        favs.push(currentTopic);
        changeButtonText('Remove to Favorites');
        isAdded = true;
    }
    localStorage.setItem('favs', JSON.stringify(favs));
    modifyRenderedFavTopics();
}
const changeButtonText = (text) => {
    const buttonElement = document.getElementById('button-text');
    buttonElement.innerHTML = text + ' <ion-icon name="heart-outline"></ion-icon>';
}
const isAddedToFavorites = () => {

    return favs.some(e => e.id === currentTopic.id);

}
const changePageContent = (content) => {

    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = content;

}
const renderTopicDetails = (topic) => {


    isAdded = isAddedToFavorites();

    const buttonText = isAdded ? 'Remove From Favorites' : 'Add to Favorites';

    let subTopics = '';

    topic.subtopics.forEach(t => {

        subTopics += `<p class="topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
             ${t}
            </p>`}
    )

    const page = `
    <div class="left-section">
        <div class="about">
            <h5 class="type">
                ${topic.category}
            </h5>
            <h4 class="title">
                ${topic.topic}
            </h4>
            <div class="rating">
                <ion-icon name="star" for="star5"></ion-icon>
                <ion-icon name="star" for="star4"></ion-icon>
                <ion-icon name="star" for="star3"></ion-icon>
                <ion-icon name="star" for="star2"></ion-icon>
                <ion-icon name="star" for="star1"></ion-icon>
            </div>
            <div class="description">
            ${topic.description}
            </div>
        </div>
        <div class="sub-topics">
            <h3 class="sub-topics-title">
                ${topic.topic} Sub Topics
            </h3>

            ${subTopics}
        </div>
    </div>
    <div class="right-section">

        <div class="card p-0 border-0 rounded-0">

            <img class="card-img-top h-50" src="Logos/${topic.image}" alt="${topic.topic}">

            <div class="custom-card-body pt-1">
                <p class="card-type text-black no-overflow fw-bold mt-2">
                    ${topic.topic} by <a href="#">${topic.name}</a>
                </p>

                <div class="add-to-favorites">
                    <h5 class="fs-6">
                        Interested about this topic?
                    </h5>
                    <button onClick="favoritesHandler()" id="button-text">
                        ${buttonText}
                        <ion-icon name="heart-outline"></ion-icon>

                    </button>
                    <h5 class="credits">
                        Unlimited Credits
                    </h5>
                </div>
            </div>
        </div>
    </div>
`;
    changePageContent(page);

}

(async function () {


    try {

        const topicId = window.location.hash.substring(1);

        const loading = `
        <div class="col w-100 m-3 text-center fw-bold">
    
            Loading..
        
        </div>
        `;

        changePageContent(loading);

        const res = await fetch('https://tap-web-1.herokuapp.com/topics/details/' + topicId);
        currentTopic = await res.json();

        renderTopicDetails(currentTopic);

    }
    catch (e) {

        const error = `
        <div class="col w-100 text-center m-3 fw-bold text-danger">

            Something went wrong. Web topics failed to load.
        
        </div>
        `;
        changePageContent(error);
    }


})();

