// Obtener los botones por su ID
const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const botonLimpiar = document.getElementById("limpiar");
const botonMute = document.getElementById("mute");
const botonPlay = document.getElementById(`play`);
const audio = document.getElementById(`miAudio`);
// Agregar un evento de clic a cada botón
botonPlay.addEventListener("click", function () {
  botonPlay.style.display = `none`;
  botonMute.style.display = `block`;
  audio.play();
});
botonMute.addEventListener("click", function () {
  botonMute.style.display = `none`;
  botonPlay.style.display = `block`;
  audio.pause();
});
botonPiedra.addEventListener("click", function () {
  jugar(1);
});
botonPapel.addEventListener("click", function () {
  jugar(2);
});
botonTijera.addEventListener("click", function () {
  jugar(3);
});
botonLimpiar.addEventListener("click", function () {
  borrar();
})
// Funciones para jugar
function jugar(seleccionUsuario) {
  // Generar una selección aleatoria para el CPU (1 = Piedra, 2 = Papel, 3 = Tijera)
  const seleccionCPU = Math.floor(Math.random() * 3) + 1;
  // Comprobar el resultado del juego
  if (seleccionUsuario === seleccionCPU) {
    console.log("Empate");
    var elemento = document.getElementById("empate");
    elemento.style.display = "block";

  } else if ((seleccionUsuario === 1 && seleccionCPU === 3) ||
    (seleccionUsuario === 2 && seleccionCPU === 1) ||
    (seleccionUsuario === 3 && seleccionCPU === 2)) {
    console.log("Ganaste");
    var elemento = document.getElementById("ganaste");
    elemento.style.display = "block";

  } else {
    console.log("Perdiste");
    var elemento = document.getElementById("perdiste");
    elemento.style.display = "block";

  }
}
function borrar() {
  var elemento = document.getElementById("ganaste");
  elemento.style.display = "none";
  var elemento = document.getElementById("empate");
  elemento.style.display = "none";
  var elemento = document.getElementById("perdiste");
  elemento.style.display = "none";
}
