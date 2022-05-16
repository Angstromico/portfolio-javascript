//const { element } = require('prop-types');

!(function (n) {
  n('html').removeClass('no-js'),
    n('header a').click(function (e) {
      if (!n(this).hasClass('no-scroll')) {
        e.preventDefault();
        var t = n(this).attr('href'),
          i = n(t).offset().top;
        n('html, body').animate(
          { scrollTop: i + 'px' },
          +Math.abs(window.pageYOffset - n(t).offset().top)
        ),
          n('header').hasClass('active') &&
            n('header, body').removeClass('active');
      }
    }),
    n('#to-top').click(function () {
      n('html, body').animate({ scrollTop: 0 }, 500);
    }),
    n('#lead-down span').click(function () {
      var e = n('#lead').next().offset().top;
      n('html, body').animate({ scrollTop: e + 'px' }, 500);
    }),
    n('#experience-timeline').each(function () {
      ($this = n(this)),
        ($userContent = $this.children('div')),
        $userContent.each(function () {
          n(this)
            .addClass('vtimeline-content')
            .wrap(
              '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
            );
        }),
        $this.find('.vtimeline-point').each(function () {
          n(this).prepend(
            '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
          );
        }),
        $this.find('.vtimeline-content').each(function () {
          var e = n(this).data('date');
          e &&
            n(this)
              .parent()
              .prepend('<span class="vtimeline-date">' + e + '</span>');
        });
    }),
    n('#mobile-menu-open').click(function () {
      n('header, body').addClass('active');
    }),
    n('#mobile-menu-close').click(function () {
      n('header, body').removeClass('active');
    }),
    n('#view-more-projects').click(function (e) {
      e.preventDefault(),
        n(this).fadeOut(300, function () {
          n('#more-projects').fadeIn(300);
        });
    });
})(jQuery);
//Get the info from my projects on array
const projects = [
  {
    title: 'Cambia Colores',
    description:
      'An application that I made in pure JavaScript following the instructions of the tutorial of projects for beginners by John Smilga, with the particularity that I made it in Spanish and that it uses the rgb format.',
    image: 'images/projects.png',
    link: 'https://cambiafondos.netlify.app',
  },
  {
    title: 'JavaScript Shopping Car',
    description:
      'A shopping car made it follow the full Web Development Curse from Udemy',
    link: 'https://shopping-cartmanuelmorales.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/shoppin-cart-manuel-morales/master/Capture.png',
  },
  {
    title: 'Simulador de Envio de Formulario en JavaScript',
    description: 'My JavaScript simulator of sending form',
    link: 'https://simulador-manda-correos-memz.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/Simulador-Envia-Correo-Manuel/master/screencapture-simulador-manda-correos-memz-netlify-app-2021-09-15-13_38_54.png',
  },
  {
    title: 'Buscador de Autos JavaScript',
    description: 'An app that show cars according the user preference',
    link: 'https://buscador-automoviles-manuel-morales.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/Buscador_Automoviles_JavaScript/master/img/catureautos.png',
  },
  {
    title: 'App Cotizador de Automoviles en JavaScript',
    description: 'App to ensure your Car with JavaScript',
    link: 'https://manuel-morales-cotizador-autos.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/Cotizador-Autos-App/master/cotizador.png',
  },
  {
    title: 'App Presupuesto Gasto',
    description: 'App for calculating expenses and budget in JavaScript.',
    link: 'https://manuel-morales-app-gastos.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/consultas-veterinarias-apps/master/maxcyn.png',
  },
  {
    title: 'App Consulta Veterinaria',
    description: 'App made in JavaScript to simulate a veterinary consultation',
    link: 'https://manuel-morales-consulta-veterinaria.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/app-gastos/master/gasto.png',
  },
  {
    title: 'Shooting Space Game',
    description:
      'A game made with the JavaScript API called Canvas from the Bullet Hell genre that I made following this tutorial: https://www.youtube.com/watch?v=eI9idPTT0c4&t=5s. Of course, I added details like being able to create a user and save game data in localStorage so that it is preserved between games.',
    link: 'https://manuel-morales-space-canvas.netlify.app',
    image:
      'https://raw.githubusercontent.com/Angstromico/space-canvas-game/master/canvas.png',
  },
  {
    title: 'App Weather',
    description: 'App to see the eather of your city',
    link: 'https://manuel-morales-weather-app.netlify.app/',
    image:
      'https://raw.githubusercontent.com/Angstromico/weather-app/master/weather-app.png',
  },
];
const row = document.querySelector('.row2');

//For Loop to put the projects on the DOM
for (let project of projects) {
  const { title, description, link, image } = project;
  const container = document.createElement('DIV');
  container.className = 'project shadow-large col-md-3 col-lg-4 pb-3';
  const imageContainer = document.createElement('DIV');
  imageContainer.className = 'mt-2 mb-2';
  const imgProject = document.createElement('IMG');
  imgProject.className = 'img-fluid img-size';
  imgProject.src = image;
  imageContainer.append(imgProject);
  const infoProject = document.createElement('DIV');
  //infoProject.className = 'project-info';
  const nameProject = document.createElement('H3');
  nameProject.className = 'my-2';
  nameProject.textContent = title;
  const descriptionProject = document.createElement('P');
  descriptionProject.textContent = description;
  const linkProject = document.createElement('A');
  linkProject.className = 'btn btn-primary mb-2 mt-2';
  linkProject.href = link;
  linkProject.target = '_blank';
  linkProject.textContent = 'View the Project';
  infoProject.append(nameProject, descriptionProject, linkProject);
  container.append(imageContainer, infoProject);
  row.append(container);
}
//Scroll Effect
const scrollElements = document.querySelectorAll('.scroll');
const elementInView = (element, dividend = 1) => {
  const elementTop = element.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.innerHeight / dividend)
  );
};
const elementOutOfView = (element) => {
  const elementTop = element.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};
const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};
const handleScrollAnimation = () => {
  scrollElements.forEach((element) => {
    if (elementInView(element, 1.25)) {
      displayScrollElement(element);
    } else if (elementOutOfView(element)) {
      hideScrollElement(element);
    }
  });
};
window.addEventListener('scroll', handleScrollAnimation);
//Current Year on Footer Copyright
const year = new Date().getFullYear();
const spanYear = document.getElementById('current-year');
spanYear.textContent = year;
//AutoType Presentation
const TypingText = document.querySelector('#typed-text');
const AutoTyping = document.querySelector('.TypeCursor');
const textArray = [
  'Web Developer',
  'JavaScript Developer.',
  'Wordpress Developer.',
  'React Developer.',
  'HTML Developer.',
  'CSS Developer.',
  'PHP Developer.',
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!AutoTyping.classList.contains('typing'))
      AutoTyping.classList.add('typing');
    AutoTyping.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    AutoTyping.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!AutoTyping.classList.contains('typing'))
      AutoTyping.classList.add('typing');
    AutoTyping.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    AutoTyping.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
//Interval on tecnologies icons transition
const first = document.getElementById('first');
const second = document.getElementById('second');
const images = document.querySelectorAll('[data-img]');
const imgs = Array.from(images);
setInterval(() => {
  first.classList.toggle('hidden');
  second.classList.toggle('hidden');
  imgs.forEach((pic) => pic.classList.toggle('hidden'));
}, 5000);
