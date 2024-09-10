window.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var footer = document.getElementById("footer");

  // Code pour charger le contenu du navbar

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "../../public_html/components/navbar.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      navbar.innerHTML = xhr.responseText;
    }
    const btnHamb = document.querySelector('.btn_hamb')
    const boxNavLinks = document.querySelector('.box_nav_links')

    btnHamb.addEventListener('click', toggleAnimation);

    function toggleAnimation() {
        if (btnHamb.classList.contains('btn_hamb--active')) {
            // Si la classe active est présente, on passe à l'état inverse
            btnHamb.classList.remove('btn_hamb--active');
            btnHamb.classList.add('btn_hamb--active-reverse');
        } else {
            // Si la classe inverse est présente, on repasse à l'état actif
            btnHamb.classList.remove('btn_hamb--active-reverse');
            btnHamb.classList.add('btn_hamb--active');
        }
    }

    btnHamb.addEventListener('click', openNavLinksMobileAnimation)
    function openNavLinksMobileAnimation(){
        boxNavLinks.classList.toggle('box_nav_links--active')
    }
  };
  xhr.send();

  // Code pour charger le contenu du footer
  var xhrFooter = new XMLHttpRequest();

  xhrFooter.open("GET", "./components/footer.html", true);
  xhrFooter.onreadystatechange = function () {
    if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
      footer.innerHTML = xhrFooter.responseText;
    }
  };
  xhrFooter.send();
});
