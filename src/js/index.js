import faq from "./faq";
import slider from "./slider";
import forms from "./forms";
import burgerNav from "./burgerNav";
import activeNav from "./activeNav";

window.addEventListener('DOMContentLoaded', ()=>{
    "use strict"
    faq();
    slider();
    forms('[data-modal-greeting]', '.modal-greetings');
    forms('[data-modal-signUp]', '#modal-request');
    burgerNav();
    activeNav();
});