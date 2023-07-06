const modal = document.querySelector('#AboutModal')

const age = new Date().getFullYear() - new Date('June 15, 2002').getFullYear()

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
  </div>
</div>`