function createAccount(event){
    event.preventDefault();

    let userName = document.getElementById("userName").value;
    let age = document.getElementById("age").value;
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value.trim();


    let msg = document.getElementById("msg");

    if (userName === "" || age === "" || Email === "" || password === "" ){
        msg.innerText = "All fields are required ";
        return;
    }

    if (age < 12){
        msg.innerText = "Age must be over 12 yo";
        return;
    }

    if (!Email.includes("@")){
        msg.innerText = "Invalid E-mail";
        return;
    }

    if (password.length < 8){
        msg.innerText = "Password must contain at least 8 characters";
        return;
    }

    localStorage.setItem("userName", userName);
    localStorage.setItem("age", age);
    localStorage.setItem("Email", Email);
    localStorage.setItem("password", password);

    msg.innerText = "Account created successfully !";

    setTimeout(function () {
        window.location.href = "sign-in.html";
    }, 2000);
}  