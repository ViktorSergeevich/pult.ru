 function carousel() {
    let position = 0;

    let slidesToScroll = 4;
    let slidesToShow = 4;

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
    const itemWidth = container.clientWidth / slidesToShow
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item, index) => {
        item.style.minWidth = itemWidth + 'px';
        item.style.maxWidth = itemWidth + 'px';
    })

    btnNext.addEventListener('click', () => {
        if (position > -(items.length - slidesToShow) * itemWidth)
            position -= movePosition;

        setPosition();
    })
     btnPrev.addEventListener('click', () => {
         if( position + movePosition <= 0)
             position += movePosition
         else
             position = 0
         setPosition();
     })
     function setPosition() {
         track.style.transform = `translateX(${position}px)`
     }
     function activeNavigate () {
         navigateBlock.innerHTML = ''
         let circles
         for (let i = 0; i < Math.ceil(items.length / slidesToShow); i++) {
             let sp = document.createElement('span');
             sp.classList.add('navigate__circle');
             sp.dataset.idPage = i
             sp.addEventListener('click', (e) => {
                 let el = e.currentTarget
                 circles = document.querySelectorAll('[data-id-page]')
                 circles.forEach((el) => {
                     el.classList.remove('navigate__circle_active')
                 })
                 position = -itemWidth * el.dataset.idPage * slidesToShow
                 el.classList.add('navigate__circle_active');
                 setPosition()
             })
             if (i === 0) sp.classList.add('navigate__circle_active');
                navigateBlock.appendChild(sp)
         }

     }
}
window.onload = () => {
    carousel();
    const track = document.querySelector('.cart-track')
    // track.addEventListener('')
 }
 window.onresize = () => {
     carousel();
 }
