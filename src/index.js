const expandMenuButton = document.querySelector('#expand-menu');
const collapseMenuButton = document.querySelector('#collapse-menu');
const asideContainer = document.querySelector('aside');
const dashboardContainer = document.querySelector('#dashboardContainer');
const articleContainer = document.querySelector('article');

expandMenuButton.addEventListener('click', expandMenu)

collapseMenuButton.addEventListener('click', collapseMenu)

function collapseMenu() {
    asideContainer.classList.remove('expand');
    dashboardContainer.removeEventListener('click', collapseMenu);
    articleContainer.classList.remove('darken');
}

function expandMenu() {
    asideContainer.classList.add('expand');
    dashboardContainer.addEventListener('click', collapseMenu);
    articleContainer.classList.add('darken');
}

function displayAvatar() {
    const img = document.querySelector('img.user-avatar');
    img.src = 'pics/avatar.jpeg';
}

displayAvatar();