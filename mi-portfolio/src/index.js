document.querySelector(".menu-btn").addEventListener("click",()=>{

    document.querySelector(".nav-container").classList.add("move");
    document.querySelector("body").classList.remove("freeScroll");
    document.querySelector("body").classList.add("blockScroll");
});

document.querySelector(".close").addEventListener("click",()=>{

    document.querySelector(".nav-container").classList.remove("move");
    document.querySelector("body").classList.remove("blockScroll");
    document.querySelector("body").classList.add("freeScroll");
    
  
});