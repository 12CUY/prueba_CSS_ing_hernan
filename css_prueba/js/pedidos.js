function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    alert("Pedido: " + mensaje);
  }