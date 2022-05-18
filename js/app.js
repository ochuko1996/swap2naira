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
const navCont = document.getElementById('nav-main-container')
window.onscroll = function(){scrollEffect()}
function scrollEffect() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navCont.classList.add('nav-shadow')
    }else{
        navCont.classList.remove('nav-shadow') 
    }
}
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://merchant.birrionapi.com/api/get-banks", requestOptions)
//     .then(response => response.text())
//     .then(result => JSON.parse(result))
//     .then(bankinfo => bankinfo.data)
//     .then(banklist => {
//             coin.addEventListener("change", progressBarChange)
//             bank.addEventListener("change", progressBarChange)
//             console.log(banklist.length);
//             function progressBarChange (e) {
//                 if(e.target.selectedIndex >= 0){
//                     updateProgressBar(e)
//                     // console.log('hi');
                    
//                     progressBar.style.width = progressBarWidth + "%"
//                     progressBar.style.transition = "1s"
//                 }
//                 else{
//                     progressBar.style.width = progressBarWidth
//                 }
//             }

//             function normalizeProgressBar (e, selectInput) {
//                 if (e.target.value === selectInput) {
//                     formSelectedState.coin = false
//                     progressBarWidth -= 30
//                 }
//             }

//             function updateProgressBar (e) {
//                 let element = e.target.id
//                 if (element === "coin")  {
//                     if (!formSelectedState.coin) {
//                         formSelectedState.coin = true
//                         progressBarWidth += 30
//                     }
                    
//                     normalizeProgressBar(e, "select-coin")
//                 } else if (element === "bank")  {
//                     if (!formSelectedState.bank) {
//                         formSelectedState.bank = true
//                         progressBarWidth += 30
//                     }
                    
//                     normalizeProgressBar(e, "select-bank")
//                 }
//             }
            
//     })


const progressBar = document.querySelector('.progress-bar-inner')
const coin = document.getElementById('coinType')
const bank = document.getElementById('bankName')
let accountNumber = document.getElementById('accnum')
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
                    console.log("i'm more  than 0");
                    progressBar.style.width = progressBarWidth + "%"
                    progressBar.style.transition = "1s"
                }
                else{
                    progressBar.style.width = progressBarWidth
                    console.log('mtcheww');
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
            
    