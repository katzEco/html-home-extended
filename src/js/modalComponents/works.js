const worksData = document.querySelector('#WorksModal')

// Data
// Past through works
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

// Joined Events
const events = [
  {
    id: 0,
    name: "TESA Top Gun Rally #16",
    desp: "A Competitive event @ Chitralada Technology Institute",
    date: "Sep. 5-10, 2022",
    img: "https://ksrc.suphakit.net/1662866532553/000001.jpg"
  }
]

// Certs
const certs = [
  {
    id: 0,
    name: "TESA Top Gun Rally #16",
    desp: "Participated in TESA Top Gun Rally #16",
    date: "Sep. 5-10, 2022",
    img: "https://media.discordapp.net/attachments/967025462490591332/1107917398524297236/TESA-CERT.jpg"
  }
]

// Foreaching
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