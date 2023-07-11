const aboutData = document.querySelector('#AboutModal')

// Aging
const age = new Date().getFullYear() - new Date('June 15, 2002').getFullYear()

//  Education Data
const eduData = [
  {
    grade: "Kindergarten - Grade 6",
    class: "",
    school: "Darasamutr Sriracha School",
    year: "2005 - 2014"
  },
  {
    grade: "Grade 7-9",
    class: "MEP",
    school: "Sriracha School",
    year: "2014 - 2018"
  },
  {
    grade: "Grade 10",
    class: "Sci-math",
    school: "Piboonbumpen Demonstration School",
    year: "2018 - 2019"
  },
  {
    grade: "Grade 11-12",
    class: "Sci-Math",
    school: "Darasamutr Sriracha School",
    year: "2019 - April 2021"
  },
  {
    grade: "Bachelor's degree",
    class: "ICT - Computer Engineering",
    school: "University of Phayao",
    year: "May 2021 - Present"
  }
]
let eduBox = ""
eduData.forEach((data) => {
  const Box = `<li style="margin: .5rem 0;">
  <p>
    [${data.grade}]
  </p>
  <p>
    ${(data.class != "") ? `${data.class} @` : ""} ${data.school} [${data.year}]
  </p>
</li>`

  if (eduBox != "") {
    eduBox = eduBox + Box
  } else {
    eduBox = Box
  }
})

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

aboutData.innerHTML = `<div class="contentContainer">
  <h1 style="text-decoration: underline;">
    About
  </h1>
  <div class="detailed">
    <h3 style="text-decoration: underline;">
      Basic Information
    </h3>
    <ul>
      <li>
        <strong>Name: </strong> Suphakit Pinyoworapot
      </li>
      <li>
        <strong>Age: </strong> ${age}
      </li>
    </ul>
    <br> 
    <h3 style="text-decoration: underline;">
      Educational profile
    </h3>
    <ul>
      ${eduBox}
    </ul>
  </div>

  <h1 style="text-decoration: underline;">
    Skills
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
</div>`