const modal = document.querySelector('#AboutModal')

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

modal.innerHTML = `<div class="contentContainer">
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
</div>`