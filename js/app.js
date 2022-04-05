import {account} from "./account.js"
const harmburger = document.querySelectorAll('.nav-toggle')
const navLinks  = document.querySelector('.nav-links')
const signupBtn  = document.querySelector('.sign-up-drop-down')
let progressBarWidth = 10

harmburger.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('hamburger')){
            navLinks.classList.toggle('show-links')
        }
        if(btn.classList.contains('sign-up')){
            signupBtn.classList.toggle('show-signup')
        }
    })
})


const progressBar = document.querySelector('.progress-bar-inner')
const select = document.querySelectorAll('.select')
const coin = document.getElementById('coin')
const bank = document.getElementById('bank')
let accountNumber = document.getElementById('accountNnumber')
let formSelectedState = {
    coin: false,
    accountNumber: false,
    bank: false
}


coin.addEventListener("change", progressBarChange)
bank.addEventListener("change", progressBarChange)

function progressBarChange (e) {
    if(e.target.selectedIndex >= 0){
        updateProgressBar(e)
        
        progressBar.style.width = progressBarWidth + "%"
        progressBar.style.transition = "1s"
    }
    else{
        progressBar.style.width = progressBarWidth
    }
}

function normalizeProgressBar (e, selectInput) {
    if (e.target.value === selectInput) {
        formSelectedState.coin = false
        progressBarWidth -= 30
    }
}

function updateProgressBar (e) {
    let element = e.target.id
    if (element === "coin")  {
        if (!formSelectedState.coin) {
            formSelectedState.coin = true
            progressBarWidth += 30
        }
        
        normalizeProgressBar(e, "select-coin")
    } else if (element === "bank")  {
        if (!formSelectedState.bank) {
            formSelectedState.bank = true
            progressBarWidth += 30
        }
        
        normalizeProgressBar(e, "select-bank")
    }
}

let input;
// accountNumber.addEventListener('input', e =>{
//      input = e.target.value
//      console.log(input);
// })
// function search(nameKey, myArray){
//     for (let i = 0; i < account.length; i++) {
//         let accountDigit = account[i].accountNo;
//         if(myArray[i].accountNo === nameKey){
//             return myArray[i]
//         }
//     }
//     // let result = search(input,account)
//     // console.log(search(nameKey, myArray));
// }
// search(input,account)