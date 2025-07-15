const btn = document.querySelector ('header>div>button')
const parte = document.querySelector('.parte')
const btnList = document.querySelector('header>div>button>i:first-of-type')
const btnX = document.querySelector('header>div>button>i:last-of-type')
btn .addEventListener('click',showmenu)

let flag = 0

function showmenu(){
if (flag===0) {
    parte .style.opacity = '1'
    btnList.style.display = 'none'
    btnX.style.display = 'block'
    flag=1
}else{
    parte.style.opacity = '0'
    btnList.style.display = 'block'
    btnX.style.display = 'none'
    flag=0
}

}

const alertbox = document.querySelector('.alert')
const btnn = document.querySelector('.alert>button')

btnn.addEventListener('click', hideAlert)


function hideAlert(){
    alertbox.style.transform = 'scale(0)'
}