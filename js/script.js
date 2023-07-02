$(function() {
    $('.marquee').marquee({
        duration: 7000,
        startVisible: true,
        duplicated: true
    });
});



const panels = document.querySelectorAll('.panel');

const expand = (item, index) => {
    panels.forEach((it, ind) => {
        if (ind === index) return;
        it.clicked = false;
        it.style.flex = '0.5';
    });

    item.clicked = !item.clicked;
    item.style.flex = item.clicked ? '1' : '0.5';
};

panels.forEach((item, index) => {
    item.clicked = false;
    item.addEventListener('click', () => expand(item, index));
});



