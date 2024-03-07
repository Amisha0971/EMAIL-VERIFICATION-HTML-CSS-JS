function validateEmail() {
    var emailInput = document.getElementById("emailInput");
    var resultMessage = document.getElementById("result");
    var email = emailInput.value;
    var re = /\S+@\S+\.\S+/;
    
    if (re.test(email)) {
        resultMessage.textContent = "Email is valid";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Email is not valid";
        resultMessage.style.color = "red";
    }
}
