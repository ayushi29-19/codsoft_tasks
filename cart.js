// =========================
// CART STORAGE
// =========================


let cart = JSON.parse(localStorage.getItem("cart")) || [];




// =========================
// ADD TO CART
// =========================


function addToCart(id){


let product = products.find(item => item.id === id);



let existing =
cart.find(item => item.id === id);



if(existing){


existing.quantity++;


}

else{


cart.push({

id:product.id,

name:product.name,

price:product.price,

image:product.image,

quantity:1

});


}



saveCart();


alert("Product added to cart 🛒");


}





// =========================
// SAVE CART
// =========================


function saveCart(){


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


updateCartCount();


displayCart();


}





// =========================
// UPDATE CART COUNT
// =========================


function updateCartCount(){


let count =
document.getElementById("cart-count");



if(count){


count.innerText =
cart.reduce(
(total,item)=>
total+item.quantity,
0
);


}



}





// =========================
// DISPLAY CART
// =========================


function displayCart(){


let container =
document.getElementById("cart-items");



if(!container)
return;



container.innerHTML="";



let total=0;

let items=0;



cart.forEach(item=>{


total += item.price * item.quantity;

items += item.quantity;



container.innerHTML += `


<div class="cart-item">


<img src="${item.image}"
width="100">


<h3>
${item.name}
</h3>


<p>
Price: ₹${item.price}
</p>



<div>


<button onclick="decreaseQty(${item.id})">
➖
</button>



<span>
${item.quantity}
</span>



<button onclick="increaseQty(${item.id})">
➕
</button>



</div>



<button 
class="btn"
onclick="removeItem(${item.id})">

❌ Remove

</button>



</div>


`;



});





let totalPrice =
document.getElementById("total-price");


let totalItems =
document.getElementById("total-items");



if(totalPrice)
totalPrice.innerText=total;



if(totalItems)
totalItems.innerText=items;



}




// =========================
// INCREASE QUANTITY
// =========================


function increaseQty(id){


let item =
cart.find(product=>product.id===id);



item.quantity++;


saveCart();


}




// =========================
// DECREASE QUANTITY
// =========================


function decreaseQty(id){


let item =
cart.find(product=>product.id===id);



if(item.quantity>1){

item.quantity--;

}

else{

removeItem(id);

return;

}



saveCart();


}





// =========================
// REMOVE ITEM
// =========================


function removeItem(id){


cart =
cart.filter(
item=>item.id!==id
);


saveCart();


}




// =========================
// INITIAL LOAD
// =========================


updateCartCount();

displayCart();