const closeButton = document.querySelector('.close')
const modalBase = document.querySelector('#modalContainer')
const elementLog = document.querySelectorAll('#modalContainer > div')

async function modalOff() {
  modalBase.classList.add('modalOff')

  if (elementLog.classList != undefined) {
    elementLog.classList.remove('childOn')
  }
}

// Status Modal
const statusModal = document.querySelector('#statusModal')

function statusOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    statusModal.classList.add('childOn')
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

// Works Modal
const workModal = document.querySelector("#WorksModal")

function worksOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    workModal.classList.add('childOn')
  }
}

// Commission Modal
const commissionModal = document.querySelector('#CommissionModal')

function commissionOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    commissionModal.classList.add('childOn')
  }
}

const musicCommissionModal = document.querySelector('#MusicCommission')