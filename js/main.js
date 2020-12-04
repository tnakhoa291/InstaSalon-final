//Start Language Function
let lang_text = document.querySelector('.header__lang-text');
let lang_text_span = document.querySelector('span');
let lang_ul = document.querySelector('.header__lang-ul');
lang_text.addEventListener('click',function(event){
    event.stopPropagation();
    lang_ul.classList.toggle('active')
})

let body =document.body;
body.addEventListener('click',function(){
    lang_ul.classList.remove('active')
})

lang_ul.querySelectorAll('a').forEach(e => {
    e.addEventListener('click',function(e){
        window.event.preventDefault();
        let text = this.innerText;
        lang_text_span.innerHTML = text;
    })
})
//End Language Function

//Start Hamburger Menu
let navSlide = () =>{
    let burger = document.querySelector('.btnmenu');
    let nav = document.querySelector('.header__list');
    let navLinks = document.querySelectorAll('.header__list li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('header__list-active');


        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7 + 1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();
//End Hamburger Menu

//Start BackToTop
$('.below .below__btt').on('click', function() {
    $("html, body").animate({scrollTop: 
    0}, 1000);
});
//End BackToTop
