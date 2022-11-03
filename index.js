const horaEl = document.getElementById("hora");
const minutoEl = document.getElementById("minuto");
const segundoEl = document.getElementById("segundo");

function attRelogio() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  horaEl.innerText = h;
  minutoEl.innerText = m;
  segundoEl.innerText = s;

  setTimeout(() => {
    attRelogio();
  }, 100);
}

attRelogio();
