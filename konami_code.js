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

function init() {
  i = 0
  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[i]) {
      i++
      if (i === codes.length) {
        alert("Congratulations!!!")
        i = 0
      }
    } else {
      index = 0
    }

  })
}

init()
