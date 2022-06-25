let currentValue = 0;
document.querySelector('.plus').onclick = addition;
document.querySelector('.minus').onclick = substraction;

function addition(){
    document.querySelector('.current-val').innerHTML = ++currentValue;
}

function substraction(){
    if(currentValue == 0){
        alert("Warrning! Value can't be negative!");
    }else{
        document.querySelector('.current-val').innerHTML = --currentValue;
    }
}

function getValue(inputClass){
    return document.querySelector(inputClass).value;
}

document.querySelector(".button-text").onclick = () => {
    let value = getValue(".input-text");
    console.log(value);
}

document.querySelector(".button-range").onclick = () => {
    let value = getValue(".range-input");
    console.log(value);
}

document.querySelector(".checkbox-button").onclick = () => {
    let condition = document.querySelector(".checkbox-input");
    console.log(condition.checked);
}

