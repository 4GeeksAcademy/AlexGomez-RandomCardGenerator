/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = test();

setInterval(function() {
  Contenedora();
}, 10000);

//refresca la pagina
document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});

function test() {
  //write your code here
  //boton de las dimensiones
  document.getElementById("btnDim").addEventListener("click", () => {
    cambiarDimensiones();
  });
  //boton carga la carta
  document.querySelector(".btn-danger").addEventListener("click", () => {
    Contenedora();
  });
}

function Contenedora() {
  let obj = {};
  const centro = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const card = [
    { nombre: "spade", color: "black", simbolo: "♠" },
    { nombre: "club", color: "black", simbolo: "♣" },
    { nombre: "heart", color: "red", simbolo: "♥" },
    { nombre: "diamond", color: "red", simbolo: "♦" }
  ];

  obj = card[Math.floor(Math.random() * card.length)];
  //formar un nuevo arr con el simbolo agregado
  centro.push(obj.simbolo);

  carta(centro);
  cambiarIco(obj);
  cambiarColor(obj);
}

function carta(arr) {
  //elemento que hira en el centro de la carta
  let aux = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("numero").textContent = aux;
}

function cambiarIco(element) {
  //condiciones para el icono o simbolos de la carta
  let ico =
    element.nombre == "spade"
      ? "♠"
      : element.nombre == "heart"
      ? "♥"
      : element.nombre == "club"
      ? "♣"
      : "♦";
  for (let i = 0; i < 2; i++) {
    document.getElementsByClassName("palos")[i].textContent = ico;
  }
}

function cambiarColor(element) {
  console.log(element.color);

  let h = document.getElementsByTagName("span");
  if (element.color == "red") {
    for (let index = 0; index < 3; index++) {
      h[index].classList.remove("text-dark");
      h[index].classList.add("text-danger");
    }
  } else if (element.color == "black") {
    for (let index = 0; index < 3; index++) {
      h[index].classList.remove("text-danger");
      h[index].classList.add("text-dark");
    }
  }
}

function cambiarDimensiones() {
  let ancho = document.getElementById("anchoInput").value;
  let alto = document.getElementById("altoInput").value;

  // Validar los valores de entrada
  if (ancho < 200 || ancho > 500) {
    alert("El ancho debe estar entre 200px y 500px.");
    return;
  }
  if (alto < 400 || alto > 600) {
    alert("El alto debe estar entre 400px y 600px.");
    return;
  }

  let div = document.querySelector(".carta");
  div.style.width = ancho + "px";
  div.style.height = alto + "px";
}
