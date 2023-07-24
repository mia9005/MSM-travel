document.getElementsByClassName('login')[0].addEventListener('click',function(e){
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;

    if(emailInput == ''){
        e.preventDefault;
        alert("Email is null");
    } else if( /\S+@\S+\.\S+/.test(emailInput) == false){
        e.preventDefault;
        alert("It's not an email type");
    } else if(passwordInput ==''){
        e.preventDefault;
        alert("Password is null");
    } else if(passwordInput.length < 12){
        e.preventDefault;
        alert("Include at least 12 letters");
    } else if(/[A-Z]/.test(passwordInput) == false){
        e.preventDefault;
        alert("Include at least 1 uppercase");
    } else if(/[0-9]/.test(passwordInput) == false){
        e.preventDefault;
        alert("Include at least 1 number");
    } else {
        document.getElementsByClassName('form')[0].innerHTML='<p style="background-color: darkkhaki; font-size:30px;">😊Success!</p>';
    }
});