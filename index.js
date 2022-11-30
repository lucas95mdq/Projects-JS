const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="back"){
            let string= display.innerText;
            string = string.slice(0,-1);
            display.innerText =string;
        }else if(display.innerText !="" && item.id=="equal"){
            display.innerText=eval(display.innerText)
        }else if(display.innerText=="" && item.id=="="){
            display.innerText="Null";
            setTimeout(() => {
               display.innerText="" 
            }, 2000);
        }else{
            display.innerText+=item.id;
        }
    }
})

const themeTogglerBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
 
let isdark = true

themeTogglerBtn.onclick =()=>{
    calculator.classList.toggle("dark")
    themeTogglerBtn.classList.toggle("active")
    isdark=!isdark
}