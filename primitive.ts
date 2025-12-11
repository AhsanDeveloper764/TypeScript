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
