/* не использовал стрелочные функции, чтобы IE не грустил */

var phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
    }
);

var cards = tns({
    container: '.cards',
    loop: false,
    items: 3,
    gutter: 20,
    controlsText: ['', ''],
    mouseDrag: true
});

function visibility(element) {
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

var locBtn = document.getElementById('locBtn');
var locClose = document.getElementById('locClose');
var input = document.getElementById('locInput');
var list = document.getElementById('locList');
var locWrap = document.getElementById('locWrap');

var srBtn = document.getElementById('srBtn');
var srClose = document.getElementById('srClose');
var srWrap = document.getElementById('srWrap');

var loginBtn = document.getElementById('loginBtn');
var modal = document.getElementById('modal');
var modalClose = document.getElementById('modalClose');

locBtn.onclick = function() {
    //Скрываем другой input, так как оба не умещаются
    if(srBtn.classList.contains('hidden')) {
        visibility(srWrap);
        visibility(srBtn);
    };
    visibility(this);
    visibility(locWrap);
};

locClose.onclick = function() {
    visibility(locBtn);
    visibility(locWrap);
};

input.onfocus = function() {
    visibility(list);
};

input.onblur = function() {
    visibility(list);
};

srBtn.onclick = function() {
    //Скрываем другой input, так как оба не умещаются
    if(locBtn.classList.contains('hidden')) {
        visibility(locWrap);
        visibility(locBtn);
    };
    visibility(this);
    visibility(srWrap);
};

srClose.onclick = function() {
    visibility(srBtn);
    visibility(srWrap);
};

loginBtn.onclick = function() {
    visibility(modal);
};

modalClose.onclick = function() {
    visibility(modal);
};

modal.onclick = function(e) {
    if (e.target === this) {
        visibility(this);
    }
};