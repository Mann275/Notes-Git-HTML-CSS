let ch = document.querySelector(".a");
let h = document.querySelector("h1");

window.addEventListener("keydown",function(de){
    // h.textContent=de.key;

    if(de.key === " "){
        h.textContent="space";
    }
    else{ h.textContent=de.key;
    }

})