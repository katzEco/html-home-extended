const closeButton = document.querySelector('.close')
const modalBase = document.querySelector('#modalContainer')
const elementLog = document.querySelectorAll('#modalContainer > div')

async function modalOff() {
  modalBase.classList.add('modalOff')

  if (elementLog.classList != undefined) {
    elementLog.classList.remove('childOn')
  }
}

// About Modal
const aboutModal = document.querySelector('#AboutModal')

function aboutOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    aboutModal.classList.add('childOn')
  }
}