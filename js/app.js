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
// select and progress bar js
const progressBar = document.querySelector('.progress-bar-inner')
const select = document.querySelectorAll('.select')
const coin = document.getElementById('coin')
const bank = document.getElementById('bank')
let accountNumber = document.getElementById('accountNnumber').value

coin.addEventListener("click",()=>{
    if(coin.selectedIndex > 0){
        progressBarWidth += 30
        progressBar.style.width = progressBarWidth + "%"
        progressBar.style.transition = "1s"
        console.log(progressBarWidth);
    }
    else{
        progressBar.style.width = progressBarWidth
    }
})

bank.addEventListener("click",()=>{
    if(bank.selectedIndex > 0){
        progressBarWidth += 30
        progressBar.style.width = progressBarWidth + "%"
        progressBar.style.transition = "1s"
    }
    else{
        progressBar.style.width = progressBarWidth
    }
})
const accountNo = account
function accountFunc(){
    if(accountNo.accountNo === accountNumber){
        // progressBarWidth += 30
        // progressBar.style.width = progressBarWidth + "%"
        // progressBar.style.transition = "1s"
        console.log('it is correct');
    }
    else{
        progressBar.style.width = progressBarWidth
        console.log('it is not correct');
    }

}

