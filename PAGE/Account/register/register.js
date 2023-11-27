function uuid() {
    return Math.floor(Math.random() * 987654321 + new Date().getMilliseconds());
}
var users = JSON.parse(localStorage.getItem("users")) || [];

// tao acc admin

// let admin = {
//     email: "admin@gmail.com",
//     password: "admin",
//     id: uuid(),
//     cart: [],
//     status:1,
//     role:"admin",
// }
// users.push(admin);
// localStorage.setItem("users",JSON.stringify(users));

// Hàm đăng kí

function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let regex=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    let obj = {
        email: email,
        password: password,
        id: uuid(),
        cart: [],
        status:1,
        role:"user"
    }
    let find = users.filter((item) => {
        return item.email == email;
    })
    if (find.length != 0) {
        alert("Email đã được đăng kí");
        return;
    }
    if (!regex.test(email)) {
        alert("Bạn vui lòng nhập đúng định dạng email");
        return;
    }
    if (confirmPassword!=password) {
        alert("Bạn vui lòng nhập lại mật khẩu");
        return;
    }
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("confirmPassword").value="";
    alert("Đăng kí thành công");
    window.location.href = "../login/login.html";

}



