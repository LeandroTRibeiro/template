import '../src/style.css';

const pointer1 = document.querySelector('.pointer1');
const pointer2 = document.querySelector('.pointer2');
const pointer3 = document.querySelector('.pointer3');
const sliders = document.querySelector('.sliders');

pointer1.addEventListener('click', function(e) {
    sliders.style.marginLeft = '';
    pointer1.classList.add('active');
    pointer2.classList.remove('active');
    pointer3.classList.remove('active');
});

pointer2.addEventListener('click', function(e) {
    sliders.style.marginLeft = '-100vw';
    pointer2.classList.add('active');
    pointer1.classList.remove('active');
    pointer3.classList.remove('active');
});

pointer3.addEventListener('click', function(e) {
    sliders.style.marginLeft = '-200vw';
    pointer3.classList.add('active');
    pointer2.classList.remove('active');
    pointer1.classList.remove('active');
});

const pointer4 = document.querySelector('.pointer4');
const pointer5 = document.querySelector('.pointer5');
const pointer6 = document.querySelector('.pointer6');
const sliders2 = document.querySelector('.sliders2');

pointer4.addEventListener('click', function(e) {
    sliders2.style.marginLeft = '';
    pointer4.classList.add('active');
    pointer5.classList.remove('active');
    pointer6.classList.remove('active');
});

pointer5.addEventListener('click', function(e) {
    sliders2.style.marginLeft = '-912.5px';
    pointer5.classList.add('active');
    pointer4.classList.remove('active');
    pointer6.classList.remove('active');
});

pointer6.addEventListener('click', function(e) {
    sliders2.style.marginLeft = '-1825px';
    pointer6.classList.add('active');
    pointer5.classList.remove('active');
    pointer4.classList.remove('active');
});

const pointer7 = document.querySelector('.pointer7');
const pointer8 = document.querySelector('.pointer8');
const pointer9 = document.querySelector('.pointer9');
const slidersClient = document.querySelector('.slidersClient');

pointer7.addEventListener('click', function(e) {
    slidersClient.style.marginLeft = '';
    pointer7.classList.add('active');
    pointer8.classList.remove('active');
    pointer9.classList.remove('active');
});

pointer8.addEventListener('click', function(e) {
    slidersClient.style.marginLeft = '-100vw';
    pointer8.classList.add('active');
    pointer7.classList.remove('active');
    pointer9.classList.remove('active');
});

pointer9.addEventListener('click', function(e) {
    slidersClient.style.marginLeft = '-200vw';
    pointer9.classList.add('active');
    pointer8.classList.remove('active');
    pointer7.classList.remove('active');
});

window.onload = function() {
    document.querySelector('.menuHamburguer').addEventListener('click', function() {
        if(document.querySelector('.nav').style.display == 'block') {
            document.querySelector('.nav').style.display = 'none';
        } else {
            document.querySelector('.nav').style.display = 'block';
        }
    });
};