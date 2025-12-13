// Number Data type
var number1 = 10;
var number2 = 20;
var number3 = 30;
var total = number1 + number2 + number3;
console.log("Total", total);
var octaDecimal = 32769;
var hex = 1;
var binary = 0x00001;
console.log(octaDecimal + hex + binary + 31);
var item = 100;
var item2 = "50";
var item2Converted = Number(item2);
var sum = item2Converted + item;
// const item2Converted=+item2 
console.log("sum", sum);
// String And Boolean Data Type
var str = "Ahsan Ali";
var age = 20;
var data = age.toString();
var info = "my name is ".concat(str, " and my age is ").concat(age);
console.log(info);
// Symbol data types
// const vaL1 = Symbol();
// const vaL2 = Symbol();
// console.log(typeof vaL2);
// console.log(typeof vaL1==vaL2);
// Non-Primitive data type
var handle = function () {
    var nameInput = document.getElementById("username");
    var name = nameInput.value;
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var numInput = document.getElementById("number");
    var Num = numInput.value;
    console.log(name, email, Num);
};
// Non-Primitive data type
// Define Array in TypeScript
var number = [1, 3, 4, 5, 5, 6];
var NameA = ["Ahsan", "Ali"];
// Non-Primitive data type
// Tuple
// const value : readonly [number,string,boolean] = [232,"ahsan",true]
var value = [232, "ahsan", true];
value.push("ali");
console.log(value);
// Non-Primitive data type
var Userdata = {
    name: "Ahsan Ali",
    age: 21,
    company: undefined
};
Userdata.company = "Fifth Thought";
console.log(Userdata);
// Funtion 
var abc = function (item, price) {
    console.log(item * price);
};
abc(12, 16);
