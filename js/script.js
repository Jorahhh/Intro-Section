const hamb_menu = document.getElementById('hamburger');
const hamb = document.querySelectorAll('.hamb');
const navMobile = document.querySelector('.nav');
const features = document.getElementById('features');
const company = document.getElementById('company');
const arrow = document.querySelectorAll('.arrow');
const body = document.querySelector('.body');




//Desktop Section

const specialLinksActive = (element) => {
   let width = window.innerWidth;
    if(width <= 990){
        element.addEventListener('click', () => {
            if(!element.classList.contains('active')){
                element.classList.add('active');
                element.childNodes[2].classList.add('active');
            } else {
                element.classList.remove('active');
                element.childNodes[2].classList.remove('active');
            }
        })

    } else if (width > 990){
        element.addEventListener('mouseover', () => {
            if(!element.classList.contains('active')){
                element.classList.add('active');
                element.childNodes[2].classList.add('active');
                element.addEventListener('mouseleave', () => {
                    element.classList.remove('active');
                    element.childNodes[2].classList.remove('active');
                })
            }
        })
    }
}



specialLinksActive(features);
specialLinksActive(company);




//Mobile & Tablet section



const activeMenu = () => {
        if(!hamb_menu.classList.contains('active')) {
            hamb_menu.classList.add('active');
            hamb.forEach(line => {
                line.classList.add('active');
            })
            navMobile.classList.add('active');
            body.classList.add('active');
        } else {
            hamb_menu.classList.remove('active');
            hamb.forEach(lines => {
                lines.classList.remove('active');
            })
            navMobile.classList.remove('active');
            body.classList.remove('active');
        }
}

hamb_menu.addEventListener('click', activeMenu);