const burgerMenu = () => {
    const menuButton = document.querySelector('.menu');
    const menu = document.querySelector('.popup-menu');
    const closeButton = menu.querySelector('.close-menu');
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.menu')){
            menu.style.cssText = `visibility: visible;`;
            menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,0,0);'
        } else if(target.closest('.close-menu') || !target.closest('.row') || target.closest('.menu-link')){
            menu.style.cssText = `visibility: hidden;`;
            menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(625px,0,0);'
        }
    })
}
export default burgerMenu;