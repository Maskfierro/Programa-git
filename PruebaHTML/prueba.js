console.log("Hola mundo"); //para mostrar

var c = "Esto es un Texto"; //esto es para definir las variables "C" y darle un valor "Esto es un Texto"

console.log( c );//Se escribe la variable (sin comillas) para poder monstrar el valor en la cosola

var myNombre = "jose";
console.log("mi nombre es " + myNombre); // se crea una concatenacion con "+" para poder mostrar "mi nombre es" mas el el valor de la variable

myNombre = "Manuel"; //Aqui se puede cambiar el valor de la variable anteriormente creada
console.log("mi nombre ahora es " + myNombre);

const myConstante = 3;
console.log("el numero es: " + myConstante);

//myConstante = 4;                       "const" no se le puede cambiar el valor ya que al crear la variable el valor es unico
//console.log("El numero ahora es: " + 4)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//condicional if-else

let numero = 5; // Se utiliza el "Let" y no "Var" porque Let es mas avanzado

if(numero == 4){ //Si cierta condicion se cumple arrojara el resultado en la consola. tamvien se utilizan los "||" y "&&" 
    console.log("el numero es igual a 5")
}else{console.log("el numero no es IGUAL")}

let num1 = -50;
if(num1 > 0){
    console.log("El numero que coloco es: " + num1 + " y es Positivo");
}else if(num1 === 0){ //se agrega el "else if" ya que es otra opcion que podria aparecer
    console.log("El numero que coloco es: " + num1 );
}else{
    console.log("El numero que coloco es:" + num1 + " y es Negativo");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BUCLES
//while

let contador = 0; // la variable "contador" con su valor que empieza desde "0"
while(contador < 5){// si contador que vale "0" va hasta un numero que es menor que "5" (en este caso) 
    console.log(contador);//se muestra el valor desde "0" aumentando hasta que sea menor que "5"
    contador = contador + 1; // el contador se ira aumentando de 1 en 1
} 

//for

for(i = 0; i < 5; i++){console.log(i);} // es exactamente lo mismo que while pero se cambio la variable "contador" por "i"
//tambien se agrega la variable dentro de los parentesis "(i = 0)" y se aumenta el iterador con "i++" o mejor dicho "i = i + 1"


console.log("Por hoy lo dejamos 8/10/2023")