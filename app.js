var mat = require("./lib/matematicas");
var CadenaFunciones = require("./lib/cadenas");
var cadena = new CadenaFunciones();

var a = Math.floor((Math.random() * 100) + 1);
var b = Math.floor((Math.random() * 100) + 1);

console.log("Numero a: ",a);
console.log("Numero b: ",b);

console.log("Suma %d+%d= %d",a,b,mat.sumar(a,b));
console.log("Resta %d-%d= %d",a,b,mat.restar(a,b));
console.log("Multiplicacion %d*%d= %d",a,b,mat.multiplicar(a,b));
console.log("Division %d/%d= %f",a,b,mat.dividir(a,b));

var text = "";
var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var i = 0; i < 5; i++)
    text += letras.charAt(Math.floor(Math.random() * letras.length));
console.log("Cadena: %s",text);
console.log("Invertir: %s",cadena.invertir(text));
console.log("Cifrado cesar: %s",cadena.cifradoCesar(text,1));



