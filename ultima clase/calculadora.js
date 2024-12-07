const calculadora ={
    sumar: function(n1, n2 ){
        suma = n1 + n2;
        document.getElementById("resultado").innerHTML=`La suma de a: ${n1} mas b: ${n2}=${suma}`;
    },
    restar: function(n1, n2){
        resta = n1 - n2;
        document.getElementById("resultado").innerHTML=`La resta de a: ${n1} menos b: ${n2}=${resta}`;
    },
    multiplicacion: function(n1, n2){
        multiplicacion = n1 * n2;
        document.getElementById("resultado").innerHTML=`La multiplicacion de a: ${n1} por b: ${n2}=${multiplicacion}`;
    },
    division: function(n1, n2){
        division = n1 / n2;
        document.getElementById("resultado").innerHTML=`La division de a: ${n1} por b:${n2}=${division}`;
    }

}