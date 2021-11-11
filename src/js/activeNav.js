const activeNav = () => {
    const sections = document.querySelectorAll('#about-nav, #programs-nav, #reviews-nav, #faq-nav, #contacts-nav'),
          navLi = document.querySelectorAll('.menuItem a');

    window.addEventListener('scroll', ()=>{
        let current = '';
        sections.forEach(section =>{
            const scrollTop = section.offsetTop,
                  sectionHeight = section.clientHeight;
            if (pageYOffset >= scrollTop-100) {
                current = section.getAttribute('id');
            }
            else if(pageYOffset>=3395){
                current = section.getAttribute('id');
            }
        })
        navLi.forEach(elem =>{
            elem.classList.remove('active-nav');
            if (elem.classList.contains(current)){
                elem.classList.add('active-nav')
            }
        })
    })
}

export default activeNav;