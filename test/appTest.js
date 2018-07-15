var mat = require("../lib/matematicas");
var CadenaFunciones = require("../lib/cadenas");
var cadena = new CadenaFunciones();
var assert = require('assert');

describe("Probando libreria: Matematicas",function(){
    it("Sumando dos numeros",function(){
        assert.equal(mat.sumar(10,19),29);
    });
    it("Restando dos numeros",function(){
         assert.equal(mat.restar(19,10),9);
    });
    it("Multiplicando dos numeros",function(){
         assert.equal(mat.multiplicar(10,10),100);
    });
    it("Dividiendo dos numeros",function(){
        assert.equal(mat.dividir(10,2),5);
    });
    it("Potencia de un numero",function(){
        var base = mat.potencia(2);
        assert.equal(base(3),9);
    });
});

describe("Probando libreria: Cadenas",function(){
    it("Invirtiendo cadena",function(){
        assert.equal(cadena.invertir("luis"),"siul");
    });
    it("Cubrir numero",function(){
        assert.equal(cadena.cubrir("1234-12-9876-12"),"XXXX-XX-XXXX-12")
    });
    it("Cifrado Cesar de Texto",function(){
        assert.equal(cadena.cifradoCesar("WIKIPEDIA, LA ENCICLOPEDIA LIBRE",6),"COQOVKJOG, RG KTIOIRUVKJOG ROHXK");
    });
    it("Descifrado Cesar de Texto",function(){
        assert.equal(cadena.decifradoCesar("COQOVKJOG, RG KTIOIRUVKJOG ROHXK",6),"WIKIPEDIA, LA ENCICLOPEDIA LIBRE");
    });
    it("Contando cuantas veces aparece una letra en una cadena",function(){
        assert.equal(cadena.contar("c","Putting a comma after the last element is inconsistent across browsers."),3);
    });
});

