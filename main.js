
loginEmail=document.getElementById('lname')
loginPass=document.getElementById('lemail')
loginBtn=document.getElementById('lbtn')
var users=JSON.parse(localStorage.getItem('users'));

function checkldata(){
    var flag=0;
    for (let i = 0; i < users.length; i++) {
        if(users[i].email==loginEmail.value && users[i].password==loginPass.value){
            localStorage.setItem('success',JSON.stringify(users[i]));
            flag=1;
            break;
        }
        
    }
    return flag;
}
loginBtn.addEventListener('click',function(){
    if(checkldata()){
        location.href='hello/index.html';
        clearInputs();
    }
    else{
        
        document.getElementById('l-feedback').innerHTML='incorrect email or password'
    }

})
function clearInputs(){
    loginEmail.value=''
    loginPass.value=''
}
