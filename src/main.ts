import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;
const Acount: HTMLLabelElement = document.querySelector("#Acount")!;
const Bcount: HTMLLabelElement = document.querySelector("#Bcount")!;
const Ccount: HTMLLabelElement = document.querySelector("#Ccount")!;
const growth_rate: HTMLLabelElement = document.querySelector("#Growth")!;
const purchaseA: HTMLButtonElement = document.querySelector("#purchaseA")!;
const purchaseB: HTMLButtonElement = document.querySelector("#purchaseB")!;
const purchaseC: HTMLButtonElement = document.querySelector("#purchaseC")!;

let count: number = 0;
let growth: number = 0;
let A_count: number = 0;
let B_count: number = 0;
let C_count: number = 0;

counter.innerHTML = count + " flan";

function increase() {
  count += growth;
  counter.innerHTML = count + " flan";
  growth_rate.innerHTML = "Growth Rate: " + growth;
  if (count >= 10) {
    purchaseA.disabled = false;
  }
  if (count >= 100) {
    purchaseB.disabled = false;
  }
  if (count >= 1000) {
    purchaseC.disabled = false;
  }
}

const gameName = "Flan Game";
document.title = gameName;

const button = document.createElement("button");
button.textContent = "🍮";
document.body.appendChild(button);

button.addEventListener("click", () => {
  count += 1;
  console.log("hi");
  counter.innerHTML = count + " flan";
  if (count >= 10) {
    purchaseA.disabled = false;
  }
  if (count >= 100) {
    purchaseB.disabled = false;
  }
  if (count >= 1000) {
    purchaseC.disabled = false;
  }
});

purchaseA.addEventListener("click", () => {
  growth += 0.1;
  count -= 10;
  if (count < 10) {
    purchaseA.disabled = true;
  }
  A_count += 1;
  Acount.innerHTML = "Purchased A: " + A_count;
});
purchaseB.addEventListener("click", () => {
  growth += 2.0;
  count -= 100;
  if (count < 100) {
    purchaseB.disabled = true;
  }
  B_count += 1;
  Bcount.innerHTML = "Purchased B: " + B_count;
});
purchaseC.addEventListener("click", () => {
  growth += 5.0;
  count -= 1000;
  if (count < 1000) {
    purchaseC.disabled = true;
  }
  C_count += 1;
  Ccount.innerHTML = "Purchased C: " + C_count;
});

setInterval(increase, 1000);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
