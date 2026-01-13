let form = document.querySelector("form");
let email = document.querySelector("#email");
let pasword = document.querySelector("#password");


form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailerror").textContent=""

    document.querySelector("#passworderror").textContent=""

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isvalid = true;
    let emailans= emailRegex.test(email.value);
    let passwordans= passwordRegex.test(pasword.value);

    if(!emailans){
        document.querySelector("#emailerror").textContent="Email is Incorrect"
        isvalid=false;
    }
    if(!passwordans){
        document.querySelector("#passworderror").textContent="Password is Incorrect"
        isvalid=false;
    }

    if(isvalid){
        document.querySelector("#resulemessage").textContent="Valid"
    }
    // if (isvalid) {
    // setTimeout(() => {
    //     form.style.display = "none";
    // }, 3000);
    // }
    setTimeout(() => {
        form.style.display = "none";
    }, 1000);

})