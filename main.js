
/* 
let edad = parseInt(prompt(" Bienvenido a DeepMarket Ingrese su Edad"));

function menores (){
    alert(`No puede ingresar a nuestro market , vuelve cuando tus ${edad} años sean 18`)
    
}


if (edad >= 18) {

    alert("Bienvenido a DeepMarket ")

    let dinero = parseInt(prompt(`Ingrese el dinero que va a Lavar`))

    parseInt(alert(`Lavaremos un total de $ ${dinero} y le descontaremos una cantidad`))

    parseInt(alert(`le descontaremos $150 por lavado , esta de acuerdo? si es asi toque "ACEPTAR"`));

    const resta = (a, b) => a - b;

    let descuento = 150;

    let resultado = resta(dinero, descuento);

    (alert(`Le devolveremos un total de $ ${resultado} Si esta de acuerdo toque ACEPTAR`))
    for (let i = 0; i < 100; i = i + 9) {
        alert(`Lavando dinero ${i} %`)  
         }
         alert(`Su dinero, $ ${resultado} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)
    
}
else{
    menores();
    
    
};
  */
const actividadSemanal = [32, 12, 45, 98, 2, 43, 21]
const menosActividad = 2;
const indice = actividadSemanal.indexOf(menosActividad);
if (indice !== -1) {
    console.log(`El dia de menos actividad (${menosActividad} transacciones) fue el Viernes`);
}


 function menores(){
    alert(`No puedes ingresar vuelve cuando tus ${edad} años sean 18.`)
 }
 let descuento1 = 400;
 let descuento2 = 700;
 let descuento3 = 1000;

 const resta = (a, b) => a - b;

 const planes = [
{plan: "1. Seguridad Baja / Se descuenta $400" },
{plan: "2. Seguridad Media / Se descuenta $700" },
{plan: "3. Seguridad Alta / Se descuenta $1000" },
 ]
  
let edad = parseInt(prompt("Ingrese su edad"));


if (edad >= 18) {
    alert("Bienvenido a DeepMarket")
    let nombre = prompt("Ingrese su Nombre")
    alert(`Hola ${nombre} , A continuacion le mostraremos nuestros planes de seguridad para realizar el lavado de dinero`)
    
    for (const plans of planes) {
        parseInt(alert( plans.plan ))
        
    }
    let planselected = parseInt(prompt("Ingrese su Plan (1,2,3)"))
    if (planselected === 1){
        alert("Usted eligio el plan Seguridad Baja")
        let dinero = parseInt(prompt("Ingrese el dinero a Lavar"))
        if (dinero > 400){
            alert(`A sus $${dinero} se le descontara lo acordado.`);
            let resultado = resta(dinero,descuento1);
            alert(`El total de $${resultado} sera lavado. ACEPTAS? `)

            for (let i = 0; i < 100; i = i + 9) {
                alert(`Lavando dinero ${i} %`)  
                 }
                 alert(`${nombre} su dinero, $${resultado} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)

        }else{
            alert(`Datos incorrectos. Recargue la pagina ${nombre}`)
        }

    }else;
    if (planselected === 2){
        alert("Usted eligio el plan Seguridad Media");
        let dinero2 = parseInt(prompt("Ingrese el dinero a lavar"))
        if (dinero2 > 700){
            alert(`A sus $${dinero2} se le descontara lo acordado.`);
            let resultado2 = resta(dinero2,descuento2);
            alert(`El total de $${resultado2} sera lavado . ACEPTAS?`)

            for (let i = 0; i < 100; i = i + 9) {
                alert(`Lavando dinero ${i} %`)  
                  }
                 alert(` ${nombre} su dinero, $${resultado2} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)

        }else{
            alert(`Datos incorrectos. Recargue la pagina ${nombre}`)
        }       
    }

    if (planselected === 3){
        alert("Usted eligio el plan Seguridad Alta");
        let dinero3 = parseInt(prompt("Ingrese el dinero a lavar"))
        if (dinero3 > 700){
            alert(`A sus $${dinero3} se le descontara lo acordado.`);
            let resultado3 = resta(dinero3,descuento3);
            alert(`El total de $${resultado3} sera lavado . ACEPTAS?`)

            for (let i = 0; i < 100; i = i + 9) {
                alert(`Lavando dinero ${i} %`)  
                  }
                 alert(`${nombre} su dinero, $${resultado3} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)

        }else{
            alert(`Datos incorrectos. Recargue la pagina ${nombre}`)
        }       
    }



}else{
 menores();
}









