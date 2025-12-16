var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super.call(this, "Laptop", 100000, 123) || this;
    }
    Order.prototype.getPrice = function () {
        return this.price;
    };
    return Order;
}(Product));
var product = new Product("Samsung", 10000, 1234);
product.addToCart();
console.log(product.buyProduct());
var product = new Product("Iphone", 20000, 2234);
product.addToCart();
console.log(product.buyProduct());
var order = new Order();
console.log(order.getPrice());
// parent class say child class mai jab value pass kreingay 
// tw wo protected ya public honi chaiye magar private nhi hona 
// chaiye 
// Inheritance 
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.login = function (name, password) {
        if (name && password) {
            return "Student Login";
        }
        else {
            return "Please Login First";
        }
    };
    return Auth;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.Result = function (marks) {
        if (marks >= 33) {
            return "pass";
        }
        else {
            return "fail";
        }
    };
    return Student;
}(Auth));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.Subject = function (Progress) {
        if (Progress = "Good") {
            return "Hired";
        }
        else {
            return "Sorry Someone get this position!";
        }
    };
    return Teacher;
}(Auth));
var valueA = new Student();
console.log(valueA.login("Ahsan", "asbajsh"));
console.log(valueA.Result(60));
var valueB = new Teacher();
console.log(valueA.login("Ahsan", "asbajsh"));
console.log(valueB.Subject("Good"));
// Getter and setter Example
var Employee = /** @class */ (function () {
    function Employee() {
        this._salary = 0;
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (amount) {
            if (amount <= 0) {
                console.log("Salary must be greater than Zero");
            }
            else {
                this._salary = amount;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee();
emp.salary = 50000;
console.log("Employee Salary", emp.salary);
var AllData = /** @class */ (function () {
    function AllData(username, roll_no) {
        this.name = username;
        this.roll_no = roll_no;
    }
    AllData.prototype.displayName = function () {
        console.log("Hello World");
    };
    return AllData;
}());
var val = new AllData("Karachi College", 226);
console.log("val", val);
