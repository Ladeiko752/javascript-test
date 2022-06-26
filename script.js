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

document.querySelector(".textarea-button").onclick = (event) => {
    event.preventDefault(); 
    let text = document.querySelector(".myform");
    console.log(text.elements.mytext.value);
    console.log(text.elements.myinput.value);
}

document.querySelector(".task-button").onclick = () => {
    let openBracket = 0;
    let closeBracket = 0;
    let storage = document.querySelector(".task-input").value;
    let array = storage.split('');
    console.log(array);

    for(let i = 0; i < array.length; i++){
        if(array[i] == "("){
            ++openBracket;
        }else{
            ++closeBracket;
        }
    }

    console.log(`Quantity open bracket: ${openBracket}`)
    console.log(`Quantity open bracket: ${closeBracket}`)

    if(openBracket != closeBracket){
        document.querySelector(".answer-div").innerHTML = "False";
    }else{
        document.querySelector(".answer-div").innerHTML = "True";
    }
}
