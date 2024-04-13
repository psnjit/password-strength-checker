let password= document.getElementById("password");
let message= document.getElementById("message");
let strength= document.getElementById("strength");

password.addEventListener('input', ()=>{
    if(password.value.length>0){
        message.style.display='block';
    }
    else{
        message.style.display='none';
        return;
    }
    let strengthLevel="weak";
    strength.style.color="red";
    password.style.borderColor="red";
    if(password.value.length>4)
        {
            strengthLevel="medium";
            strength.style.color="orange";
            password.style.borderColor="orange";
        }
    if(password.value.length>10)
        {
            strengthLevel="strong";
            strength.style.color="green";
            password.style.borderColor="green";
        }
    strength.innerText=strengthLevel;
})