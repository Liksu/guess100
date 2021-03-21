let range = [];
let number;
let step;
const ui = {};
"number questionMark less yes more step1 step2 step3 step4 step5 step6 step7"
  .split(" ")
  .forEach((id) => (ui[id] = document.getElementById(id)));

function getMiddle() {
  return range[0] + Math.floor((range[1] - range[0]) / 2);
}

function reset() {
  ui.less.removeAttribute("disabled");
  ui.more.removeAttribute("disabled");
  ui.questionMark.classList.remove('hide');
  range = [1, 100];
  number = getMiddle();
  step = 1;
  ui.number.innerText = number;
  document.querySelectorAll('ul.pagination li')
      .forEach(li => li.classList.remove("active"));
  ui.step1.classList.add("active");
}

function finish(side) {
  if (!side || side === "more") ui.more.setAttribute("disabled", false);
  if (!side || side === "less") ui.less.setAttribute("disabled", false);
  if (!side) ui.questionMark.classList.add('hide');
}

function move(side) {
  range[side] = number + (side ? -1 : 1);
  number = getMiddle();
  // console.log(`number = ${number}, range = [${range[0]}, ${range[1]}]`);
  ui.number.innerText = number;
  step++;
  ui[`step${step}`].classList.add("active");

  if (step === 7 || range[0] === range[1]) finish();
  if (number === 100) finish("more");
  if (number === 1) finish("less");
}

reset();

ui.less.addEventListener("click", () => move(1));
ui.more.addEventListener("click", () => move(0));
ui.yes.addEventListener("click", reset);
