function checkForm() {
    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;

    if (email !== '' && password !== '') {   //null
        document.getElementById('submitBtn').disabled = false;
    } else {
        document.getElementById('submitBtn').disabled = true;
    }
}





function checkForm2() {
    let firstName = document.getElementById('firstName').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('password').value;
    let lastName = document.getElementById('lastName').value;
    let password2 = document.getElementById('password2').value;
    
    
          //check for null
    if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && password2 !== '' && password == password2 ) {
        document.getElementById('submitBtn2').disabled = false;
    } else {
        document.getElementById('submitBtn2').disabled = true;
    }
}





