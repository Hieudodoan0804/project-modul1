var checkLogin = localStorage.getItem("idUser");
var users = JSON.parse(localStorage.getItem("users")) || [];
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
// Hàm đăng xuất 
function signOut() {
    let confirmSignOut = confirm("Bạn có muốn đăng xuất");
    if (!confirmSignOut) {
        return;
    }
    localStorage.removeItem("idUser");
    window.location.href = "../Account/login/login.html";
}
// Hàm hiển thị giỏ hàng và tài khoản
function showUser() {
    if (checkLogin) {
        document.getElementsByClassName("btn-user")[0].style.display = "none";
        let userName = users.find((item) => {
            return item.id == checkLogin;
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

// Hàm showCart để hiển thị danh sách sản phẩm người dùng thêm vào giỏ hàng
function showCart() {
    document.querySelector("#cart-container").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {
            let pay = 0;
            const myDiv = document.createElement("div");
            myDiv.innerHTML = "";
            for (let j = 0; j < users[i].cart.length; j++) {
                // console.log(users[i].cart[j]);
                pay += +users[i].cart[j].quantity * users[i].cart[j].salePrice;
                myDiv.innerHTML +=
                    `
                <div class="cart-item">
                    <figure class="img"><img src="${users[i].cart[j].image}" alt=""></figure>
                <div class="info">
                    <div class="dec">
                        <div class="dec-item">
                            <h3>${users[i].cart[j].name}</h3>
                            <div class="select">
                                <button onclick=decrease(${users[i].cart[j].id})>-</button>
                                ${users[i].cart[j].quantity}
                                <button onclick=addProduct(${users[i].cart[j].id})>+</button>
                            </div>
                            <div class="select">
                                <p for="">Kích cỡ</p>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div class="products-btn">
                            <div>
                                <button onclick=addProduct(${users[i].cart[j].id}) class="btn btn-primary"><i class="fa-solid fa-dollar-sign"></i>Mua ngay</button>
                            </div>
                            <div>
                                <button onclick=deleteProduct(${users[i].cart[j].id}) class="btn btn-danger"><i class="fa-solid fa-trash"></i>Xoá khỏi giỏ</button>
                            </div>
                        </div>
                    </div>
                    <div class="price">
                        <p>Tổng</p>
                        <h4>${USDollar.format(users[i].cart[j].salePrice * users[i].cart[j].quantity)}</h4>
                        <p>${USDollar.format(users[i].cart[j].price)}</p>
                    </div>
                </div>
                `
            }
            document.querySelector("#cart-container").appendChild(myDiv);
            document.querySelector(".pay").innerHTML = USDollar.format(pay);
        }

    }
}
showCart();
// Hàm xoá sản phẩm
function deleteProduct(idProduct) {
    let confirmDelete = confirm("Bạn có muốn xoá sản phẩm")
    if (!confirmDelete) {
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {
            // console.log(users[i].id);
            for (let j = 0; j < users[i].cart.length; j++) {
                // console.log(users[i].cart[j]);
                if (users[i].cart[j].id == idProduct) {
                    users[i].cart.splice(users[i].cart[j], 1);
                    localStorage.setItem("users", JSON.stringify(users));
                    break;
                }

            }

            break;
        }

    }

    showCart();
    showUser();
    alert("Bạn đã xoá sản phẩm thành công ");
}

// Hàm tăng số lượng sản phẩm
function addProduct(idProduct) {
    let confirmAdd = confirm("Bạn có muốn thêm sản phẩm")
    if (!confirmAdd) {
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {
            console.log(users[i].id);
            for (let j = 0; j < users[i].cart.length; j++) {
                console.log(users[i].cart[j]);
                if (users[i].cart[j].id == idProduct) {
                    users[i].cart[j].quantity = ++users[i].cart[j].quantity;
                    localStorage.setItem("users", JSON.stringify(users));
                    showCart();
                }

            }
            break;
        }

    }

}
// Hàm giảm số lượng sản phẩm
function decrease(idProduct) {
    let confirmAdd = confirm("Bạn có muốn bớt sản phẩm")
    if (!confirmAdd) {
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idProduct) {
                    users[i].cart[j].quantity = --users[i].cart[j].quantity;
                    if (users[i].cart[j].quantity < 0) {
                        users[i].cart[j].quantity = 0;
                        return;
                    }
                    localStorage.setItem("users", JSON.stringify(users));
                    showCart();
                }
            }
        }

    }

}



