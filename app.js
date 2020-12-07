const tabsBtn = document.querySelectorAll(".js-tab__btn");
const tabsItems = document.querySelectorAll(".js-cards__body");


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

    });
}


document.querySelector('.js-tab__btn').click();


/* Burger menu */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('showMenu');

navToggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (navToggle.classList.contains('active')) {

        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
document.body.classList.remove('no-scroll')

    } else {
        navToggle.classList.add('active');
        navMenu.classList.add('active');
        document.body.classList.add('no-scroll')
    }
});

/* lockScroll */
function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}



/* Slider https://kenwheeler.github.io/slick/
    ================================*/
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});