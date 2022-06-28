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


let key1 = "weight";
let key2 = "height";
// a way to create object
let userInfo = {
    name: "Denis",
    surname: "Petrov",
    age: 54,
    [key1]: 100,
    height: 194,
    'be gay': true, 

    printInformationAboutUser() {
        console.log(`${this.name} ${this.surname} - ${this.age}`);     // create function in object
    }

}

//console.log(userInfo.key2) return error 

userInfo.printInformationAboutUser();

console.log(userInfo[key1]);
console.log(userInfo[key2]);

//a way to set properties on an object
function setInformation(name, surname, age){
    return {
        name: name,
        surname: surname,
        age: age,
    };
}

let user = setInformation("Stas", "Voitehovich", 18);
console.log(userInfo);
console.log(user);

let dog = {
    name: "Getsbi",
}

dog.sex = "male"; // add property to object
console.log(dog); 

dog.address = {
    country: "USA", 
    city: "Samara",
}

console.log(dog);


delete dog.sex;
console.log(dog); // delete property from object

// Object.assign(куда, свойство 1, свойство 2 и тд) <= a way to duplicate object

let myDog = Object.assign({}, dog);
let dogger = {};                       // <= two way to duplicate object
Object.assign(dogger, dog);

dogger.name = "Archi";
myDog.name = "Morgenshtern";

console.log(myDog);
console.log(dogger);

for(let key in userInfo){       // cycle for object
    console.log(key);           // print name of properties
    console.log(userInfo[key]);   // print value of properties
}

function UserInfo(name, surname){  // create function-constructor

    // this = {} - create a empty object

    this.name = name;
    this.surname = surname;

    // return this
}

console.log(new UserInfo('Alvoro', 'Morata'));
console.log(new UserInfo('Boba', 'Messi'));