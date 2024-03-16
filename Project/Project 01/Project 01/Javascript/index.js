const NavlinkElement=document.querySelectorAll('.nav-link');
const MenuElement=document.querySelector('.menu-bar');
MenuElement.addEventListener('click', ()=> {
    event.stopPropagation()
    event.preventDefault()
    NavlinkElement.forEach((e) => {
      e.classList.toggle('hide');
    });
  });
function hideMenu(){
  const MatchWindow=window.matchMedia("(max-width:500px)")
  function toggleMedia() {
    if (MatchWindow.matches) {
      MenuElement.classList.remove('hide')
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

