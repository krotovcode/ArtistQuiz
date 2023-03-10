import { showMain } from '../main/main'

const root = document.querySelector('.root')

const categories = [
    {
        title: 'Portrait',
        image: './img/artists_list/artists_list_image1.jpeg',
        finishedCounts: 1,
    },
    {
        title: 'Landscape',
        image: './img/artists_list/artists_list_image2.jpeg'
    },
    {
        title: 'Still-life',
        image: './img/artists_list/artists_list_image3.jpeg'
    },
    {
        title: 'Graphic',
        image: './img/artists_list/artists_list_image4.jpeg',

    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image5.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image6.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image7.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image8.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image9.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image10.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image11.jpeg'
    },
    {
        title: 'Antique',
        image: './img/artists_list/artists_list_image12.jpeg'
    },
]

function itemCreator(categories) {
    // Если 4 больше 5, то num = true, иначе num = false;
    // const num = 4 > 5 ? true : false 

    return categories.map((item) => {

        const category = document.createElement(`div`)
        category.className = 'categories__item'
        category.innerHTML = `<div class="item__header">
    <div class="item__text">${item.title}</div>
</div>
<div class="item__picture ${item.finishedCounts > 0 ? ' item__done' : ''}" style='background-image: url(${item.image})'>
</div>`
        return category.outerHTML
    })

}

export function showArtists() {

    root.innerHTML = `<div class="color_container">
    <div class="container artist__container">
        <div class="settings__logo"></div>
        <div class="logo__container">
            <button class="home__button">Home</button>
            <h2 class="artist__chapter">Categories</h2>
            <div class="plug"></div>
        </div>

    </div>
    <div class="container">
        <div class="categories__list">
            ${itemCreator(categories).join(' ')}
        </div>


    </div>

</div>`

    const backButton = document.querySelector('.home__button')
    backButton.addEventListener('click', showMain)

}


