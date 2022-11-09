
function myFunction(totalAPagar, precioCantidad, descuento) {
  var ticket = 200;
  var cantidad = document.getElementById("cant").value;
  var precioCantidad = ticket * cantidad;
  var categoria = document.getElementById("categoria1").value;
  var descuento = precioCantidad * categoria;
  var totalAPagar = precioCantidad - descuento;
  document.getElementById("titulo").value= "Total a pagar: $" + totalAPagar
  console.log("precio x cantidad " +(precioCantidad));
  console.log("descuento de $ " +(descuento));
  console.log("total a pagar:$" +(totalAPagar));
}