import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;
//const purchase: HTMLButtonElement = document.querySelector("#purchase")!;
const button: HTMLButtonElement = document.querySelector("#button")!;

let count: number = 0;
//let growth: number = 0;

function increase() {
  count += 1;
  counter.innerHTML = count + " flan";
}

counter.innerHTML = count + " flan";

const gameName = "Flan";
document.title = gameName;

button.addEventListener("click", () => {
  increase();
  counter.innerHTML = count + " flan";
});

//const purchase = document.createElementById("purchase");
///purchase.textContent = "Increase Growth Rate";
//document.body.appendChild(purchase);

//while (count >= 10) {
//  purchase.disabled = false;
//}

//purchase.addEventListener("click", () => {
//  growth += 1;
//});

setInterval(increase, 1000);
console.log(count);

//requestAnimationFrame();

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
