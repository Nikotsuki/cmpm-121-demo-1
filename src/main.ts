import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;
const Acount: HTMLLabelElement = document.querySelector("#Acount")!;
const Bcount: HTMLLabelElement = document.querySelector("#Bcount")!;
const Ccount: HTMLLabelElement = document.querySelector("#Ccount")!;
const growth_rate: HTMLLabelElement = document.querySelector("#Growth")!;
const button: HTMLButtonElement = document.querySelector("#flan")!;
const purchaseA: HTMLButtonElement = document.querySelector("#purchaseA")!;
const purchaseB: HTMLButtonElement = document.querySelector("#purchaseB")!;
const purchaseC: HTMLButtonElement = document.querySelector("#purchaseC")!;

let count: number = 0;
let growth: number = 0;
let A_count: number = 0;
let B_count: number = 0;
let C_count: number = 0;
let A_cost: number = 10;
let B_cost: number = 100;
let C_cost: number = 1000;

counter.innerHTML = count + " flan";

function increase() {
  count += growth;
  counter.innerHTML = count + " flan";
  growth_rate.innerHTML = " Growth Rate: " + growth;
  if (count >= A_cost) {
    purchaseA.disabled = false;
  }
  if (count >= B_cost) {
    purchaseB.disabled = false;
  }
  if (count >= C_cost) {
    purchaseC.disabled = false;
  }
}

const gameName = "Flan Factory";
document.title = gameName;

button.addEventListener("click", () => {
  count += 1;
  counter.innerHTML = count + " flan";
  if (count >= A_cost) {
    purchaseA.disabled = false;
  }
  if (count >= B_cost) {
    purchaseB.disabled = false;
  }
  if (count >= C_cost) {
    purchaseC.disabled = false;
  }
});

purchaseA.addEventListener("click", () => {
  growth += 0.1;
  count -= A_cost;
  if (count < A_cost) {
    purchaseA.disabled = true;
  }
  A_count += 1;
  A_cost = A_cost * 1.15;
  Acount.innerHTML = " Purchased A: " + A_count;
});
purchaseB.addEventListener("click", () => {
  growth += 2.0;
  count -= B_cost;
  if (count < B_cost) {
    purchaseB.disabled = true;
  }
  B_count += 1;
  B_cost = B_cost * 1.15;
  Bcount.innerHTML = " Purchased B: " + B_count;
});
purchaseC.addEventListener("click", () => {
  growth += 5.0;
  count -= C_cost;
  if (count < C_cost) {
    purchaseC.disabled = true;
  }
  C_count += 1;
  C_cost = C_cost * 1.15;
  Ccount.innerHTML = " Purchased C: " + C_count;
});

setInterval(increase, 1000);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
