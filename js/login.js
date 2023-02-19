document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFild = document.getElementById('inpt-email');
    const email = emailFild.value;

    const passwordFild = document.getElementById('inpt-password');
    const password = passwordFild.value
    if( email === 'mohibulsh@gmail.com' &&  password==='mohibul'){
       window.location.href ='bank.html';
    } else{
        alert('not valid account')
    }
});