import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;
const purchase: HTMLButtonElement = document.querySelector("#purchase")!;

let count: number = 0;
let growth: number = 0;

counter.innerHTML = count + " flan";

function increase() {
  count += growth;
  counter.innerHTML = count + " flan";
}

const gameName = "Flan";
document.title = gameName;

const button = document.createElement("button");
button.textContent = "🍮";
document.body.appendChild(button);

button.addEventListener("click", () => {
  count += 1;
  counter.innerHTML = count + " flan";
});

while (count >= 10) {
  purchase.disabled = false;
}

purchase.addEventListener("click", () => {
  growth += 1;
  count -= 10;
});

setInterval(increase, 1000);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
