// import Swiper JS
import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper styles
/*import 'swiper/css/bundle';*/
/*import 'swiper/css/navigation';
import 'swiper/css/pagination';*/


const slider = () => {

    // configure Swiper to use modules
    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}
export default slider