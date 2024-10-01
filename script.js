let container = document.querySelector(".container");
let numberofSquaresPerSide = document.querySelector(".squares");

//Default grid
for (i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.style.cssText = "background-color: yellow; height: 10vh; width: 5vw";
  div.addEventListener("mouseover", (e) => {
    //e.stopPropagation();  ---> No need of stop propagation when using event.target.
    e.target.style.backgroundColor = randomColor();
  });
  div.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "yellow";
  });
  container.appendChild(div);
}

// This event is to generate a grid which the user requested.
numberofSquaresPerSide.addEventListener("click", () => {
  let number = prompt("Enter number");
  container.textContent = "";

  for (i = 1; i <= number * number; i++) {
    let div = document.createElement("div");
    div.style.cssText = "background-color: yellow; height: 10vh; width: 5vw";
    div.addEventListener("mouseover", (e) => {
      //e.stopPropagation();  ---> No need of stop propagation when using event.target.
      e.target.style.backgroundColor = randomColor();
    });
    div.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "yellow";
    });
    container.appendChild(div);
  }
});


function randomColor(){
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    let randomColor = `rgb(${r}, ${g}, ${b})`

    return randomColor;
}
