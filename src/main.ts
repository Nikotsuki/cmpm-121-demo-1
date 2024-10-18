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
  description: string;
}

const availableItems: Item[] = [
  {
    name: "TinyClicker",
    cost: 10,
    rate: 0.1,
    bought: 0,
    description: "A tiny, creepy finger that just wants to help out",
  },
  {
    name: "MamasHelp",
    cost: 100,
    rate: 2,
    bought: 0,
    description:
      "It's okay if you can't do it alone, there's no shame in a little help",
  },
  {
    name: "TheSpanishInquisiton",
    cost: 1000,
    rate: 50,
    bought: 0,
    description:
      "Nobody sees The Spanish Inquisition coming, unless you spcifically called for their help",
  },
  {
    name: "TheFrenchRevolution",
    cost: 3000,
    rate: 200,
    bought: 0,
    description:
      "Getting cross-cultural now, soon we'll have all of Europe killing kings to make flan",
  },
  {
    name: "Carrefour",
    cost: 90000,
    rate: 1000,
    bought: 0,
    description:
      "French supermarket, we will buy and we will sell until it is done",
  },
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
      document.getElementById(item.name)?.setAttribute("disabled", "");
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