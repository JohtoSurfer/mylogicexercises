/* Lista de desafios
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
PARTE II
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
PARTE III

Las respuestas y la explicacion las colocare en ingles y espanol pero el codigo lo respondere todo en ingles. Algunas respuestas las tienen varias soluciones
que aprendi despues.
*/


// ejercicio 1 respuesta
    /* para este desafio mi solucion fue craear una funcion que devolviera el largo 
    de la cadena use length una propiedad de string (cadena), esta propiedad
    regresa el numero de caracteres en una cadena o string,javascript usa utf-16
    esta propiedad solo cuenta las unidades de codido no lo caracteres. */
    var strNumberOne = 'Characteres to count';
    // my OG solution
    function countCharacteres() {
        return countCharacteres.length
    } 
    // Solution enhace 
    function unitCount(str = "") {
  if(str) {
    console.warn('please insert str')
  } else {
    console.info('the str has ' + str.length + " characteres")
  }
}

     // solution arrow function

    
    // ejercicio 2 respuesta
    /*
    Para resolver este ejercicio primero creare una funcion donde debo implementar el metodo slice, metodo usado para extraer 
    porciones de un arreglo u objeto, mi solucion fue crear una variable local y asignarle un argumento con un numero de unidades 
    o la porcion a cortar en este caso para devolver solo hola mi funcion corta del 0 a 4.
    */
    var strNumberTwo = 'Hola mundo'
   // my OF solution 
    function countText(text) {
        var cut = text.slice(0,4);
        return cut
    }
    // solution enhance
    var texto = "funciona o no?";
    function cutText(text, length) {
  if(!text) {
    console.log('please add text')
  } else {
    console.log(text.slice(0,length))
  }
}

    cutText()
    cutText(texto,8) // return funciona
    // solution ternary operator
    const cuttingText = (str ="", length = undefined) => (!str)
    ? console.warn('please add text')
    : console.info(str.slice(0, length));

    cuttingText('hello word', 3)
    
    
    // ejercicio 3 respuesta
    /*
    Para el tercer desafio, que no entendi muy bien como estaba formulado, lo que hice fue usar el metodo split para separar el texto en las
    cadenas de una variable, pues asi entendi que debia ser el ejercicio, tambien pense usar el metodo splice pero creo q no aplica en este caso.
    */
    var strNumberThree = 'tercer desafio';
    // my solution OG
    function splitText(text) {
    var split = text.split(' ');
    return split
    }
    console.log(splitText(strNumberThree))
    // solution enhance

    // solution ternary operator
    const strSpliting = (str="", spliting = undefined) => (!str)
    ? console.warn('please add text')
    :(spliting === undefined)
    ? console.warn('please add number of unit to split')
    : console.info(str.split(spliting));


strSpliting("the very best like no one ever was"," ")


    // ejercicio 4 respuesta
    /*
    Para resolver este desafio decidi crear dos variables una con la cadena(string) de texto y otra para la inicializacion del ciclo
    luego incie un ciclo while con la condicion que debe ser verdadera para iniciar el ciclo, mientras la conidicon sea verdadera se ejecuta
    lo que esta entre llaves ejemplo, el mensaje que deseo repetir, cuando la condicion  se vuelve falsa se deja de ejecutar el codigo, en este 
    caso deseo que solo se repita 5 veces. la variable i la debo incrementar para que se evalue la condicion el numero de veces que sea verdadera.
    */

    var strNumberFour = 'Repetir este Texto';
    var i = 0;
    // my solution OG
    while (i <= 4 ) {
        console.log(strNumberFour);
        i++; // incrementa
        }

    // solution enhance
    const repeatText = (text = "",units = undefined) => {
    if(!text) return console.warn("please add text");
  
    if(units === undefined) return console.warn("please add how many time you wanna repeat the text");

    if(units === 0) return console.error("add a number higher than 0");

    if(Math.sign(units) === -1) return console.error("the number cannot be negative");

    for(let i = 1; i < units; i++) {console.log(`${text},${i}`)
  }
}

console.log(repeatText("hola",5)) // retorna el numero deseado y muestra el numero de unidades ingresadas para repetir.


  // ejercicio 5 respuesta

  /* 
  solucion basada en metodo split, para este desafio mi solucion fue crear una funcion reverseText que si no recibe ninguna
  cadena ensenara una alerta y cuando recibe una cadena de texto,cree un parametro para aplicarle tres metodo y lograr 
  un resultado, priemro use el metodo split para separar las unidades de la cadena las convierte en un arreglo, luego 
  el metodo reverse que invierte las sub cadenas con las letras ya separadas y con el indice reverso, luego se debe usar
  un tercer metodo que convierta las subcadenas a una sola cadena principal con las letras reversas.
  
  */

  var text = "reverse this";

  function reverseText(text) {
    if (!text) {
      return console.warn("please insert text");
    } else {
      let splitStr = text.split(''); // divide las unidades en sub arr
      console.log("original: " + splitStr); // revierte el arr 
      splitStr.reverse();
      let joinArr = splitStr.join(""); // une el arr a str de nuevo ya reverso
      return console.log("texto reverso: " + joinArr)
    }
  }
  
  reverseText(text)

