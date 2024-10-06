
const header_area = document.querySelector(".header_area");
document.addEventListener("scroll", ()=>{
    if (window.scrollY > 50) {
        header_area.classList.add("header_toggle");
    }else{
        header_area.classList.remove("header_toggle");
    }
})



$(document).ready(function(){
    $( ".icon_design" ).click(function(){
        $(".header_menu_item").toggle("slow");
    })
})


var typed = new Typed('#element', {
    strings: ['Empowering Your Financial Journey through Customized Asset Management Services'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
});



const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        if (header.classList.contains('active')) {
            content.style.display = 'none';
            header.classList.remove('active');
        } else {
            content.style.display = 'block';
            header.classList.add('active');
        }
    });
});
