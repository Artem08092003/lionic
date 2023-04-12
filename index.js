let burger = document.querySelector('.header-nav-burger-button');
let menu = document.querySelector('.header-nav-menu');
let menuLinks = menu.querySelectorAll('.header-nav-item a');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('header-nav-burger--active');

        menu.classList.toggle('header-nav-menu--active');

        document.body.classList.toggle('header-stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('header-nav-burger--active');

        menu.classList.remove('header-nav-menu--active');

        document.body.classList.remove('header-stop-scroll');

    });
});

let btnMore = document.querySelector('.article-button');
let articlesItem = document.querySelectorAll('.articles-item');

btnMore.addEventListener('click', function () {
    articlesItem.forEach(function (el) {
        el.classList.add('articles-item--visible')
    });
    btnMore.closest('.article-center').classList.add('article-center--hidden');
});