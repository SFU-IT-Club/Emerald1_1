// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // Show 4 images per slide by default
    spaceBetween: 10, // Adjust spacing between slides
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: { slidesPerView: 4 }, // Large screens (4 images)
        582: { slidesPerView: 2 }, // Tablets (2 images per slide)
        240: { slidesPerView: 1 }  // Mobile screens (1 image per slide)
    }
});
