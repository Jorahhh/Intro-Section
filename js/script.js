const hamb_menu = document.getElementById('hamburger');
const hamb = document.querySelectorAll('.hamb');
const navMobile = document.querySelector('.nav');


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

hamb_menu.addEventListener('click', activeMenu);