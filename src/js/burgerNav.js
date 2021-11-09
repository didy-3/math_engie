const burgerNav = () => {
    const menu = document.querySelector("#menu"),
          menuItems = document.querySelectorAll(".menuItem"),
          burgerMenu= document.querySelector("#burgerMenu"),
          closeIcon= document.querySelector("#closeIcon"),
          menuIcon = document.querySelector("#menuIcon");

    function toggleMenu() {
        if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
            menu.style.transform = 'translateY(-100%)';
            menu.style.transition = 'transform 0.3s'
        } else {
            menu.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
            menu.style.transform = 'translateY(0)';
            menu.style.transition = 'transform 0.3s'
        }
    }

    burgerMenu.addEventListener("click", toggleMenu);

    menuItems.forEach(
        function(menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )
}
export default burgerNav;