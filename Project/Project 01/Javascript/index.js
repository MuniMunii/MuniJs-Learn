const MenuElement=document.querySelector('.menu-bar')
.addEventListener('click', ()=> {
    event.stopPropagation()
    event.preventDefault()
    NavlinkElement.forEach((e) => {
      e.classList.toggle('hide');
    });
  });
const NavlinkElement=document.querySelectorAll('.navbar-list .nav-link');


