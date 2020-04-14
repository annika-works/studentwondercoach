var bodyTag = document.querySelector('body')
var hamburger = document.querySelector(".hamburger");
var mobilemenu = document.querySelector(".mobile-wrapper");
var mobilecontent = document.querySelector(".mobile-container");
var navlinks = document.querySelectorAll('nav.mobile a');
var logoTag = document.querySelector('div.logo-container');


window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

const runScripts = () => {
    const headers = document.querySelectorAll('h1, .intro, .vfz')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.1) {
            entry.target.classList.add('appear')
          }
        })
      },
      {
        threshold: [0, 0.1, 1]
      }
    )
  
    headers.forEach(header => {
      observer.observe(header)
    })
  }
  
  runScripts()


// mobile menu

hamburger.addEventListener("click", () => {
  mobilemenu.classList.toggle("slide-in");

  if(mobilemenu.classList.contains('slide-in')) {
    hamburger.classList.add("is-active");
    mobilecontent.classList.add("appear");
    bodyTag.style.overflow = 'hidden';

    if(window.pageYOffset > 0) {

      var delay = setTimeout(() => {
        logoTag.classList.add('logo-container-mobile')
        document.querySelector('div.logo-container img').classList.add("appear");
      }, 500)
    };

  } else {
    hamburger.classList.remove('is-active');
    mobilecontent.classList.remove("appear");
    bodyTag.style.overflow = 'auto';
    logoTag.classList.remove('logo-container-mobile')
    document.querySelector('div.logo-container img').classList.remove("appear");
  }

});

navlinks.forEach( link => {
  link.addEventListener("click", () => {
    mobilemenu.classList.remove("slide-in")
    hamburger.classList.remove('is-active')
    mobilecontent.classList.remove("appear");
    bodyTag.style.overflow = 'auto';
    logoTag.classList.remove('logo-container-mobile')
    document.querySelector('div.logo-container img').classList.remove("appear");
  })
});

