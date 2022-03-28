import {account} from "./account.js"
const harmburger = document.querySelectorAll('.nav-toggle')
const navLinks  = document.querySelector('.nav-links')
const signupBtn  = document.querySelector('.sign-up-drop-down')
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
const accountNumber = document.getElementById('account-number').value
let progressBarWidth = 10
coin.addEventListener("click",()=>{
    if(coin.selectedIndex > 0){
        
        progressBar.style.width = progressBarWidth = progressBarWidth + 30 + "%"
        progressBar.style.transition = "1s"
        console.log(progressBarWidth);
        
    }
    else{
        progressBar.style.width = ""
    }
})

bank.addEventListener("click",()=>{
    if(bank.selectedIndex > 0){
        progressBar.style.width = progressBarWidth = progressBarWidth + 30 + "%"
        progressBar.style.transition = "1s"
    }
    else{
        progressBar.style.width = ""
    }
})
// const accountNo = account
// if(accountNo === accountNumber){
//     progressBar.style.width = "90%"
//     progressBar.style.transition = "1s"
// }
// else{
//     progressBar.style.width = ""
// }
// console.log(accountNo);
//Eventlister
// select.forEach(item=>{
//     item.addEventListener("click",()=>{
//         if(item.selectedIndex > 0){
//             progressBar.style.width = "30%"
//             progressBar.style.transition = "1s"
//         }else if(item.selectedIndex > 1){
//             progressBar.style.width = "60%"
//             progressBar.style.transition = "1s"
//         }
//         else{
//             progressBar.style.width = ""
//         }
//         // console.log(e);
//     })

// 
