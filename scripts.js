theme = localStorage.getItem('theme') || 'light-theme';

function toogleTheme() {
  themeToogleIcon = document.querySelector('.themeToogle span')
  
  if (theme === 'light-theme') {
    themeToogleIcon.innerText = 'dark_mode'
    theme = 'dark-theme'
  } else {
    themeToogleIcon.innerText = 'light_mode'
    theme = 'light-theme'
  }

  document.body.id = theme
  localStorage.setItem('theme', theme)
}