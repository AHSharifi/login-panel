//boxs
const register = document.getElementById("register")
const right_box = document.getElementById('right-box')
const left_box = document.getElementById('left-box')
//buttons
const regBtn = document.getElementById("signup")
const logBtn = document.getElementById("signin")
const signup2 = document.getElementById('signup2')
//form
const form1 = document.getElementById('form1')
const title = document.getElementById('title')
const name = document.getElementById('name')
const user_name =document.getElementById('user-name')
const email = document.getElementById('email')
const password =document.getElementById('password')

//random image
const backgrounds = ["1", "2", "3"]
const randomBG = Math.floor(Math.random() * backgrounds.length)

//set random img for bg
register.style.backgroundImage = `url(asset/img/${backgrounds[randomBG]}.jpg)`
right_box.style.backgroundImage = `url(asset/img/${backgrounds[randomBG]}.jpg)`

switch (randomBG) {
    case 0:
        regBtn.style.backgroundColor = "#6aa577"
        regBtn.addEventListener("mouseover", () => {
            regBtn.style.backgroundColor = "#4d7a57"
            regBtn.style.color = "#fff"
            regBtn.style.transition = "all .2s ease"
        })
        regBtn.addEventListener("mouseleave", () => {
            regBtn.style.backgroundColor = "#6aa577"
            regBtn.style.color = "#000"
            regBtn.style.transition = "all .2s ease"
        })

        signup2.style.backgroundColor = "#6aa577"
        signup2.addEventListener("mouseover", () => {
            signup2.style.backgroundColor = "#4d7a57"
            signup2.style.color = "#fff"
            signup2.style.transition = "all .2s ease"
        })
        signup2.addEventListener("mouseleave", () => {
            signup2.style.backgroundColor = "#6aa577"
            signup2.style.color = "#000"
            signup2.style.transition = "all .2s ease"
        })


        logBtn.style.backgroundColor = "#6aa577"
        logBtn.addEventListener("mouseover", () => {
            logBtn.style.backgroundColor = "#4d7a57"
            logBtn.style.color = "#fff"
            logBtn.style.transition = "all .2s ease"
        })
        logBtn.addEventListener("mouseleave", () => {
            logBtn.style.backgroundColor = "#6aa577"
            logBtn.style.color = "#000"
            logBtn.style.transition = "all .2s ease"
        })
        break;
    case 1:
        regBtn.style.backgroundColor = "#fc7404"
        regBtn.addEventListener("mouseover", () => {
            regBtn.style.backgroundColor = "#bd5500"
            regBtn.style.color = "#fff"
            regBtn.style.transition = "all .2s ease"
        })
        regBtn.addEventListener("mouseleave", () => {
            regBtn.style.backgroundColor = "#fc7404"
            regBtn.style.color = "#000"
            regBtn.style.transition = "all .2s ease"
        })

        signup2.style.backgroundColor = "#fc7404"
        signup2.addEventListener("mouseover", () => {
            signup2.style.backgroundColor = "#bd5500"
            signup2.style.color = "#fff"
            signup2.style.transition = "all .2s ease"
        })
        signup2.addEventListener("mouseleave", () => {
            signup2.style.backgroundColor = "#fc7404"
            signup2.style.color = "#000"
            signup2.style.transition = "all .2s ease"
        })


        logBtn.style.backgroundColor = "#fc7404"
        logBtn.addEventListener("mouseover", () => {
            logBtn.style.backgroundColor = "#bd5500"
            logBtn.style.color = "#fff"
            logBtn.style.transition = "all .2s ease"
        })
        logBtn.addEventListener("mouseleave", () => {
            logBtn.style.backgroundColor = "#fc7404"
            logBtn.style.color = "#000"
            logBtn.style.transition = "all .2s ease"
        })
        break;
    case 2:
        regBtn.style.backgroundColor = "#fcbf40"
        regBtn.addEventListener("mouseover", () => {
            regBtn.style.backgroundColor = "#bd8f2f"
            regBtn.style.color = "#fff"
            regBtn.style.transition = "all .2s ease"
        })
        regBtn.addEventListener("mouseleave", () => {
            regBtn.style.backgroundColor = "#fcbf40"
            regBtn.style.color = "#000"
            regBtn.style.transition = "all .2s ease"
        })

        signup2.style.backgroundColor = "#fcbf40"
        signup2.addEventListener("mouseover", () => {
            signup2.style.backgroundColor = "#bd8f2f"
            signup2.style.color = "#fff"
            signup2.style.transition = "all .2s ease"
        })
        signup2.addEventListener("mouseleave", () => {
            signup2.style.backgroundColor = "#fcbf40"
            signup2.style.color = "#000"
            signup2.style.transition = "all .2s ease"
        })


        logBtn.style.backgroundColor = "#fcbf40"
        logBtn.addEventListener("mouseover", () => {
            logBtn.style.backgroundColor = "#bd8f2f"
            logBtn.style.color = "#fff"
            logBtn.style.transition = "all .2s ease"
        })
        logBtn.addEventListener("mouseleave", () => {
            logBtn.style.backgroundColor = "#fcbf40"
            logBtn.style.color = "#000"
            logBtn.style.transition = "all .2s ease"
        })
        break;
}

logBtn.addEventListener('click', () => {
    left_box.style.transform = "translateX(500px)"
    left_box.style.borderRadius = "0 10px 10px 0"
    left_box.style.transition = "all .5s ease"
    right_box.style.transform = "translateX(-500px)"
    right_box.style.borderRadius = "10px 0 0 10px"
    right_box.style.transition = "all .5s ease"
    title.innerHTML = "SIGN IN"
    logBtn.style.display = 'none'
    signup2.style.display = ''
    regBtn.innerHTML = "SIGN IN"
    // change display of inputs
    name.style.display = 'none'
    email.style.display = 'none'
    // make value of username and password input empty
    user_name.value = ''
    password.value = ''
})

signup2.addEventListener('click', () => {
    left_box.style.transform = "translateX(0)"
    left_box.style.borderRadius = "10px 0 0 10px"
    left_box.style.transition = "all .5s ease"
    right_box.style.transform = "translateX(0)"
    right_box.style.borderRadius = "0 10px 10px 0"
    right_box.style.transition = "all .5s ease"
    title.innerHTML = "SIGN UP"
    logBtn.style.display = ''
    signup2.style.display = 'none'
    regBtn.innerHTML = "SIGN UP"
    // change display of inputs
    name.style.display = ''
    email.style.display = ''
    // make all inputs value empty
    name.value = ''
    user_name.value = ''
    email.value = ''
    password.value = ''
})
