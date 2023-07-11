const worksData = document.querySelector('#WorksModal')

// Skill data
const skilling = {
  programming: [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind.css',
    'PHP',
    'Javascript',
    'Typescript',
    'React.js',
    'Vue.js',
    'Nuxt.js',
    'Express.js',
    'Hapi.js',
    'Hexo'
  ],
  musicComposing: [
    'Producing',
    'Vocaling',
    'Mastering',
    'Composing',
    'Arranging'
  ]
}

// Programming Skill foreaching
let programBox = ''
skilling.programming.forEach((programming) => {
  const based = `<p>
  ${programming}
</p>`

  if (programBox == '') {
    programBox = based
  } else {
    programBox = programBox + based
  }
})

// Music composing Skill foreaching
let musicBox = ''
skilling.musicComposing.forEach((music) => {
  const based = `<p>
  ${music}
</p>`

  if (musicBox == '') {
    musicBox = based
  } else {
    musicBox = musicBox + based
  }
})

worksData.innerHTML = `<div class="contentContainer">
  <h1 style="text-decoration: underline;">
    Works
  </h1>
  <div class="detailed">
    <h3 style="text-decoration: underline;">
      Programming
    </h3>

    <div class="buttonBox">
      ${programBox}
    </div>

    <h3 style="text-decoration: underline;">
      Music Composing
    </h3>

    <div class="buttonBox">
      ${musicBox}
    </div>
  </div> 

  <h1 style="text-decoration: underline;">
    Joined Events
  </h1>

  <h1 style="text-decoration: underline;">
    Certificates
  </h1>
</div>`