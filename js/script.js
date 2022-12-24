const hamb_menu = document.getElementById('hamburger');
const hamb = document.querySelectorAll('.hamb');
const navMobile = document.querySelector('.nav');
const features = document.getElementById('features');
const company = document.getElementById('company');




const specialLinksActive = (element) => {
    element.addEventListener('mouseover', () => {
        if(!element.classList.contains('active')){
            element.classList.add('active')
            element.childNodes[2].classList.add('active');
            const nav = navMobile;
            nav.addEventListener('mouseleave', () => {
                element.classList.remove('active');
                element.childNodes[2].classList.remove('active');
            })
        }
    })
}



const activeMenu = () => {
    if(!hamb_menu.classList.contains('active')) {
        hamb_menu.classList.add('active');
        hamb.forEach(line => {
            line.classList.add('active');
        })
        navMobile.classList.add('active');
        
    } else {
        hamb_menu.classList.remove('active');
        hamb.forEach(lines => {
            lines.classList.remove('active');
        })
        navMobile.classList.remove('active');
    }
}

specialLinksActive(features);
specialLinksActive(company);
hamb_menu.addEventListener('click', activeMenu);