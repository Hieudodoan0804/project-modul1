// Hàm đăng nhập
let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // Lay thong tin cua user dang nhap
  let loginUser = findUser(users,email,password)
  if (!loginUser) {

    alert("Tài khoản không tồn tại");
  } else {
    alert("Đăng nhập thành công!");
    localStorage.setItem("idUser", loginUser.id);
    handleUserRoleRedirect(loginUser.role)
  }
})
// Hàm tìm user bằng email và password
function findUser(users, email, password) {
  return users.find(user => {
    return user.email === email && user.password === password;

  })
}
// Ham chuyen trang dua tren role cua user
function handleUserRoleRedirect(userRole) {
  switch (userRole) {
    case "admin":
      window.location.href = "../../Admin/admin.html";
      break;
    case "user":
      window.location.href = "../../Home/home.html";
      break;
    default:
      break;
  }
}


