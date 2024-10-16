import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;

let count: number = 0;

function increase() {
  count += 1;
  counter.innerHTML = count + " flan";
}

counter.innerHTML = count + " flan";

const gameName = "My amazing emoji clicker game";
document.title = gameName;

const button = document.createElement("button");
button.textContent = "🍮";
document.body.appendChild(button);

button.addEventListener("click", () => {
  console.log("hi");
  increase();
  counter.innerHTML = count + " flan";
});

setInterval(increase, 1000);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
