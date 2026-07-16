const screen = document.getElementById("screen");
const history = document.getElementById("history");
const buttons = document.querySelectorAll(".btn");
const themeBtn = document.getElementById("theme-btn");

let expression = "";

// --------------------
// Calculator Buttons
// --------------------
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        switch(value){

            case "AC":
                expression = "";
                screen.value = "";
                history.textContent = "";
                break;

            case "DEL":
                expression = expression.slice(0,-1);
                screen.value = expression;
                break;

            case "=":
                calculate();
                break;

            default:
                expression += value;
                screen.value = expression;

        }

    });

});

// --------------------
// Calculate
// --------------------

function calculate(){

    if(expression==="") return;

    try{

        history.textContent = expression + " =";

        let result = Function('"use strict";return (' + expression + ')')();

        if(!isFinite(result)){
            screen.value="Error";
            expression="";
            return;
        }

        expression=result.toString();
        screen.value=expression;

    }

    catch{

        screen.value="Error";
        expression="";

    }

}

// --------------------
// Keyboard Support
// --------------------

document.addEventListener("keydown",(e)=>{

    const key=e.key;

    if(
        (key>="0" && key<="9") ||
        ["+","-","*","/",".","%"].includes(key)
    ){

        expression+=key;
        screen.value=expression;

    }

    if(key==="Enter"){

        e.preventDefault();
        calculate();

    }

    if(key==="Backspace"){

        expression=expression.slice(0,-1);
        screen.value=expression;

    }

    if(key==="Escape"){

        expression="";
        screen.value="";
        history.textContent="";

    }

});

// --------------------
// Dark / Light Theme
// --------------------

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="🌞";
        localStorage.setItem("theme","light");

    }else{

        themeBtn.innerHTML="🌙";
        localStorage.setItem("theme","dark");

    }

});

// --------------------
// Load Theme
// --------------------

window.onload=()=>{

    const savedTheme=localStorage.getItem("theme");

    if(savedTheme==="light"){

        document.body.classList.add("light");
        themeBtn.innerHTML="🌞";

    }

};