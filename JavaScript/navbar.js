
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
console.log("navbar");

navBarToggle.addEventListener('click', function () {
    let activeElement = document.getElementsByClassName('active-2');
    var i;
    for (i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.remove('active-2');
    }
    mainNav.classList.toggle('active');
    console.log("click");
});

let searchNav = document.getElementById('js-search');
let searchToggle = document.getElementById('js-search-toggle');
console.log("search");

searchToggle.addEventListener('click', function() {
    let activeElement = document.getElementsByClassName('active');
    var i;
    for (i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.remove('active');
    }
    searchNav.classList.toggle('active-2');
    console.log("search-click");
});