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
  let index = 0;
  const body = document.querySelector("body");
  body.addEventListener("keydown", function(e) {
    if (e.key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Congratulations, you got it!");

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
