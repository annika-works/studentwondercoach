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

