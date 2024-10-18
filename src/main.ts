import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;
const growth_rate: HTMLLabelElement = document.querySelector("#Growth")!;
const button: HTMLButtonElement = document.querySelector("#flan")!;

interface Item {
  name: string;
  cost: number;
  rate: number;
  bought: number;
}

const availableItems: Item[] = [
  { name: "TinyClicker", cost: 10, rate: 0.1, bought: 0 },
  { name: "MamasHelp", cost: 100, rate: 2, bought: 0 },
  { name: "TheSpanishInquisiton", cost: 1000, rate: 50, bought: 0 },
];

let count: number = 0;
let growth: number = 0;

const gameName = "Flan Factory";
document.title = gameName;
counter.innerHTML = count + " flan";

function increase() {
  count += growth;
  counter.innerHTML = count + " flan";
  growth_rate.innerHTML = " Growth Rate: " + growth;
  for (const item of availableItems) {
    if (count >= item.cost) {
      document.getElementById(item.name)?.removeAttribute("disabled");
    }
  }
}

button.addEventListener("click", () => {
  count += 1;
  counter.innerHTML = count + " flan";
  for (const item of availableItems) {
    if (count >= item.cost) {
      document.getElementById(item.name)?.removeAttribute("disabled");
    }
  }
});

for (const item of availableItems) {
  document.getElementById(item.name)?.addEventListener("click", () => {
    growth += item.rate;
    count -= item.cost;
    if (count < item.cost) {
      document.getElementById(item.name)?.setAttribute("disabled", "disabled");
    }
    item.bought += 1;
    item.cost = item.cost * 1.15;
    document.getElementById(item.name + "_count")!.innerHTML =
      " Purchased " + item.name + ": " + item.bought;
  });
}

setInterval(increase, 1000);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
