const NavlinkElement=document.querySelectorAll('.nav-link');
const MenuElement=document.querySelector('.menu-bar');
const BodyElement=document.querySelector('body')
MenuElement.addEventListener('click', ()=> {
    event.stopPropagation()
    event.preventDefault()
    NavlinkElement.forEach((e) => {
      e.classList.toggle('hide');
    });
  });
function hideMenu(){
  const MatchWindow=window.matchMedia("(max-width:700px)")
  function toggleMedia() {
    if (MatchWindow.matches) {
      MenuElement.classList.remove('hide')
      NavlinkElement.forEach(e => {
        e.classList.add('hide')
      });
    }
    else{
      MenuElement.classList.add('hide')
      NavlinkElement.forEach(e => {
        e.classList.remove('hide')
      });
    }
}
toggleMedia()
MatchWindow.addListener(toggleMedia)
}
hideMenu()
