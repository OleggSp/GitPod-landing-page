const review__container = document.querySelector('.review__container');

review__container.addEventListener('wheel', (event) =>{
    review__container.scrollLeft += event.deltay;
    event.preventDefault();
})