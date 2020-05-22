const scroll = document.querySelector('.scrollTop')

window.addEventListener('scroll', () => {
	scroll.classList.toggle('active', window.scrollY > 200)
})

window.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})