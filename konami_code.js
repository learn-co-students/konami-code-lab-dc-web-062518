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
  let input = document.querySelector('body')
  let i = 0
  input.addEventListener('keydown', function(e) {
    if (e.key === codes[i]) {
      i++
      if (i === codes.length){
        alert('Hey! You found the GOLDEN EGG')
        i = 0
      }
    } else {
      i = 0
    }
  })
}
