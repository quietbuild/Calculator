const display = document.getElementById("display");
const history = document.getElementById("history");

function append(val) {
  display.value += val;
}

function clearAll() {
  display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value);
    save(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function sci(type) {
  let x = Number(display.value);
  let r;

  if (type === "sin") r = Math.sin(x);
  if (type === "cos") r = Math.cos(x);
  if (type === "tan") r = Math.tan(x);
  if (type === "sqrt") r = Math.sqrt(x);
  if (type === "pow") r = x * x;
  if (type === "percent") r = x / 100;
  if (type === "fact") r = factorial(x);

  save(type + "(" + x + ") = " + r);
  display.value = r;
}

function factorial(n) {
  if (n < 0) return "Error";
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}

function save(text) {
  const li = document.createElement("li");
  li.textContent = text;
  history.prepend(li);
}

/* Keyboard support */
document.addEventListener("keydown", e => {
  if ("0123456789+-*/().".includes(e.key)) append(e.key);
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") display.value = display.value.slice(0, -1);
  if (e.key === "Escape") clearAll();
});
