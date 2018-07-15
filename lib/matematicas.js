module.exports={
    sumar:function(a,b){
        if(comprobarNan(a) && !esNumero(a)){
            throw "(a) tiene que ser un numero";
        }
        if(comprobarNan(b) && !esNumero(b)){
            throw "(b) tiene que ser un numero";

        }
        return a+b;
    },
    restar:function(a,b){
        if(comprobarNan(a) && !esNumero(a)){
            throw "(a) tiene que ser un numero";
        }
        if(comprobarNan(b) && !esNumero(b)){
            throw "(b) tiene que ser un numero";

        }
        return a-b;
    },
    multiplicar:function(a,b){
        if(comprobarNan(a) && !esNumero(a)){
            throw "(a) tiene que ser un numero";
        }
        if(comprobarNan(b) && !esNumero(b)){
            throw "(b) tiene que ser un numero";

        }
        return a*b;
    },
    dividir:function(a,b){
        if(comprobarNan(a) && !esNumero(a)){
            throw "(a) tiene que ser un numero";
        }
        if(comprobarNan(b) && !esNumero(b)){
            throw "(b) tiene que ser un numero";

        }
        if(isNaN(a/b)){
            throw "No se puede hacer la division entre cero";
        }
        return a/b;
    },
    potencia:function(x){
        return function (num){
            for(cont=1;cont<x;cont++){
                num=num*num;
            }
            return num;
        }
    }
}

function comprobarNan(a){
    return isNaN(a);
}

function esNumero(a){
    return Number.isFinite(a);
}