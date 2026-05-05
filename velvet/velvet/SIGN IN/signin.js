function signIn (event){
    event.preventDefault();

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    let msg = document.getElementById("msg");

    let savedUserName = localStorage.getItem("userName");
    let savedpassword = localStorage.getItem("password");

    if (userName === "" || password === ""){
        msg.innerText = "All fields are required";
        return;
    }

    if (userName === savedUserName && password === savedpassword){
        msg.innerText = "Signed in successfully !";

        setTimeout(function () {
        window.location.href = "../home/index.html";
    }, 2000);
    
    }else{
        msg.innerText = "Wrong user name or password";
    }

    
}