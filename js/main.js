let salata = document.getElementById('salata');
let xachapuri = document.getElementById('xachapuri');
let tsvniani = document.getElementById('tsvniani');
let mtsvadi = document.getElementById('mtsvadi');
let xinkali = document.getElementById('xinkali');
let limonati = document.getElementById('limonati');
let ludi = document.getElementById('ludi');

let rightArrowOne = document.getElementById('right-arrow-one').addEventListener('click', () => {
    salata.value++;
});
let rightArrowTwo = document.getElementById('right-arrow-two').addEventListener('click', () => {
    xachapuri.value++;
});
let rightArrowThree = document.getElementById('right-arrow-three').addEventListener('click', () => {
    tsvniani.value++;
});
let rightArrowFour = document.getElementById('right-arrow-four').addEventListener('click', () => {
    mtsvadi.value++;
});
let rightArrowFive = document.getElementById('right-arrow-five').addEventListener('click', () => {
    xinkali.value++;
});
let rightArrowSix = document.getElementById('right-arrow-six').addEventListener('click', () => {
    limonati.value++;
});
let rightArrowSeven = document.getElementById('right-arrow-seven').addEventListener('click', () => {
    ludi.value++;
});

let leftArrowOne = document.getElementById('left-arrow-one').addEventListener('click', () => {
    if(salata.value > 0) {
        salata.value--;
    };
});
let leftArrowOTwo = document.getElementById('left-arrow-two').addEventListener('click', () => {
    if(xachapuri.value > 0) {
        xachapuri.value--;
    };
});
let leftArrowThree = document.getElementById('left-arrow-three').addEventListener('click', () => {
    if(tsvniani.value > 0) {
        tsvniani.value--;
    };
});
let leftArrowFour = document.getElementById('left-arrow-four').addEventListener('click', () => {
    if(mtsvadi.value > 0) {
        mtsvadi.value--;
    };
});
let leftArrowFive = document.getElementById('left-arrow-five').addEventListener('click', () => {
    if(xinkali.value > 0) {
        xinkali.value--;
    };
});
let leftArrowSix = document.getElementById('left-arrow-six').addEventListener('click', () => {
    if(limonati.value > 0) {
        limonati.value--;
    };
});
let leftArrowSeven = document.getElementById('left-arrow-seven').addEventListener('click', () => {
    if(ludi.value > 0) {
        ludi.value--;
    };
});

let checkReport = document.getElementById('check-report');
let checkReportShow = document.getElementById('text').addEventListener('click', () => {
    checkReport.value = salata.value * 7 + xachapuri.value * 12 + tsvniani.value * 10 + mtsvadi.value * 16 + xinkali.value * 1.5 +limonati.value * 3 +ludi.value * 4;
});

let tip = document.getElementById('tip');
let tipShow = document.getElementById('text').addEventListener('click', () => {
    tip.value = (salata.value * 7 + xachapuri.value * 12 + tsvniani.value * 10 + mtsvadi.value * 16 + xinkali.value * 1.5 +limonati.value * 3 +ludi.value * 4) * 10 / 100;
});

let fullCheckReport = document.getElementById('full-check-report');
let fullCheckReportShow = document.getElementById('text').addEventListener('click', () => {
    fullCheckReport.value = parseInt(checkReport.value) + parseInt(tip.value);
});