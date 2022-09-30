alert("Ingrese la opcion del producto que desea llevar, al finalizar la elección presiona 0 para salir")
let  Productos  =  Number(prompt( "Opciones: 1)mouse $3000 2)teclado $3500 3)monitor $50000 4)cpu $180000"));
let Cantidad;
let total = 0 ;

const cantidadtot = (cantidad, precio) => {
    return cantidad * precio
}


while (Productos != 0) {
  switch (Productos) {
    case 1:
      Cantidad = Number(prompt("el producto seleccionado es mouse, ¿cuantas unidades desea llevar?"))
            total += cantidadtot(Cantidad, 3000)
      break;
    case 2:
        Cantidad = Number(prompt("el producto seleccionado es teclado, ¿cuantas unidades desea llevar?"))
        total += cantidadtot(Cantidad, 3500)
      break;
    case 3:
      Cantidad = Number(prompt("el producto seleccionado es monitor, ¿cuantas unidades desea llevar?"))
      total += cantidadtot(Cantidad, 50000)
    break;
    case 4:
      Cantidad = Number(prompt("el producto seleccionado es cpu, ¿cuantas unidades desea llevar?"))
      total += cantidadtot(Cantidad, 180000)
    break;

    default:
      break;
  }
  Productos = Number(prompt("Opciones: 1)mouse $3000 2)teclado $3500 3)monitor $50000 4)cpu $180000"))
}

//alert("el total de la compra es de: " + total)




const regalo = () => {
    if (total >= 150000) {
      alert("Te ganaste un regalo sorpresa")
    }  
}

regalo()

// regalo si supera 150000

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo")
  if (metodo == "tarjeta") {
    total *= 1.15
    console.log("el monto a abonar es: " +total);
    alert("Gracias por su compra.Saludos")
  }else if (metodo == "efectivo") {
    total-=  1000
    alert("tenes un descuento de 1000, el total es: "  +  total)
  }

}


metodoDePago ()