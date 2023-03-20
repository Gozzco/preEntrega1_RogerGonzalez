/* Se le da la bienvenida al usuario y se le invita a indicar su nombre, mail y dirección. Si todos los campos fueron completados se le indica al usaurio Gracias *nombre* los productos que compres serán enviados a *dirección*. En caso contrario se le indicara que debe completar todos los campos solicitados*/


do{
    let nombre = prompt ("Hola! Bienvenido a Needo, cómo te llamas?");
    let mail = prompt ("Por favor indicanos tu mail");
    let calle = prompt ("Indicanos la calle de tu domicilio");
    let numero = Number (prompt ("A qué altura?"));
    let depto = prompt ("Indicanos piso y número de departamento");

    if ((nombre != "") && (mail != "") && (calle != "") && (numero != "") && (depto != "")) {
        let perfil = "Bienvenido, " + nombre + "! " + "Registramos tu mail " + mail + "\n" + "La dirección de entrega que indicaste es: " + calle + ", " + numero + " " + depto

        alert (perfil)
        console.log (perfil)
    }else{
    alert("Por favor completa todos los datos solicitados")
    }
}while (confirm ("Deseas corregir algún dato?")){
    if (confirm == true) {
        nombre = prompt ("Hola! Bienvenido a Needo, cómo te llamas?");
    }else{
        alert ("Muchas gracias por registrarte!")
    }
}