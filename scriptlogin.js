
const inpUsername = document.querySelector('#txt')
const inpPassword = document.querySelector('#pass')
const form = document.querySelector('form')
const statusBar = document.querySelector('#status')
const checkBox = document.querySelector('#check')



form.addEventListener('submit', (event) => {
    if (inpUsername.value.length > 15) {
        alert('شما مجاز به وارد کردن بیش از 15 کاراکتر نیستید')
        event.preventDefault()
        inpUsername.value = ''
        inpUsername.focus()
    }

    if (inpPassword.value.length < 8) {
        alert('پسورد شما ضعیف میباشد')
        event.preventDefault()
        inpPassword.focus()
    }

    if (!checkBox.checked) {
        alert('تو باید قوانین سایت منو قبول کنی :)')
        event.preventDefault()
    }
})


inpPassword.addEventListener('input', () => {
    const inp = inpPassword.value.length

    if (inp >= 0 && inp <= 3) {
        statusBar.style.width = '1%'
        statusBar.style.backgroundColor ='red'

    } else if (inp >= 4 && inp <= 6) {
        statusBar.style.width = '15%'
         statusBar.style.backgroundColor ='orange'
    } else if (inp >= 7 && inp <= 9) {
        statusBar.style.width = '35%'
        statusBar.style.backgroundColor ='yellow'

    } else if (inp >= 10 && inp <= 12) {
        statusBar.style.width = '65%'
        statusBar.style.backgroundColor ='green'

    } else if (inp >= 13 && inp <= 15) {
        statusBar.style.width = '85%'
        
        statusBar.style.backgroundColor ='purple'

    } else {
        statusBar.style.width = '100%'
        statusBar.style.backgroundColor ='darkblue'

    }
})


