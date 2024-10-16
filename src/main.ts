import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My amazing emoji clicker game";
document.title = gameName;

const button = document.createElement("🍮");
//button.textContent = "Click isi";
document.body.appendChild(button);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
