/* function Persona (nombre, apellido,email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
}

Persona.prototype.tel = "123456789";

let padre = new Persona("Carlos", "Arteaga", "kenaa@example.com");
padre.tel = "3127741413";
console.log(padre.tel)

let madre = new Persona("Nuvia", "Chamorro", "madre@example.com");
madre.tel = "31183383383";
console.log(madre.tel) */
/*
let persona = {
    nombre: "Carlos",
    apellido: "Arteaga",
    email: "jperezQgmail.com",
    edad: 25,
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang (lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto () {
        return this.nombre + " " + this.apellido
    }
}
*/
/*
// console.log(persona.nombre)
// console.log(persona["apellido"])

// for in
// for (nombrePropiedad in persona) {
//     console.log(nombrePropiedad);
//     console.log(persona[nombrePropiedad]);
// }

// persona.tel = "123456789";
// delete persona.tel;

//Concatenar cada valor de cada propiedad
// console.log(persona.nombre + " " + persona.apellido)

//for in
// for (nombrePropiedad in persona) {
//     console.log(persona[nombrePropiedad]);
// }

// let personaArray= Object.values(persona);
// console.log(personaArray)

// let personaString = JSON.stringify(persona);
// console.log(personaString)
*/
/*      
console.log(persona.lang);
persona.lang="es_co";
console.log(persona.lang)
console.log(persona.idioma)
*/

let persona1 = {
    nombre: "Carlos",
    apellido: "Arteaga",
    nombreCompleto: function (titulo,tel) {
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "Daniel",
    apellido: "Chamorro", 
}

// call
console.log(persona1.nombreCompleto.call(persona2, "Ingeniero","3127742323"));

console.log(persona1.nombreCompleto("mototaxista","3146656056"));

// apply

let arreglo = ["Ing", "31131131144"]

console.log(persona1.nombreCompleto("Ingeniero","3127742323"));
console.log(persona1.nombreCompleto.apply(persona2,arreglo))
