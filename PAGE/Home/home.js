// Hàm hiển thị giỏ hàng và tài khoản
function showUser() {
    let isLogin = localStorage.getItem("idUser");
    if (isLogin) {
        document.getElementsByClassName("btn-user")[0].style.display = "none";
        let user = JSON.parse(localStorage.getItem("users"));
        let userName = user.find((item) => {
            return item.id == isLogin;
        })
        document.getElementById("user").innerHTML = `${userName.email}`;
        document.getElementById("cart").style.display = "block";
        document.getElementById("btn-signout").style.display = "block";
        document.getElementsByClassName("cart-total")[0].innerHTML = userName.cart.length;

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

let products = JSON.parse(localStorage.getItem("products")) || [];
let itemPage = 4
let totalPage = Math.ceil(products.length / itemPage)
let currentPage = 1;
let start;
let end;
// Hàm  tính start và end dựa vào currentPage
function startEnd() {
    start = (currentPage - 1) * itemPage;
    end = start + itemPage;
}
startEnd();
// Hàm hiển thị showProducts
function showProducts() {
    let text = "";
    for (let i = 0; i < products.length; i++) {
        // console.log("222222", products[i].image);
        if (i >= start && i < end) {
            text +=
                `
        <div class="card">
           <div class="image">
           <img src="${products[i].image}">
           </div>
           <div class="products_text">
               <h3>${products[i].name}</h3>
               <p>$${products[i].price}</p>
               <div class="products_star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
               </div>
            <div class="products-btn">
                <button onclick =addToCart(${products[i].id}) class="btn btn-warning"><i class="fa-solid fa-cart-shopping"></i>Thêm</button>
                <button class="btn btn-primary"><i class="fa-solid fa-dollar-sign"></i>Mua ngay</button>    
            </div>
            </div>
        </div>
        `

        }
    }
    document.getElementsByClassName("box")[0].innerHTML = text;

}
showProducts();




// Hàm hiển thị số trang

function listPage() {
    text = "";
    for (let i = 0; i < totalPage; i++) {
        text +=
            `
            <li class="link" onclick=choosePage(${i})>${i + 1}</li>

        `
    }
    // console.log("222222222222", text);

    document.getElementsByClassName("list-page")[0].innerHTML =
        `
        <li><i onclick=prePage() class="fa-solid fa-angle-left pre"></i></li>
        ${text}
        <li><i onclick=nextPage() class="fa-solid fa-angle-right next"></i></li>
    `
    // trang đầu tiên có màu 
    document.querySelector(".link").classList.add("active");
}
listPage();

//  Hàm click chọn trang
function choosePage(nowPage) {
    console.log("111111", nowPage);
    // chọn trang nào sẽ hiện màu 
    let pageItem = document.getElementsByClassName("link");
    for (let i = 0; i < pageItem.length; i++) {
        if (i == nowPage) {
            pageItem[i].classList.add("active");
        } else {
            pageItem[i].classList.remove("active");

        }
    }
    currentPage = nowPage + 1
    startEnd();
    showProducts();
}

// Hàm đi mua hàng 
function addToCart(idProduct) {
    // console.log("dddddd",idProduct);
    let checkLogin = localStorage.getItem("idUser");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (!checkLogin) {
        alert("Bạn chưa đăng nhập tài khoản")
        return;
    }
    // lấy giỏ hàng của user
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {
            // lấy sản phẩm của user
            if (users[i].status == 0) {
                alert("Tài khoản của bạn đã bị khoá");
                return;
            }
            for (let j = 0; j < products.length; j++) {
                if (products[j].id == idProduct) {
                    // lấy được sản phẩm
                    // console.log("ssssss",products[j]);
                    let resuld = users[i].cart.findIndex((item) => {
                        return item.id == products[j].id;
                    })
                    if (resuld != -1) {
                        // sản phẩm đã có trong giỏ hàng và chỉ tăng số lượng
                        users[i].cart[resuld].quantity = ++users[i].cart[resuld].quantity;
                        localStorage.setItem("users", JSON.stringify(users))
                        showUser();

                    } else {
                        // thêm sản phẩm vào 
                        users[i].cart.push({ ...products[j], quantity: 1 });
                        localStorage.setItem("users", JSON.stringify(users));
                        alert("Sản phẩm đã được thêm vào giỏ")
                        showUser();
                    }
                    break;
                }

            }
        }

    }
}


// Hàm search sản phẩm
function searchProduct() {
    let searchValue = document.getElementById("input").value;
    let resuld = products.filter((item) => {
        return item.name.indexOf(searchValue) != -1;
    })
    console.log(resuld);
    showProducts(resuld);
}




