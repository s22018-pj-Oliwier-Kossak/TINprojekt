const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

function change(){
    const images =[
        'url("burgerStart1.jpg")',
        'url("burgerStart2.jpg")',
        'url("burgerStart3.jpg")',
    ]
    const body = document.querySelector('body');
    const BG = images[Math.floor(Math.random()*images.length)];
    body.style.backgroundImage = BG;
    setInterval(change,2100);
}
change();
