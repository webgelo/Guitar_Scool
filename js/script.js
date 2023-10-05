window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})

$(function () {
    $("a.scrollto").click(function () {
     let elementClick = $(this).attr("href")
     let destination = $(elementClick).offset().top;
     $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 505);
     return false;
    });
  });