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
// Union Types 
var fun = function (id) {
    console.log(id);
};
fun(123);
fun("ahsan");
var stdData = {
    name: "Ahsan",
    age: 21,
    country: "pakistan"
};
var personDataA = { name: "Ahsan Ali" };
var personDataB = { age: 21 };
var personDataC = { name: "Ahsan", age: 21 };
console.log(personDataA.name, personDataB.age, personDataC.name, personDataC.age);
;
;
var dataA = {
    name: "Ahsan Ali",
    age: 21
};
console.log(dataA.age, dataA.name);
// Enum Types 
var WhoTypes;
(function (WhoTypes) {
    WhoTypes["student"] = "student";
    WhoTypes["Teacher"] = "Teacher";
    WhoTypes["Managment"] = "Managment";
    WhoTypes["Staff"] = "Staff";
})(WhoTypes || (WhoTypes = {}));
var who = WhoTypes.student;
console.log(who);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["staff"] = 2] = "staff";
    Roles[Roles["clerk"] = 3] = "clerk";
})(Roles || (Roles = {}));
var userRole = Roles.admin;
// console.log(userRole);
// Classes Object Oriented 
var Product = /** @class */ (function () {
    function Product(name, price, PId) {
        this.InCart = false;
        this.IsOrdered = false;
        this.name = name;
        this.price = price;
        this.PId = PId;
    }
    Product.prototype.addToCart = function () {
        this.InCart = true;
    };
    Product.prototype.buyProduct = function () {
        if (this.InCart) {
            console.log("Product ".concat(this.name, " is Ordered in ").concat(this.price));
        }
        else {
            console.log("No Product in Cart");
        }
    };
    return Product;
}());
var product = new Product("Samsung", 10000, 1234);
product.addToCart();
console.log(product.buyProduct());
var product = new Product("Iphone", 20000, 2234);
product.addToCart();
console.log(product.buyProduct());
