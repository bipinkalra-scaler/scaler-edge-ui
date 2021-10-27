let trackCards = document.querySelectorAll(".track-card")

let theme = null

trackCards.forEach((trackCard) => {
  if (trackCard.classList.contains("track-card--active")) {
    theme = trackCard.classList[trackCard.classList.length - 1]
    // console.log(theme)
  }
});

function setTrack(event) {
  // console.log(event.target)
  let target = event.target

  if (!target.classList.contains(".track-card--active")) {
    trackCards.forEach((trackCard) => {
      trackCard.classList.remove("track-card--active")
    })

    theme = target.classList[target.classList.length - 1]

    target.classList.add("track-card--active")

    setModuleTheme()
  }
}

function setModuleTheme() {
  moduleSections = document.querySelectorAll(".module-section")
  
  moduleSections.forEach((moduleSection) => {
    moduleTheme = moduleSection.classList[moduleSection.classList.length - 1]
  
    if(moduleTheme != theme) {
      moduleSection.classList.remove(moduleTheme)
      moduleSection.classList.add(theme)
    }
  })
}

function setCareerTrack(event) {
  let target = event.target

  if (!target.classList.contains("career-tracks-card--selected")) {
    document.querySelectorAll(".career-tracks-card").forEach((card) => {
      console.log(card)
      card.classList.remove("career-tracks-card--selected")
    })

    target.classList.add("career-tracks-card--selected")
  }
}