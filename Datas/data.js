// let users = [
//     {
//         userId: 1,
//         email: "user@gmail.com",
//         password: "12345",
//         phone: "0123787323",
//         address: "Ha Noi, Viet Nam",
//         fullname: "Nguyen Van A",
//         role: "USER",
//         isDeleteFlag: false,
//         cart: {
//             cartId: 1,
//             products: [
//                 {
//                     productId: 1,
//                     productName: "Nike Shoe No.1",
//                     size:29,
//                     price: 500.11,
//                     quantity: 1,
//                     favorite: 4,
//                     status: "best seller",
//                     manufacturer: "Nike",
//                     categoryId: 1,
//                 },
                
//             ]
//         },
//         boughtProducts: [
//             {
//             productId: 2,
//             productName: "Convert Shoe No.1",
//             size:27,
//             price: 400.15,
//             quantity: 2,
//             favorite: 5,
//             status: "",
//             manufacturer: "Convert",
//             categoryId: 2,
//         },
//         {
//             productId: 3,
//             productName: "Convert Shoe No.1",
//             size:28,
//             price: 400.15,
//             quantity: 1,
//             favorite: 5,
//             status: "",
//             manufacturer: "Convert",
//             categoryId: 2,
//         },

        
//     ]
//     }
// ]

// DANH SÁCH SẢN PHẨM
let listProducts=[
    {
        name:"Air Jordan 1 Elevate High",
        price:299.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Elevate High.jpeg",
        id:1,
        size:[26,27,28],
        salePrice: 199.99,
        actived:true,
        
    },
    {
        name:"Air Jordan 1 Low SE",
        price:300.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Low SE.jpeg",
        id:2,
        size:[26,27,28,30],
        salePrice: 199.99,
        actived:true,

        
    },
    {
        name:"Air Jordan 1 Low SE2",
        price:150.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Low SE2.webp",
        id:3,
        size:[26,28,29],
        salePrice: 110.99,
        actived:true,

        
    },
    {
        name:"Air Jordan 1 Low",
        price:170.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Low.webp",
        id:4,
        size:[28,30],
        salePrice: 150.99,
        actived:true,

        
    },
    {
        name:"Air Jordan 1 Mid SE Craft",
        price:399.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Mid SE Craft.webp",
        id:5,
        size:[27],
        salePrice: 299.99,
        actived:true,

        
    },
    {
        name:"Air Jordan 1 Mid School",
        price:299.99,
        image:"../../ASSETS/image/product/Air Jordan 1 Mid Sneaker School.webp",
        id:6,
        size:[27,28],
        salePrice: 199.99,
        actived:true,

        
    },
    {
        name:"Air Jordan 1 Mid",
        price:499.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Mid.jpeg",
        id:7,
        size:[26,27,28,29],
        salePrice: 399.99,
        actived:true,

        
    },
    {
        name:"Air Jordan 1 Mids",
        price:199.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Mids.jpeg",
        id:8,
        size:[26,28],
        salePrice: 99.99,
        actived:true,
        
    },
    {
        name:"Air Jordan 1 Mids",
        price:199.99 ,
        image:"../../ASSETS/image/product/Air Jordan 1 Mids.jpeg",
        id:9,
        size:[26,28],
        salePrice: 99.99,
        actived:true,
        
    },


]
localStorage.setItem("products",JSON.stringify(listProducts));