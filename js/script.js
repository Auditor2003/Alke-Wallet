// ==================================================
// ARCHIVO PRINCIPAL DE JAVASCRIPT - ALKE WALLET
// para la lógica de la aplicación (Mi racional)
// ==================================================


// ---------------- DATOS PRINCIPALES ----------------

// Variable que guarda el saldo
// Si existe en el navegador, lo uso
// Si no existe, parto en 0
let saldo = localStorage.getItem("saldo")
  ? parseInt(localStorage.getItem("saldo"))
  : 0;

// Lista donde se guardan los movimientos
// Si no hay movimientos, se crea una lista vacía
let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];


// ---------------- MOSTRAR SALDO ----------------

// Si existe el elemento saldo en la página, lo mostramos
$("#saldo").text("$" + saldo);


// ---------------- LOGIN ----------------

// Evento cuando el usuario hace click en el botón de login
$("#btnLogin").click(function () {

  // Tomamos lo que escribió el usuario
  let user = $("#user").val();
  let pass = $("#pass").val();

  // Validación simple (usuario y contraseña fijos)
  if (user === "Auditor2003" && pass === "waleta123") {

    // Mensaje de bienvenida
    alert("Bienvenido crack 😎");

    // Redirigimos al menú principal
    window.location.href = "menu.html";

  } else {

    // Mensaje de error
    alert("Revisa !! Tu Usuario o contraseña son incorrectos 😅 !!");
  }
});


// ---------------- DEPOSITAR DINERO ----------------

// Evento del botón depositar
$("#btnDeposit").click(function () {

  // Tomamos el monto ingresado
  let monto = parseInt($("#depositAmount").val());

  // Validamos que sea mayor a 0
  if (monto > 0) {

    // Sumamos el monto al saldo
    saldo += monto;

    // Guardamos el movimiento en la lista
    movimientos.push("➕ Depósito: $" + monto);

    // Guardamos los datos en el navegador
    localStorage.setItem("saldo", saldo);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    // Mensaje para el usuario
    alert("Plata agregada 💰 ahora eres un poco más rico");

    // Volvemos al menú
    window.location.href = "menu.html";
  }
});


// ---------------- ENVIAR DINERO ----------------

// Evento del botón enviar dinero
$("#btnSend").click(function () {

  // Tomamos los datos del formulario
  let monto = parseInt($("#sendAmount").val());
  let contacto = $("#contact").val();

  // Validamos que el monto sea correcto y haya saldo
  if (monto > 0 && monto <= saldo) {

    // Restamos el monto del saldo
    saldo -= monto;

    // Guardamos el movimiento
    movimientos.push("➖ Envío a " + contacto + ": $" + monto);

    // Guardamos cambios en el navegador
    localStorage.setItem("saldo", saldo);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    // Mensaje al usuario
    alert("Dinero enviado 📤 ojalá vuelva");

    // Volvemos al menú
    window.location.href = "menu.html";

  } else {

    // Error si no hay saldo suficiente
    alert("Saldo insuficiente 😬");
  }
});


// ---------------- MOSTRAR MOVIMIENTOS ----------------

// Recorremos la lista de movimientos
movimientos.forEach(function (movimiento) {

  // Agregamos cada movimiento a la lista HTML
  $("#listTransactions").append(
    "<li class='list-group-item'>" + movimiento + "</li>"
  );
});
