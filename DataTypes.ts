// Number Data type
const number1:number=10;
const number2:number=20;
const number3:number=30;

const total:number=number1+number2+number3
console.log("Total",total);

const octaDecimal:number = 0o100001;
const hex:number = 0b00001;
const binary:number = 0x00001;

console.log(octaDecimal+hex+binary+31);

const item:number=100;
const item2:string="50"

const item2Converted = Number(item2)
const sum=item2Converted+item;
// const item2Converted=+item2 
console.log("sum",sum);

// String And Boolean Data Type
const str:string = "Ahsan Ali"
const age:number = 20
const data = age.toString();
let info:string = `my name is ${str} and my age is ${age}`
console.log(info);


// Symbol data types
// const vaL1 = Symbol();
// const vaL2 = Symbol();

// console.log(typeof vaL2);
// console.log(typeof vaL1==vaL2);

// Non-Primitive data type
const handle = () => {
    const nameInput = document.getElementById("username") as HTMLInputElement
    const name:string=nameInput.value

    const emailInput = document.getElementById("email") as HTMLInputElement
    const email:any=emailInput.value

    const numInput = document.getElementById("number") as HTMLInputElement
    const Num:any=numInput.value

    console.log(name,email,Num);
} 

// Non-Primitive data type
// Define Array in TypeScript
const number : number[] = [1,3,4,5,5,6];
const NameA : Array<string> = ["Ahsan","Ali"];

// Non-Primitive data type
// Tuple
// const value : readonly [number,string,boolean] = [232,"ahsan",true]
const value :  [number,string,boolean] = [232,"ahsan",true]
value.push("ali")
console.log(value);

// Non-Primitive data type
const Userdata:{
    name:string,
    age:number,
    company:string | undefined
    // [key:string]:string | number | undefined
}={
    name:"Ahsan Ali",
    age:21,
    company:undefined
}
Userdata.company = "Fifth Thought"

console.log(Userdata);

// Funtion 
const abc = (item:number,price:number) => {
    console.log(item * price);
}
abc(12,16)


// Union Types 
const fun = (id:string | number) => {
    console.log(id);
}
fun(123)
fun("ahsan")

// Interface 
interface Info{
    name:string,
    age:number
}
interface std extends Info{
    country:string
}
const stdData:std={
    name:"Ahsan",
    age:21,
    country:"pakistan"
}

// InterSection Type
// type A = {name:string}
// type B = {age:number}
// interface say bhi krskatay ho 
interface A {name:string}
interface B {age:number}
type C = A & B

const personDataA:A={name:"Ahsan Ali"}
const personDataB:B={age:21}
const personDataC:C={name:"Ahsan",age:21}

console.log(personDataA.name , personDataB.age , personDataC.name
    ,personDataC.age
);

// Difference Between Types and Interface
// type mai ap union krletay ho interface mai ap union nhi krtay ho
// interface kay sath ap extends use krsktay ho type kay sath nhi 

type DataTypes = {name:string , age:number}
interface a {name:string};
interface b  extends a {age:number};

const dataA:DataTypes = {
    name:"Ahsan Ali",
    age:21
}

console.log(dataA.age,dataA.name);

// Enum Types 
enum WhoTypes{
    student="student",
    Teacher="Teacher",
    Managment="Managment",
    Staff="Staff",
}
var who:WhoTypes=WhoTypes.student 
console.log(who);

enum Roles {
    admin,
    manager,
    staff,
    clerk
}

const userRole:Roles=Roles.admin
// console.log(userRole);

// Classes Object Oriented 
class Product {
    protected name:string;
    protected price:number;
    PId:number;
    InCart=false;
    IsOrdered=false;
    constructor (name:string,price:number,PId:number){
        this.name = name
        this.price=price
        this.PId = PId
    }
    addToCart():void{
        this.InCart=true;
    }
    buyProduct(){
        if(this.InCart){
            console.log(`Product ${this.name} is Ordered in ${this.price}`);
        }else{
            console.log("No Product in Cart");
        }
    }
}

class Order extends Product {
    constructor(){
        super("Laptop",100000,123)
    }
    getPrice(){
        return this.price
    }
}

var product = new Product("Samsung",10000,1234)
product.addToCart()
console.log(product.buyProduct());

var product = new Product("Iphone",20000,2234)
product.addToCart()
console.log(product.buyProduct());


const order = new Order()
console.log(order.getPrice());
// parent class say child class mai jab value pass kreingay 
// tw wo protected ya public honi chaiye magar private nhi hona 
// chaiye 


// Inheritance 
class Auth {
    login(name:string,password:string){
        if(name && password){
            return `Student Login`
        }else{
            return `Please Login First`
        }
    }
}

class Student extends Auth {
    Result(marks:number){
        if(marks>=33){
            return `pass`
        }else{
            return `fail`
        }
    }
}

class Teacher extends Auth {
    Subject(Progress:string){
        if(Progress="Good"){
            return `Hired`
        }else{
            return `Sorry Someone get this position!`
        }
    }
}

const valueA = new Student()
console.log(valueA.login("Ahsan","asbajsh"));
console.log(valueA.Result(60));

const valueB = new Teacher()
console.log(valueA.login("Ahsan","asbajsh"));
console.log(valueB.Subject("Good"));

// Getter and setter Example
class Employee {
    private _salary: number=0;
    
    get salary():number{
        return this._salary
    }

    set salary(amount:number){
        if(amount<=0){
            console.log("Salary must be greater than Zero");
        }else{
            this._salary = amount;
        }
    }
} 

const emp = new Employee()
emp.salary = 50000;
console.log("Employee Salary",emp.salary);