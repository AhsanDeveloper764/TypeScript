var Age = 20;
var Name = "Ahsan Ali";
console.log("Name", Name);
console.log("Age", Age);
//Browser ka Window object mai already name Naam ka 1 variable hota hay isliye hum var Name likkhtay hein 
var NumberAll = [15, 23, 223, 53434, 231];
var max = NumberAll[0];
var min = NumberAll[0];
for (var i = 0; i < NumberAll.length; i++) {
    if (NumberAll[i] > max)
        max = NumberAll[i];
    if (NumberAll[i] < min)
        min = NumberAll[i];
}
console.log("Max:", max);
console.log("Min:", min);
