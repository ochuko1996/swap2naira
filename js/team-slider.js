const teamMembers = [
    {
        img: "",
        name: "Prince Patrick",
        desc: "Project coordinator, Backend Developer,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus optio velit quas est ad reiciendis expedita iste sunt quisquam! ",
    },
    {
        img: "",
        name: "Peace Patrick",
        desc: "Project Manager and marketer,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus optio velit quas est ad reiciendis expedita iste sunt quisquam! ",
    },
    {
        img: "https://scontent.fbni1-2.fna.fbcdn.net/v/t39.30808-1/254921091_1232253723950350_8238822893547990998_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=103&ccb=1-6&_nc_sid=7206a8&_nc_eui2=AeF7QO_6GKnjzn4RuWdPiMlyoDwHd0zBTk-gPAd3TMFOT-H3t4K320rnoUkGG4BnALyu6DkwZbARO-9szuG5ko8d&_nc_ohc=j0kVqg0NBIgAX8mcFBw&_nc_ht=scontent.fbni1-2.fna&oh=00_AT9w0HsndPdv76LDe4KgpQtyqSVRI38pFiMmR452HK4BIg&oe=6288A660",
        name: "Gbemiga Moses",
        desc: "Product Design (UI/UX designer),Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus optio velit quas est ad reiciendis expedita iste sunt quisquam! ",
    },
    {
        img: "https://scontent.fbni1-1.fna.fbcdn.net/v/t1.6435-9/133011931_4839713309435739_483146432226411203_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeEtNO3GtC0pdoZIp7RrmAD5wj_Yusd2WVnCP9i6x3ZZWVDs_BmTs-7WySvZwQftzx7pWRWL1DAd_YGQ1_cBwI0v&_nc_ohc=I89LD0Gg2H4AX8skbQH&_nc_ht=scontent.fbni1-1.fna&oh=00_AT--I56GZpNHrEKxu9NwpXyC-lybEjfz-YGQbw2LNQzB7A&oe=62A7BE79",
        name: "Ochuko S. George",
        desc: "Frontend Developer,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus optio velit quas est ad reiciendis expedita iste sunt quisquam! ",
    },
]
// display slider
const slider = document.querySelector('.first-slider')

teamMembers.map(member=>{
    // const slider = document.createElement('div')
    slider.innerHTML += `
    <div class="team-slider col-12 col-lg-4 ">
        <div class="profile-image-container">
            <div class="profile-image ">
                <img src=${member.img} alt="profile-image">
            </div>

        </div>
        <div class="profile-bio">
            <h4>
                ${member.name}
            </h4>
            <p>
                ${member.desc}
            </p>
        </div>
    </div>
    `
})
// team drag slider
let isDown = false;
let startX;
let scrollLeft;

const end = () => {
    isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
    if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
})();        
 