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
  let body = document.querySelector('body')

  let index = 0

  body.addEventListener('keydown', function(e) {

    if (e.key == codes[index]) {
      console.log(e.key)
      index++;
      if (index == codes.length) {
        alert("You did it!");
      }
    } else {
      index = 0;
    }

  })
}

init()
