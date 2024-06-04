import './styles/main.scss'

const queryString = window.location.search
console.log(queryString)
const urlParams = new URLSearchParams(queryString)

const description = urlParams.get('description')
const image = urlParams.get('image')

const ilustracao = document.querySelector('.hero__ilustracao')
ilustracao.src = image

const texto = document.querySelector('.hero__order')
texto.innerHTML = description

const submitOrderButton = document.querySelector('#submit')
submitOrderButton.addEventListener('click', () => (window.location.href = '/'))
