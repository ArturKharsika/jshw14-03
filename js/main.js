let doc = document;
let items = doc.querySelectorAll('.box-item');
let next = doc.querySelector('.next');
let prev = doc.querySelector('.prev');
let show = doc.querySelector('.show');

let imgs = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg'];

let index = 0;
let maxIndex = items.length - 1;
let minIndex = 0;

setActiveItem();

next.onclick = function() {
    unsetActiveItem();
    swipeNextItem();
    setActiveItem();
}

prev.onclick = function() {
    unsetActiveItem();
    swipePrevItem();
    setActiveItem();
}

show.onclick = function () {
    showImg();
}


function unsetActiveItem() {
    items[index].classList.remove('active');
}
function setActiveItem() {
    items[index].classList.add('active');
}

function swipePrevItem() {
    index --;
    if (index < minIndex) {
        index = maxIndex;
    }
}
function swipeNextItem() {
    index ++;
    if (index > maxIndex) {
        index = 0;
    }
}

function showImg(box) {
    items[index].classList.toggle('toggleimg');
}