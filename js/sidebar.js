const btnMenu = document.querySelector('.btn-menu'),
sidebar = document.querySelector('.sidebar');

btnMenu.addEventListener('click',() => {
    sidebar.classList.toggle('expand');

    changesBtn()
})
function changesBtn() {
    if (sidebar.classList.contains('expand')) {
        btnMenu.classList.replace('bx-menu','bx-menu-alt-right')
    }else{
        btnMenu.classList.replace('bx-menu-alt-right','bx-menu')
    }
}
