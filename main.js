var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 800,
});
const navSlide =() =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".w3-right-align");
    const navLinks = document.querySelectorAll(".w3-bar ul li");
   
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("w3-bar-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        navLinks.forEach((item) => {
            item.addEventListener('click',()=> {
                if (item.style.animation){
                    nav.classList.toggle("w3-bar-active");
                    burger.classList.toggle("toggle");
                    navLinks.forEach((link,index) => {
                        if (link.style.animation) {
                            link.style.animation = "";
                        }
                        else {
                            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                        }
                    })
                }
                
            });
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}
navSlide();

