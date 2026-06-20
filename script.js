// PRELOADER

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }
});

// DRAWER MENU

const drawerHamburger =
document.getElementById("hamburger");

const mobileDrawer =
document.getElementById("mobileDrawer");

const drawerOverlay =
document.getElementById("drawerOverlay");

const closeDrawerBtn =
document.getElementById("closeDrawer");

if (
    drawerHamburger &&
    mobileDrawer &&
    drawerOverlay &&
    closeDrawerBtn
){

    drawerHamburger.addEventListener("click", () => {

        mobileDrawer.classList.add("active");
        drawerOverlay.classList.add("active");

    });

    function closeMenu(){

        mobileDrawer.classList.remove("active");
        drawerOverlay.classList.remove("active");

    }

    closeDrawerBtn.addEventListener(
        "click",
        closeMenu
    );

    drawerOverlay.addEventListener(
        "click",
        closeMenu
    );

    document
    .querySelectorAll(".drawer-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });

}

// NAVBAR HIDE ON SCROLL

const header =
document.querySelector(".header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    let current =
    window.pageYOffset;

    if(current > lastScroll &&
       current > 100){

        header.classList.add(
            "hide-nav"
        );

    }else{

        header.classList.remove(
            "hide-nav"
        );

    }

    lastScroll = current;

});

// BACK TO TOP

const backToTop =
document.getElementById(
    "backToTop"
);

window.addEventListener(
    "scroll",
    () => {

        if(!backToTop) return;

        if(window.scrollY > 400){

            backToTop.style.display =
            "block";

        }else{

            backToTop.style.display =
            "none";

        }

    }
);

if(backToTop){

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );

}

// COUNTERS

const counters =
document.querySelectorAll(
    ".counter"
);

const counterObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.target;

let count = 0;

const update = ()=>{

count += target/100;

if(count < target){

counter.innerText =
Math.ceil(count);

requestAnimationFrame(
update
);

}else{

counter.innerText =
target + "+";

}

};

update();

counterObserver.unobserve(
counter
);

}

});

},
{
threshold:0.5
}
);

counters.forEach(counter=>{
counterObserver.observe(counter);
});

// SCROLL REVEAL

const reveals =
document.querySelectorAll(
".section"
);

const revealObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"active"
);

}

});

},
{
threshold:0.15
}
);

reveals.forEach(item=>{

item.classList.add(
"reveal"
);

revealObserver.observe(
item
);

});

console.log(
"Hychem Loaded Successfully"
);