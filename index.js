

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "ADMIN" && password == "password") {
        alert("Login successful!");
        window.location.href = "ATTENDANCE.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}


