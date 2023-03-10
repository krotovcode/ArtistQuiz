import { showSettings } from '../settings/settings'
import { showArtists } from '../artists/artists'



const root = document.querySelector('.root')


export function showMain() {
    root.innerHTML = `<div class="color_container">
    <div class="container">
        <div class="logo"></div>
    </div>
    <div class="container">
    
        <div class="menu">
            <div class="main__button artist__button">
                <div class="menu__img"></div>
                <h2 class="button__text text__bold">artist <span class="button__text">quiz</span></h2>
            </div>
            <div class="main__button pictures__button">
                <div class="menu__img2"></div>
                <h2 class="button__text text__bold" >pictures <span class="button__text">quiz</span></h2>
            </div>
        </div>
        <button class="menu__button">Settings</button>
    </div>
    
    </div>`



    addEventListeners()

}

function addEventListeners() {
    const settingsButton = document.querySelector('.menu__button')
    settingsButton.addEventListener('click', showSettings)

    const artistButton = document.querySelector('.artist__button')
    artistButton.addEventListener('click', showArtists)

    // const picturesButton = document.querySelector('.pictures__button')
    // picturesButton.addEventListener('click', showPicturesMenu)

}



export const number = 45;