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


// if object has nested objects we must to use method _.cloneDeep(object) for deep copy
// Example: let obj = [{"a": 1}, {"b": 2}];
// let obj2 = _.cloneDeep(obj);

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


// task from learnjs
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(menu)
  
  function multiplyNumeric(menu){
    for(let item in menu){
        if(typeof menu[item] == "number"){
            menu[item] *= 2; 
        }
    }
  };

  multiplyNumeric(menu);

  console.log(menu);