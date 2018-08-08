const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let i = 0;

const input = document.body

input.addEventListener('keydown',
function init(e) {
  const key = e.key;
  if (key === codes[i]) {
    i++;

    if (i === codes.length) {
      alert("Here we go!");

      i = 0;
    }
  } else {
    i = 0;
  }
})
