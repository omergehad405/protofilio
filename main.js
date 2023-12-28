// start skils progress 
let skils = document.querySelector("#skils");
let spans = document.querySelectorAll(".skils .progress span")

window.onscroll = function() {
    if(window.scrollY >= skils.offsetTop) {
        spans.forEach((span) =>{
            span.style.width = span.dataset.width;
        });
    }
};

//menu on phone
let bars = document.querySelector(".bars");
let navBar = document.querySelector("ul");

bars.addEventListener("click" , function() {
    navBar.classList.toggle("active");

    if(navBar.classList.contains("active")){
        navBar.style.cssText = "left:0;"
        bars.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }else{
        navBar.style.cssText = "left:-60rem;"
        bars.innerHTML = '<i class="fa-solid fa-bars bars"></i>'
    }
});


// dark mode 
let display = document.querySelector(".display");
let mode =  document.querySelector('.mode');
let modeIcon = document.querySelector(".mode i")

if (localStorage.getItem("mode") === "dark"){
    document.body.classList.toggle("dark");
}

display.addEventListener("click" , ()=>{
    mode.classList.toggle("dark");

    if(mode.classList.contains("dark")){
        modeIcon.style.left = "15px";
        modeIcon.style.transform = "rotate(360deg)";
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        document.body.classList.add("dark");
        localStorage.setItem("mode", "dark");
    }
    else{
        modeIcon.style.left = "-30px";
        modeIcon.style.transform = "rotate(180deg)";
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
        document.body.classList.remove("dark");
        localStorage.setItem("mode", "light");
    }
})
