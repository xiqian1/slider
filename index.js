let slider=document.getElementById("size-slider");
let slider2=document.getElementById("rotate-slider");
let slider3=document.getElementById("gradient-slider");
let pie=document.getElementById("pie");
let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
let redValue=document.getElementById("red-value");
let blueValue=document.getElementById("blue-value");

function size(){
    let value = slider.value;
    num1.innerHTML = `<p>${value}</p>`;
    pie.style.width = `${value}px`;
    pie.style.height = `${value}px`;
}

function rotate(){
    let value=slider2.value;
    num2.innerHTML=`<p>${value}</p>`;
    pie.style.transform=`rotate(${value}deg)`;
}

function gradient(){
    let value=slider3.value;
    let red=redValue.value;
    let blue=blueValue.value;
    num3.innerHTML=`<p>${value}</p>`;
    pie.style.background=`conic-gradient(rgb(${value},0,0) 0 ${red}deg, rgb(0,0,${value}) 0 ${blue*2}deg, rgb(0,${value},0) 0)`;

}

function redChart(){
    let value=slider3.value;
    let red=redValue.value;
    let blue=blueValue.value;
    pie.style.background=`conic-gradient(rgb(${value},0,0) 0 ${red}deg, rgb(0,0,${value}) 0 ${blue*2}deg, rgb(0,${value},0) 0)`;
}

function blueChart(){
    let value=slider3.value;
    let red=redValue.value;
    let blue=blueValue.value;
    pie.style.background=`conic-gradient(rgb(${value},0,0) 0 ${red}deg, rgb(0,0,${value}) 0 ${blue*2}deg, rgb(0,${value},0) 0)`;
}

slider.addEventListener("input", size);
slider2.addEventListener("input", rotate);
slider3.addEventListener("input", gradient);
redValue.addEventListener("input", redChart);
blueValue.addEventListener("input", blueChart);