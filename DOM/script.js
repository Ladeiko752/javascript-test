const one = document.querySelector(".one");

one.classList.add("two", "three");  // add class in property

//one.classList.remove("class name") remove class from property

let button = document.querySelector(".task");

button.style.marginTop = "10px";

button.onclick = () =>{
    one.style.backgroundColor = "indianred";
}

let gas = document.querySelectorAll(".gas");

for(let i = 0; i < gas.length; i++){
    gas[i].onclick = function(){
        let gallons = document.querySelector('.gallons').value;
        let value = this.getAttribute('data');
        console.log(value*gallons);
    }
}