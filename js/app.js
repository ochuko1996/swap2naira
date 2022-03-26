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