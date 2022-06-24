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