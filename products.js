// =========================
// PRODUCT DATA
// =========================


const products = [

{
id:1,
name:"Wireless Headphones",
category:"electronics",
price:2499,
rating:5,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},


{
id:2,
name:"Smart Watch",
category:"electronics",
price:3999,
rating:4,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},


{
id:3,
name:"Premium Sneakers",
category:"fashion",
price:2999,
rating:5,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},


{
id:4,
name:"Classic Jacket",
category:"fashion",
price:3499,
rating:4,
image:"https://images.unsplash.com/photo-1551028719-00167b16eac5"
},


{
id:5,
name:"Luxury Perfume",
category:"beauty",
price:1999,
rating:5,
image:"https://images.unsplash.com/photo-1541643600914-78b084683601"
},


{
id:6,
name:"Skin Care Kit",
category:"beauty",
price:1599,
rating:4,
image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883"
},


{
id:7,
name:"Designer Bag",
category:"accessories",
price:2499,
rating:5,
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},


{
id:8,
name:"Sunglasses",
category:"accessories",
price:1299,
rating:4,
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"
},


{
id:9,
name:"Gaming Keyboard",
category:"electronics",
price:2999,
rating:5,
image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3"
},


{
id:10,
name:"Laptop Backpack",
category:"accessories",
price:1799,
rating:4,
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},


{
id:11,
name:"Cotton T-Shirt",
category:"fashion",
price:899,
rating:4,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},


{
id:12,
name:"Bluetooth Speaker",
category:"electronics",
price:2199,
rating:5,
image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"

}

];




// =========================
// DISPLAY PRODUCTS
// =========================


const productContainer =
document.getElementById("product-container");



function displayProducts(productList){


productContainer.innerHTML="";



productList.forEach(product=>{


let stars="";

for(let i=0;i<product.rating;i++){

stars+="⭐";

}



productContainer.innerHTML += `


<div class="product-card">


<img src="${product.image}" alt="${product.name}">


<h3>
${product.name}
</h3>


<p class="rating">
${stars}
</p>


<h4>
₹${product.price}
</h4>



<button class="wishlist">
❤️
</button>



<button 
class="btn"
onclick="addToCart(${product.id})">

🛒 Add To Cart

</button>


</div>


`;


});


}



displayProducts(products);





// =========================
// SEARCH FUNCTION
// =========================


const searchBox =
document.getElementById("search");



searchBox.addEventListener(
"input",
()=>{


let value =
searchBox.value.toLowerCase();



let filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);



displayProducts(filtered);



});





// =========================
// CATEGORY FILTER
// =========================



const category =
document.getElementById("category");



category.addEventListener(
"change",
()=>{


let selected =
category.value;



if(selected==="all"){

displayProducts(products);

}

else{


let filtered =
products.filter(product=>

product.category===selected

);



displayProducts(filtered);


}


});