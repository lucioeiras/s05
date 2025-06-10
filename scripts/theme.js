const modalContainer = document.querySelector('div#modal-container')

function openThemeModal() {
  modalContainer.style.visibility = 'visible'
}

function selectTheme(selectedTheme) {
  theme = selectedTheme
  modalContainer.style.visibility = 'hidden'

  document.body.id = theme
  localStorage.setItem('theme', theme)
}

selectTheme(localStorage.getItem('theme') || 'light-theme');