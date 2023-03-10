import { showMain } from '../main/main'


const root = document.querySelector('.root')


export function showSettings() {
    root.innerHTML = `
    <div class="color_container">
    <div class="container settings__container">
        <div class="settings__logo"></div>
        <h2 class="settings__header">settings</h2>
    </div>
    <div class="container">

        <div class="menu">
            <div class="main__button settings__menu__img">
                <div class="settings__sound_icon"></div>
                <input type="range" min="0" max="1" step="0.02" value="0.10" class="sound__range">
                <input class="check__volume" id="check-volume" type="checkbox" null="">
                <h4 class="onoff__text">on/off</h4>
                <h2>volume</h2>

            </div>
            <div class="main__button settings__menu__img">
            </div>
        </div>
        <button class="save__button">Menu</button>
    </div>

</div>`

    addEventListeners()

}

function addEventListeners() {
    const menuButton = document.querySelector('.save__button')
    menuButton.addEventListener('click', showMain)
}
