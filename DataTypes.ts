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
    name:string;
    price:number;
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
var product = new Product("Samsung",10000,1234)
product.addToCart()
console.log(product.buyProduct());

var product = new Product("Iphone",20000,2234)
product.addToCart()
console.log(product.buyProduct());
