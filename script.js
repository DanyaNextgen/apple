let btns = document.querySelectorAll('.btn-box button')
let storage_btns = document.querySelectorAll('.storage-box button')
let mainImg = document.querySelector('.main-grid img')
let circ_btn = document.querySelectorAll('.circles div')
let color = document.querySelector('.color')
let images = [
    './desert-titanium.png',
    './natural-titanium.png',
    './white-titanium.png',
    './black-titanium.png'
]
let colors = [
    'Desert Titanium',
    'Natural Titanium',
    'White Titanium',
    'Black Titanium'
]

btns.forEach((btn) => {
    btn.onclick = () => {
        let prev = document.querySelector('.active')
        prev.classList.remove('active')
        btn.classList.add('active')
    }
})
storage_btns.forEach((btn) => {
    btn.onclick = () => {
        let prev = document.querySelector('.active-btn')
        prev.classList.remove('active-btn')
        btn.classList.add('active-btn')
    }
})
circ_btn.forEach((div, idx) => {
    div.onclick = () => {
        mainImg.setAttribute('src', images[idx])
        color.innerHTML = colors[idx]
    }
})
