signName=document.getElementById('sname')
signEmail=document.getElementById('semail')
signPassword=document.getElementById('password')
loginEmail=document.getElementById('lname')
loginPass=document.getElementById('lemail')
loginBtn=document.getElementById('lbtn')
signBtn=document.getElementById('sbtn')

var regexName=/^\w{3,20}.{0,1}\w{0,20}$/
var regexEmail=/.*@[a-z0-9.-]*/
var regexpass=/^\w{3,}$/
console.log(signName,signEmail, signPassword);
var users=[];
if(localStorage.getItem('users')!=null){
    users=JSON.parse(localStorage.getItem('users'));
}

function addUser(){
    if(validation() && checkemail()){
        var user={
            name:signName.value,
            email:signEmail.value,
            password:signPassword.value
        }
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users));
         document.getElementById('feedback').classList.replace('invalid-feedback','valid-feedback')
         document.getElementById('feedback').innerHTML=`succeed`
    }
    else if(!checkemail()){
        document.getElementById('feedback').classList.remove('valid-feedback')
        document.getElementById('feedback').classList.add('invalid-feedback')
        document.getElementById('feedback').innerHTML=`email is already exist"
        `
    }

    else{
        document.getElementById('feedback').classList.remove('valid-feedback')
        document.getElementById('feedback').classList.add('invalid-feedback')
        document.getElementById('feedback').innerHTML=`All inputs is required
        "your name contain 3 char at least and 20 at most , email must be valid,and password contain 3 char at least"
        `
      

    }
}
function clearInputs(){
    signName.value=''
    signEmail.value=''
    signPassword.value=''
}
signBtn.addEventListener('click',function(){
    
    addUser();    
    removevalid();
    if(document.getElementById('feedback').innerHTML==`succeed`)
        clearInputs();


})
signName.addEventListener('input',function(){
    if(validateName()){
        signName.classList.replace('is-invalid','is-valid')

    }
    else{
        signName.classList.add('is-invalid')
    }
})
signEmail.addEventListener('input',function(){
    if(validateEmail()){
        signEmail.classList.replace('is-invalid','is-valid')
    }
    else{
        signEmail.classList.add('is-invalid')
    }
})
signPassword.addEventListener('input',function(){
    if(validatePass()){
        signPassword.classList.replace('is-invalid','is-valid')
    }
    else{
        signPassword.classList.add('is-invalid')
    }
})
function validation(){
    return validateName()&& validateEmail()&& validatePass();
}
function validateName(){
    return regexName.test(signName.value)
}
function validateEmail(){
    return regexEmail.test(signEmail.value)
}
function validatePass(){
    return regexpass.test(signPassword.value)
}
function removevalid(){
    signName.classList.remove('is-valid')
    signEmail.classList.remove('is-valid')
    signPassword.classList.remove('is-valid')

}
function checkemail(){
    var f=1;
    for (let i = 0; i < users.length; i++) {
        if(users[i].email==signEmail.value){
        f=0;
        break;
        }
        
    }
    return f;
}