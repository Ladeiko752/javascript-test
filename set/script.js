let myNewSet = new Set();

// The way to add element in Set
myNewSet.add(1);
myNewSet.add(2);
myNewSet.add('Hello');
myNewSet.add(4);
myNewSet.add(5);

console.log(myNewSet);

// The way to get a size of Set
console.log(myNewSet.size);

//Will remove all elements from Set
// myNewSet.clear();
// console.log(myNewSet);

// Set is repository of unique elements and if we try to add duplicate, this element will not be added 
myNewSet.add(1);
console.log(myNewSet);

//Will remove specified elements from Set
myNewSet.delete(1);
console.log(myNewSet);

//Return true if specified element is in the Set
console.log(myNewSet.has(2));


//The Way to get all elements from Set
for(let item of myNewSet){
    console.log(item);
}

let array = [1,2,3,4,5,2,3,1];

let mySet = new Set(array);
console.log(mySet);
