





function myFunction(totalAPagar, precioCantidad, descuento) {
  var cantidad = document.getElementById("cant").value;
  var ticket = 200;
  var precioCantidad = ticket * cantidad;
  var categoria = 0.8;
  var descuento = precioCantidad * categoria;
  var totalAPagar = precioCantidad - descuento;
  let text = document.getElementById("titulo").innerHTML; 
  document.getElementById("titulo").innerHTML =
  text.replace("$", totalAPagar);
  console.log(precioCantidad);
  console.log(descuento);
  console.log("total a pagar:$" +(totalAPagar));
}






