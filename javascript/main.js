/* ABRIR E FECHAR O MENU */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* FECHAR O MENU QUANDO CLICAR NO ICONE X */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* TESTIMONIALS SLIDE SWIPER */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLL REVEAL: ANIMAÇÃO QUANDO SCROLLAR A PAGINA */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 750,
  reset: true
})

scrollReveal.reveal(
  `
  #home .content, 
  #about .people-card,
  #services .image, 
  #services .text,
  #images .images-title-background, 
  #images .images-thumbs,
  #testimonials header, 
  #testimonials .testimonials,
  #contact .text, 
  #contact .links,
  footer .brand, 
  footer .social
`,
  { interval: 100 }
)

/* BACK TO TOP BUTTON */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO DEPENDENDO DA SECTION  */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function () {
  backToTop()
  activateMenuAtCurrentSection()
})
