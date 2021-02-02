 function carousel() {
    let position = 0;

    let slidesToScroll = 4;
    let slidesToShow = 4;
    let itemWidth;

    const container = document.querySelector('.carousel__cart-container');
    const track = document.querySelector('.cart-track');
    const items = document.querySelectorAll('.cart-item-wrapper');
    const btnPrev = document.querySelector('.arrow_left');
    const btnNext = document.querySelector('.arrow_right');
    const navigateBlock = document.querySelector('.navigate__circle-container');


    if (window.innerWidth < 1240) {
        slidesToShow = 3
        slidesToScroll = 3
        if (window.innerWidth <= 920) {
            slidesToShow = 2;
            slidesToScroll = 2
        }
        if (window.innerWidth < 568) {
            slidesToShow = 1
            slidesToScroll = 1
        }
        activeNavigate()
    } else {
        navigateBlock.innerHTML = '';
    }
    itemWidth = container.clientWidth / slidesToShow;
    items.forEach((item, index) => {
        item.style.minWidth = itemWidth + 'px';
        item.style.maxWidth = itemWidth + 'px';
    })

    btnNext.addEventListener('click', () => {
        const movePosition = slidesToScroll * itemWidth;
        position -= movePosition;
        setPosition();
    })
    btnPrev.addEventListener('click', () => {
        const movePosition = slidesToScroll * itemWidth;
        position += movePosition;
        setPosition();
    })
     function setPosition() {
         track.style.transform = `translateX(${position}px)`
     }
     function activeNavigate () {
         navigateBlock.innerHTML = ''
         for (let i = 0; i < Math.ceil(items.length / slidesToShow); i++) {
             sp = document.createElement('span');
             sp.classList.add('navigate__circle');
             if (i === 0) sp.classList.add('navigate__circle_active');
             navigateBlock.appendChild(sp)
         }
     }
}
window.onload = () => {
    carousel();
 }
 window.onresize = () => {
     carousel();
 }