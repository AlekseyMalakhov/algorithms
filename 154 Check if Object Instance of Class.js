/*
Write a function that checks if a given value is an instance of a given class or superclass. 
For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined. 

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. 
However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
*/

var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") return false;
    return Object(obj) instanceof classFunction;
};
console.log("1---------------------------------");
console.log(checkIfInstanceOf(new Date(), Date));
console.log("2---------------------------------");
class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));
console.log("3---------------------------------");
console.log(checkIfInstanceOf(Date, Date));
console.log("4---------------------------------");
console.log(checkIfInstanceOf(5, Number));
console.log("5---------------------------------");
console.log(checkIfInstanceOf(5n, BigInt));
console.log("6---------------------------------");
console.log(checkIfInstanceOf(5n, Object));
console.log("7---------------------------------");
console.log(checkIfInstanceOf([], []));
console.log("8---------------------------------");
console.log(checkIfInstanceOf([], Error()));
console.log("9---------------------------------");
console.log(checkIfInstanceOf(Error(), Error));
console.log("10---------------------------------");
console.log(checkIfInstanceOf(Error(), Error()));
