const toggleFavorites = () => {

    const favDiv = document.getElementById('favs');
    const currDisplay = favDiv.style.display;
    favDiv.style.display = currDisplay === 'none' ? 'block' : 'none';

    modifyRenderedFavTopics();

}

const modifyRenderedFavTopics = () => {
    const favorites = JSON.parse(localStorage.getItem('favs')) || [];
    const favContainer = document.getElementById('favItems');
    
    let content = ''
    favorites.forEach(e => {
    
        content += `
            <div class="col-1" style="width: 150px;">
            <div class="card custom-card p-0 border-0" style="height: 110px;">
                <div class="card-img-top border" style="width: 100%; height: 60px;">
                    <img class="custom-card-img-top" style="width: 100%;  height: 60px; object-fit: cover;"
                        src="Logos/${e.image}" alt="${e.topic}">
                </div>
                <div class="card-body pt-1 pb-0">

                    <p class="card-title fw-bold no-overflow mb-0">
                        ${e.topic}
                    </p>
                    <div class="rating mb-1">
                        <ion-icon name="star" for="star5"></ion-icon>
                        <ion-icon name="star" for="star4"></ion-icon>
                        <ion-icon name="star" for="star3"></ion-icon>
                        <ion-icon name="star" for="star2"></ion-icon>
                        <ion-icon name="star" for="star1"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
        ` 
    });

    favContainer.innerHTML = content
}