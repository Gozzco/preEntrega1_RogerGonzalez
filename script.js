/* Se le da la bienvenida al usuario y se le invita a indicar su nombre, mail y dirección. Si todos los campos fueron completados se le indica al usuario "Gracias *nombre* los productos que compres serán enviados a *dirección*"". En caso contrario (vacíos o null) se le indicara que debe completar todos los campos solicitados*/



let nombre, mail, calle, número, depto;

do{
    nombre = prompt ("Hola! Bienvenido a Needo, cómo te llamas?");
    mail = prompt ("Por favor indicanos tu mail");
    calle = prompt ("Indicanos la calle de tu domicilio");
    numero = Number (prompt ("A qué altura?"));
    depto = prompt ("Indicanos piso y número de departamento");

    if ((nombre === "" || nombre === null) || (mail === "" || mail === null) || (calle === "" || calle === null) || (numero === "" || numero === null) || (depto === "" || depto === null) || (isNaN(numero))){

        alert("Por favor completa todos los datos solicitados y el número de la calle debe ser un número")

    }else{
        let perfil = "Bienvenido, " + nombre + "! " + "Registramos tu mail " + mail + ". " + "La dirección de entrega que indicaste es: " + "calle " + calle + ", altura " + numero + ", departamento " + depto

        alert (perfil)
        console.log (perfil)
    }
}while (confirm ("Deseas corregir algún dato?")){
    
    if (confirm === true) {
        nombre = prompt ("Hola! Bienvenido a Needo, cómo te llamas?");
    }else{
        alert ("Muchas gracias!")
    }
}