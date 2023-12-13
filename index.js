let currentTopics, allTopics;

const searchInput = document.getElementById('search-input');


const changePageContent = (content) => {

    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = content;
}

const changeTopicsHandler = (topics) => {

    let temp = '';

    if (topics.length) {
        topics.forEach((topic) => {
            const card = `
        <div class="col">
            <div class="card custom-card p-0 border-0">
                <a href="./detail.html#${topic.id}">
                    <div class="card-img-top  border" style="height: 150px; width: 100%" >
                        <img class="custom-card-img-top" style=" background-color: white; height: 150px; width: 100%; object-fit: cover;" src="Logos/${topic.image}" alt="${topic.topic}">
                    </div>
                    <div class="card-body" style="height: 150px">
                        <p class="card-type custom-card-type no-overflow mb-0">
                        ${topic.category}
                        </p>
                        <p class="card-title fw-bold custom-paragraph">
                        ${topic.topic}
                        </p>
                        <div class="rating mb-1">
                            <ion-icon name="star" for="star5"></ion-icon>
                            <ion-icon name="star" for="star4"></ion-icon>
                            <ion-icon name="star" for="star3"></ion-icon>
                            <ion-icon name="star" for="star2"></ion-icon>
                            <ion-icon name="star" for="star1"></ion-icon>
                        </div>
    
                        <h6 class="custom-card-author mb-1">
                            Author: ${topic.name}
                        </h6>
                    </div>
                </a>
            </div>
        </div>
        `;
            temp += card;
        });
    }else {
        temp = `<div class="col w-100 text-center fw-bold"> No results Found! </div>`;
    }
    changePageContent(temp);
}
const setCategories = (topics) => {

    const filterElement = document.getElementById('filter');
    const categories = new Set(topics.map(topic => topic.category));

    categories.forEach(c => {
        filterElement.innerHTML += `<option value="${c}">${c}</option>`;
    });


}
const checkSortFilterHandler = () => {

    currentTopics = filterHandler();
    changeTopicsHandler(sortHandler());
}
function debounce(func) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, 300);
    };
}
const searchTopicHandler = async () => {

    try {
        const searchValue = searchInput.value;

        const res = await fetch('https://tap-web-1.herokuapp.com/topics/list?phrase=' + searchValue);
        const topics = await res.json();

        allTopics = topics;
        currentTopics = topics;

        checkSortFilterHandler();

    }
    catch (e) {
        console.log(e);
    }

}

searchInput.addEventListener('input', debounce(searchTopicHandler));

const sortSelectHandler = () => {

    changeTopicsHandler(sortHandler());
}
const sortHandler = () => {

    const sortSelect = document.getElementById("sort");
    const value = sortSelect.value;

    const tempTopics = [...currentTopics];

    if (value === 'name' || value === 'topic') {
        tempTopics.sort((a, b) => {

            const aValue = a[value].toLowerCase();
            const bValue = b[value].toLowerCase();

            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
            return 0;
        });

    }
    return tempTopics;
}
const filterHandler = () => {

    const filterSelect = document.getElementById("filter");
    const value = filterSelect.value;

    if (value === 'default') {

        return allTopics;

    } else {

        return allTopics.filter(topic => topic.category.includes(value));
    }

}


(async function () {
    try {

        const loading = `<div class="col w-100 text-center fw-bold"> Loading.. </div>`;

        changePageContent(loading);

        const res = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        const topics = await res.json();

        currentTopics = topics;
        allTopics = topics;

        setCategories(topics);
        changeTopicsHandler(topics);

    }
    catch (e) {
        const error = `<div class="col w-100 text-center fw-bold text-danger">

            Something went wrong. Web topics failed to load.
        
        </div>
        `;
        changePageContent(error);
    }
})();

