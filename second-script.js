const userNameRef = document.getElementById("username");
const passRef = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", saveData);

function saveData() {
    const savedPass = passRef.value;
    localStorage.setItem("userPass", savedPass);
    const savedUser = userNameRef.value;
    localStorage.setItem("userName", savedUser);

    userNameRef.value = "";
    passRef.value = "";
}

window.addEventListener("DOMContentLoaded", loadData);

function loadData() {
    const savedUser = localStorage.getItem("userName");
    const savedPass = localStorage.getItem("userPass");

    if (savedUser) userNameRef.value = savedUser;
    if (savedPass) passRef.value = savedPass;
}