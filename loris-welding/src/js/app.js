window.addEventListener('scroll', function() {
  let val = 1 + window.scrollY / -600;
  document.querySelector('.header').style.opacity = val;
})