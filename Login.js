let inpname=document.querySelector("#inpname");
let inppass=document.querySelector("#inppass");

let errname=document.querySelector("#errname");
let errpass=document.querySelector("#errpass");

let loginn=()=>{


    localStorage.setItem("Name",inpname.value);
    localStorage.setItem("Password",inppass.value);

    if(inpname.value==""){
        errname.innerHTML="*Please enter your name*";
        return false;
    }
    if(inppass.value==""){
        errpass.innerHTML="*Please enter your password*";
        return false;
    }

    
}

let logout=()=>{
    localStorage.clear();
}
