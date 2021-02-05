const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },




    breakpoints: {

        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 6,
        }
    }
});





const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView:1,
        },

        992: {
            slidesPerView: 1,
        }
    }
});
