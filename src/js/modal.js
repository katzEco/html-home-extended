const closeButton = document.querySelector('.close')
const modalBase = document.querySelector('#modalContainer')

// ElementListing
const statusModal = document.querySelector('#StatusModal')
const aboutModal = document.querySelector('#AboutModal')
const workModal = document.querySelector("#WorksModal")
const commissionModal = document.querySelector('#CommissionModal')

// Sub Modal Elements
const musicCommissionModal = document.querySelector('#MusicCommission')

// Turn off Modal
async function modalOff() {
  modalBase.classList.add('modalOff')

  statusModal.classList.add('childOff')
  aboutModal.classList.add('childOff')
  workModal.classList.add('childOff')
  commissionModal.classList.add('childOff')

  musicCommissionModal.classList.add('childOff')
}

// Status Modal
function statusOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')
    statusModal.classList.remove('childOn')
    statusModal.classList.remove('childOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    statusModal.classList.add('childOn')
  }
}

// About Modal
function aboutOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')
    aboutModal.classList.remove('childOn')
    aboutModal.classList.remove('childOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    aboutModal.classList.add('childOn')
  }
}

// Works Modal
function worksOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')
    workModal.classList.remove('childOn')
    workModal.classList.remove('childOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    workModal.classList.add('childOn')
  }
}

// Commission Modal
function commissionOn() {
  if (modalBase.classList == undefined) {
    // Add modal animation class
    modalBase.classList.add('modalOn')
  } else {
    // RM old class
    modalBase.classList.remove('modalOn')
    modalBase.classList.remove('modalOff')
    commissionModal.classList.remove('childOn')
    commissionModal.classList.remove('childOff')

    // Add Modal animation class
    modalBase.classList.add('modalOn')
    commissionModal.classList.add('childOn')
  }
}