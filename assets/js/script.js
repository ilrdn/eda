function hide(element) {
    /* element.classList.add("fadeOut"); */
    /* К сожалению обычной css анимацией невозможно поставить "display: none;", 
    поэтому выполняем данный скрипт */
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.remove('visuallyhidden');
        setTimeout(function () {
            element.classList.remove('visuallyhidden');
        }, 20);
    } else {
        element.classList.add('visuallyhidden');
        element.addEventListener('transitionend', function(e) {
            element.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}

let btn = document.getElementById('locBtn');
let closeBtn = document.getElementById('locClose');
let input = document.getElementById('locInput');
let list = document.getElementById('locList');

btn.onclick = function() {
    hide(this);
};

closeBtn.onclick = function() {
    hide(btn);
};

input.onfocus = function() {
    hide(list);
};

input.onblur = function() {
    hide(list);    
    list.classList.add('hidden');
};