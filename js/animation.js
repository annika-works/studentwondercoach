const runScripts = () => {
    const headers = document.querySelectorAll('h1, .intro, .vfz')

  

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.1) {
            entry.target.classList.add('appear')
          } else {
            entry.target.classList.remove('appear')
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






// document.addEventListener("mousemove", event => {

//     const x = event.pageX
//     const y = event.pageY

//     const target = document.querySelector(".test")
//     const targetCoords = target.getBoundingClientRect()

//     const targetX = targetCoords.left + (target.offsetWidth / 2)
//     const targetY = targetCoords.top + (target.offsetHeight / 2)

//     const angleX = (targetY - y) / 90
//     const angleY = (targetX - x) / -90

//     target.style.transform = "rotateX("+ angleX + "deg) rotateY("+ angleY + "deg)"

// });