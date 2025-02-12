/* Menu Show Y Hidden */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu Show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')

    })
}

/* Menu Hidden */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* Remove Menu Mobile */
const navLink = document.querySelectorAll('nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




// Mode Nuit/Jour
const iconChange = document.getElementById("theme-button")

function darkTheme() {
    var element = document.body;
    element.classList.toggle("dark-theme");
    //modification icon
    iconTheme = (icon) => icon.classList.toggle("uil-sun")
}


// Wrapper veille

const titles = document.querySelectorAll('.title__veille__wrapper');
const items = document.querySelectorAll('.item__veille__wrapper');

function showContent(event) {
  const clickedTitle = event.target;
  const filter = clickedTitle.dataset.filter;

  titles.forEach((title) => title.classList.remove('active'));
  clickedTitle.classList.add('active');

  items.forEach((item) => item.classList.remove('active'));
  document.querySelectorAll(filter).forEach((item) => item.classList.add('active'));
}

titles.forEach((title) => title.addEventListener('click', showContent));



// DEBUT FLECHE REMONTER //

// let flecheRemonte = document.getElementById('icon-fleche');

// 	function goToTopArrow() {
// 	if (window.scrollY > 100){
// 		flecheRemonte.style.display = 'block';
// 	}else{
// 		flecheRemonte.style.display = 'none';
// 	}
// 	}

// 	goToTopArrow();
// 	window.addEventListener('scroll', goToTopArrow);

// 	flecheRemonte.addEventListener('click', ()=>{
// 		window.scrollTo({
// 			top: 0,
// 			left: 0,
// 			behavior: 'smooth',
// 		})
// 	});
