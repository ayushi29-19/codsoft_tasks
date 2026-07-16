// =========================
// CHECKOUT TOTAL
// =========================


let cartData =
JSON.parse(localStorage.getItem("cart")) || [];



function showCheckoutTotal(){


let total = 0;



cartData.forEach(item=>{


total += item.price * item.quantity;


});



let checkoutTotal =
document.getElementById("checkout-total");



if(checkoutTotal){

checkoutTotal.innerText = total;

}



}



showCheckoutTotal();






// =========================
// PLACE ORDER
// =========================


const checkoutForm =
document.getElementById("checkout-form");



if(checkoutForm){



checkoutForm.addEventListener(
"submit",
function(event){


event.preventDefault();




let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



let phone =
document.getElementById("phone").value;



let address =
document.getElementById("address").value;





if(
name &&
email &&
phone &&
address
){



alert(
"Order placed successfully 🎉"
);



// Remove cart after order


localStorage.removeItem("cart");



// Redirect


window.location.href =
"success.html";



}

else{


alert(
"Please fill all details"
);


}



});


}