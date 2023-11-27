
let users = JSON.parse(localStorage.getItem("users")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];
console.log(users);
// Hàm hiển thị giỏ hàng và tài khoản
function showUser() {
    let isLogin = localStorage.getItem("idUser");
    if (isLogin) {
        document.getElementsByClassName("btn-user")[0].style.display = "none";
        let userName = users.find((item) => {
            return item.id == isLogin;
        })
        document.getElementById("user").innerHTML = `${userName.email}`;
        document.getElementById("btn-signout").style.display = "block";

    } else {
        document.getElementById("user").style.display = "none";
    }

}
showUser();
// Hàm đăng xuất 
function signOut() {
    let confirmSignOut = confirm("Bạn có muốn đăng xuất");
    if (!confirmSignOut) {
        return;
    }
        localStorage.removeItem("idUser");
        window.location.href = "../Account/login/login.html";
}
function userLists() {
    let text = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].role==="user") {
            let actived = users[i].status == 1 ? "Đang hoạt động" : "Đang khoá";
            let btn = users[i].status ? "Khoá" : "Mở khoá"
            text +=
                `
            <tr>
            <td scope="row">${users[i].id}</td>
            <td>${users[i].email}</td>
            <td>${actived}</td>
            <td><button onclick="statusUser(${users[i].id})" class="btn-danger" id="btn" >${btn}</button></td>
          </tr>
    
            `
        }
       
    }
    document.getElementById("userControl").innerHTML = text;
}
userLists();

// Hàm trạng thái user
function statusUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users[i].status = users[i].status == 1 ? 0 : 1;
            localStorage.setItem("users", JSON.stringify(users));
            userLists();
            break;
        }

    }
}

// Hàm quản lý sản phẩm

function productsControl() {
    let text = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i].actived==true) {
            let onActived = products[i].actived == true ? "Đang bán" : "Hết hàng";
            text +=
                `
                        <tr>
                            <td scope="col">${products[i].id}</td>
                            <td scope="col">${products[i].name}</td>
                            <td scope="col"><img id="img" src="${products[i].image}" alt=""></td>
                            <td scope="col">${products[i].price}</td>
                            <td scope="col">${products[i].salePrice}</td>
                            <td scope="col">${products[i].size}</td>
                            <td scope="col">${onActived}</td>
                            <td scope="col"><button onclick="deleteProduct(${products[i].id})" class="btn btn-danger">Xoá</button></td>
                            <td scope="col"><button onclick="editProduct()" class="btn btn-secondary" >Sửa</button></td>
                        </tr>
     
                `
    
        }
    }
    document.getElementById("productsControl").innerHTML=text;
}
productsControl();

// Hàm xoá sản phẩm
function deleteProduct(id) {
    console.log("qqqqq",id);
    for (let i = 0; i < products.length; i++) {
        console.log(products);
        if (products[i].id==id) {
            console.log(products[i].id);
            let confirmDelete = confirm("Bạn có muốn xoá sản phẩm không");
            if (confirmDelete) {
                products[i].actived=false;
                localStorage.setItem("products",JSON.stringify(products));
                productsControl();
            }
        }
        
    }
}
