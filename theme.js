// =========================
// THEME TOGGLE
// =========================


const themeButton =
document.getElementById("theme-toggle");




// Load saved theme


let savedTheme =
localStorage.getItem("theme");



if(savedTheme === "light"){

document.body.classList.add("light-mode");


if(themeButton){

themeButton.innerHTML="☀️";

}

}





// Toggle theme


if(themeButton){



themeButton.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"light-mode"
);



let isLight =
document.body.classList.contains(
"light-mode"
);



if(isLight){


localStorage.setItem(
"theme",
"light"
);



themeButton.innerHTML="☀️";


}

else{


localStorage.setItem(
"theme",
"dark"
);



themeButton.innerHTML="🌙";


}



});


}