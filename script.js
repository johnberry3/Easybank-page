const Bar = document.getElementById('menu-bar');
const mobileNav = document.querySelector('.Mobile-nav')


function OpenNav(){
    mobileNav.classList.add('show');
}

Bar.addEventListener('click', OpenNav);