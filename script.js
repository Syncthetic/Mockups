function toggleNav () {
  let mainDiv = document.getElementById('main')
  mainDiv.classList.toggle('max-width')

  let leftNav = document.getElementById('left-menu')
  leftNav.classList.toggle('hidden')

  let arrow = document.getElementById('hamburger-triangle')
  let arr = Array.from(arrow.classList)
  if(arr.includes('fa-angle-left')) {
    arrow.className = 'fas fa-angle-right blue-text'
  } else {
    arrow.className = 'fas fa-angle-left blue-text'
  }
}