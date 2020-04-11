var bodyTag = document.querySelector('body')
var hamburger = document.querySelector(".hamburger");
var mobilemenu = document.querySelector(".mobile-wrapper");
var mobilecontent = document.querySelector(".mobile-container");
var navlinks = document.querySelectorAll('nav.mobile a');
var logoTag = document.querySelector('div.logo-container');


document.addEventListener("DOMContentLoaded", event => {
  window.scrollTo(0, 0);
});

const runScripts = () => {
    const headers = document.querySelectorAll('h1, .intro, .vfz')
    
    

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.1) {
            entry.target.classList.add('appear')
          }
            // else {
          //   entry.target.classList.remove('appear')
          // }
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
    // window.scrollTo(0, 0);

    if(window.pageYOffset > 0) {

      var delay = setTimeout(() => {
        logoTag.classList.add('logo-container-mobile')
        document.querySelector('div.logo-container img').classList.add("appear");
      }, 500)
      // logoTag.classList.add('logo-container-mobile')
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


// var navheadlinks = document.querySelectorAll('header nav a')
  
//   navheadlinks.forEach(navlink => {
//     navlink.addEventListener('click', () => {
//       if (this.classList.contains('selected')) {
//           document.querySelector('header nav a.selected').classList.remove('selected')
//           this.classList.add('selected')
//       }
//     })

//   })
  
  
  // if (navheadlinks.classList.contains('selected')) {
  //   document.querySelector('header nav a.selected').classList.remove('selected')
  //   this.classList.add('selected')
  // }
