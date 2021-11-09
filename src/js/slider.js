const slider = () =>{
    const prevBtn = document.getElementById('prev-btn'),
        nextBtn = document.getElementById('next-btn'),
        slides = document.querySelectorAll('.review'),
        slidesWrapper = document.querySelector('.slider-wrapper'),
        slidesField = document.querySelector('.slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector('.reviews_slider'),
        dots = document.querySelectorAll('.carousel-indicators li');

    let slideIndex = 1,
        offset = 0;
    dots[0].style.background = 'rgba(0, 0, 0, 0.1)';

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    })

    slider.style.position = 'relative';

    function slideOnButtons () {
        nextBtn.addEventListener('click', () => {
            if (offset === (+width.slice(0, width.length - 2) * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2);
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === slides.length) {
                slideIndex = 1
            } else {
                slideIndex++;
            }
            setIndex();
        })

        prevBtn.addEventListener('click', () => {
            if (offset === 0) {
                offset = (+width.slice(0, width.length - 2) * (slides.length - 1))
            } else {
                offset -= +width.slice(0, width.length - 2);
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === 1) {
                slideIndex = slides.length
            } else {
                slideIndex--;
            }
            setIndex();
        });
    }
    slideOnButtons();

    function slideToDotIndex () {
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideTo = dot.getAttribute('data-slide-to');
                slideIndex = slideTo;
                offset = (+width.slice(0, width.length - 2) * (slideTo - 1));
                slidesField.style.transform = `translateX(-${offset}px)`;
                setIndex();
            })
        })
    }
    slideToDotIndex();

    function setIndex() {

        dots.forEach(dot => {
            dot.style.background = 'rgba(250, 250, 250, 0.1)';
        })
        dots[slideIndex - 1].style.background = 'rgba(0, 0, 0, 0.1)';

    }
}
export default slider