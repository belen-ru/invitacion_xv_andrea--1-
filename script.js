const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

const fechaEvento = new Date("2025-05-31T20:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    document.getElementById("cuenta-regresiva").innerHTML = "¡Hoy es el gran día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  diasElemento.textContent = dias;
  horasElemento.textContent = horas;
  minutosElemento.textContent = minutos;
  segundosElemento.textContent = segundos;
}

setInterval(actualizarContador, 1000);


AOS.init({
  once: false,       // que se repita al volver a hacer scroll
  duration: 800,     // duración en milisegundos
  offset: 100        // se activa 100px antes de que el elemento entre en pantalla
});
