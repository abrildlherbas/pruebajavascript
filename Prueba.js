//1. ¿Cuál es la diferencia entre let, const y var al declarar una variable en JavaScript?
//La diferencia entre declarar una variable con var, let y const es que var es una 
//variable global, let una variable local y const es una variable constante que
//no cambia.

//2. ¿Qué diferencias hay entre un objeto y un arreglo en JavaScript? ¿Cuándo conviene usar uno u otro?
//La diferencia que hay entre un objeto y un arreglo en JavaScript es que el objeto
//  identifica elementos por nombre 
// Y un arreglo es el orden de las listas
//Conviene usar objeto cuando necesitas almacenar datos con nombres clave (como propiedades de una persona).
//Conviene usar arreglo cuando tenes una lista ordenada de elementos (como una lista de frutas).



//3. ¿Qué devuelve el método .filter() y cómo se diferencia de .map() al aplicarse sobre un array?
//El método .filter() devuelve un nuevo array que contiene solo los elementos que cumplen 
// con una condicion.

//El metodo .map() devuelve un nuevo array pero con los valores cambiados

//4. ¿Qué método de arrays se utiliza para agregar un elemento al principio de un arreglo(array)?
// Se utiliza .unshift() 

//Ejercicio 1:

const alumnos = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 17, nota: 5 },
    { nombre: "Carla", edad: 22, nota: 9 }
  ];
  
  alumnos.forEach(alumno => {
    if (alumno.nota >= 6) {
      console.log(`${alumno.nombre} esta aprobado.`);
    } else {
      console.log(`${alumno.nombre} esta desaprobado.`);
    }
  });
  
//2 :

function obtenerPromedio(alumnos) {
    let sumaNotas = 0;
    alumnos.forEach(alumno => {
      sumaNotas += alumno.nota;
    });
    return sumaNotas / alumnos.length;
  }
  console.log("Promedio de notas:", obtenerPromedio(alumnos));

//Ejercicio 2:

//1 : 

const mayoresDeEdad = alumnos.filter

(alumno => alumno.edad >= 18);

console.log(mayoresDeEdad);

//2 : 

const nombresMayusculas = alumnos.map(
    
alumno => alumno.nombre.toUpperCase());

console.log("Nombres en mayúsculas:", nombresMayusculas);
