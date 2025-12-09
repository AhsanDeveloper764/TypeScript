var Age:number=20;
var Name:string="Ahsan Ali";

console.log("Name",Name);
console.log("Age",Age);

//Browser ka Window object mai already name Naam ka 1 variable hota hay isliye hum var Name likkhtay hein 

const NumberAll: number[] =[15,23,223,53434,231];
let max:number = NumberAll[0];  
let min:number = NumberAll[0];  

for(let i=0;i<NumberAll.length;i++){
    if(NumberAll[i]>max) max = NumberAll[i]
    if(NumberAll[i]<min) min = NumberAll[i]
}

console.log("Max:", max);
console.log("Min:", min);