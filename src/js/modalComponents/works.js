const worksData = document.querySelector('#WorksModal')

// Where i ever works
const workConstData = [
  {
    id: 0,
    company: "20Scoops CNX",
    position: "Front-End Developer (Internship)",
    range: "March 2023 - May 2023"
  },
  {
    id: 1,
    company: "Jentajuice",
    position: "Co-Founder & Producer",
    range: "April 2021 - Present"
  }
]

// Works foreaching
let workBox = ""
workConstData.reverse().forEach((work) => {
  const base = `<div class="WorkCard">
  <div class="cardBody">
    <h2>
      ${work.company}
    </h2>
    <h4>
      ${work.position}
    </h4>
    <p>
      ${work.range}
    </p>
  </div>
</div>`

  if (workBox == "") {
    workBox = base
  } else {
    workBox = workBox + base
  }
})

worksData.innerHTML = `<div class="contentContainer">
  <h1 style="text-decoration: underline;">
    Works
  </h1>
 
  <div class="cardContainer">
    ${workBox}
  </div>

  <h1 style="text-decoration: underline;">
    Joined Events
  </h1>

  <h1 style="text-decoration: underline;">
    Certificates
  </h1>
</div>`