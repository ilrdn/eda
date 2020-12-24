function hide(element) {
    /* К сожалению обычной css анимацией невозможно поставить "display: none;", 
    поэтому выполняем данный скрипт */
    if (!element.classList.contains('fadeOut')) {
        element.classList.add('fadeOut');
        setTimeout(function() {
            element.classList.add('hidden');
        }, 400);
        element.classList.remove('fadeIn');
    } else {
        element.classList.remove('hidden');
        element.classList.remove('fadeOut');
        element.classList.add('fadeIn');
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
};