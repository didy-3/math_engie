/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burgerNav.js":
/*!*****************************!*\
  !*** ./src/js/burgerNav.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burgerNav = () => {
  const menu = document.querySelector("#menu"),
        menuItems = document.querySelectorAll(".menuItem"),
        burgerMenu = document.querySelector("#burgerMenu"),
        closeIcon = document.querySelector("#closeIcon"),
        menuIcon = document.querySelector("#menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      menu.style.transform = 'translateY(-100%)';
      menu.style.transition = 'transform 0.3s';
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
      menu.style.transform = 'translateY(0)';
      menu.style.transition = 'transform 0.3s';
    }
  }

  burgerMenu.addEventListener("click", toggleMenu);
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burgerNav);

/***/ }),

/***/ "./src/js/faq.js":
/*!***********************!*\
  !*** ./src/js/faq.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const faq = () => {
  const faqArr = [{
    question: 'Как проходят занятия?',
    answer: 'Онлайн-занятия проходят на специализированных интерактивных досках.\n' + 'Для своих учеников я составляю индивидуальный план занятий на год, где можно будет отслеживать, какие темы мы проходим.\n' + 'Кроме того, я провожу регулярные тестирования, все результаты которых будут отображаться в индивидуальном плане.\n' + 'В конце каждого месяца я буду отправлять вам отчёт о проделанной за месяц работе и результатах промежуточных тестов.'
  }, {
    question: 'Что за договор?',
    answer: 'Для официального оформления отношений будет заключен договор на оказание услуг, который можно будет предъявить вместе с чеками в налоговую службу для возврата налогового вычета.\n' + 'В нем закреплены основные положения касательно занятий, в том числе пункты про своевременную оплату и заблаговременное оповещение о переносе или отмене занятий.'
  }, {
    question: 'С какими учениками я занимаюсь?',
    answer: 'Я занимаюсь со всеми начиная с 9 лет и старше, в том числе со взрослыми, главное – минимально уметь работать с компьютером)'
  }, {
    question: 'Какие приложения нужны для занятий?',
    answer: 'Любое средство для связи (Zoom, Skype, Discord). Желательно иметь их в скачанном и установленном виде во избежание проблем технического характера.\n' + 'Кроме того, я использую онлайн-доску Miro, на которой необходимо зарегистрироваться до начала занятий и открывать ее с компьютера для удобства работы на уроке.'
  }, {
    question: 'Будет ли домашка?',
    answer: 'Обязательно! Я большой любитель задавать домашку и желательно побольше, поэтому нужно быть морально готовыми к приличному объему дз. При первом невыполнении я могу простить, потом буду ругаться и жаловаться 😠'
  }];

  function makeQuestions(arr, selector, parentSelector) {
    arr.forEach(item => {
      const collapsibleItem = document.createElement("div");
      collapsibleItem.classList.add(selector);
      collapsibleItem.innerHTML = `
                <div class="collapsible-btn">
                    ${item.question}

                </div>
                <div class="collapsible-content">
                    ${item.answer}
                </div>
            `;
      document.querySelector(parentSelector).append(collapsibleItem);
    });
  }

  makeQuestions(faqArr, 'collapsible-item', '.collapsible-list');

  function toggleCollapsibleItem(selector, contentSelector, btnSelector) {
    let collapsibleItems = document.querySelectorAll(selector);
    collapsibleItems.forEach(item => {
      item.addEventListener("click", function () {
        item.querySelector(btnSelector).classList.toggle("opened");
        let content = item.querySelector(contentSelector);

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  }

  toggleCollapsibleItem('.collapsible-item', '.collapsible-content', '.collapsible-btn');
};

/* harmony default export */ __webpack_exports__["default"] = (faq);

/***/ }),

/***/ "./src/js/forms.js":
/*!*************************!*\
  !*** ./src/js/forms.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const forms = (modalToggleDataSelector, modalSelector) => {
  const modalToggle = document.querySelectorAll(modalToggleDataSelector),
        modal = document.querySelector(modalSelector);
  /*        modalTimerId = setTimeout(() => {
              document.querySelector('#modal-request').style.display = 'grid';
              document.body.style.overflow = 'hidden';
          }, 5000);*/
  //events on all btns to popup modal window

  modalToggle.forEach(item => {
    item.addEventListener('click', showModal);
  });

  function showModal() {
    modal.style.display = 'grid';
    document.body.style.overflow = 'hidden';
    /*clearInterval(modalTimerId)*/
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  } //ways to close modal


  modal.addEventListener('click', e => {
    if (e.target === modal || e.target === document.querySelector(`${modalSelector} .modal-close-btn`) || e.target === document.querySelector(`${modalSelector} img`)) {
      closeModal();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && (modal.style.display = 'grid')) closeModal();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = () => {
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
  });
  slider.style.position = 'relative';

  function slideOnButtons() {
    nextBtn.addEventListener('click', () => {
      if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
      }

      setIndex();
    });
    prevBtn.addEventListener('click', () => {
      if (offset === 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      } else {
        offset -= +width.slice(0, width.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }

      setIndex();
    });
  }

  slideOnButtons();

  function slideToDotIndex() {
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideTo = dot.getAttribute('data-slide-to');
        slideIndex = slideTo;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;
        setIndex();
      });
    });
  }

  slideToDotIndex();

  function setIndex() {
    dots.forEach(dot => {
      dot.style.background = 'rgba(250, 250, 250, 0.1)';
    });
    dots[slideIndex - 1].style.background = 'rgba(0, 0, 0, 0.1)';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq */ "./src/js/faq.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/js/forms.js");
/* harmony import */ var _burgerNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burgerNav */ "./src/js/burgerNav.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_faq__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal-greeting]', '.modal-greetings');
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal-signUp]', '#modal-request');
  (0,_burgerNav__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map