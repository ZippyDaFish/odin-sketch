const container = document.getElementById("container");

function randomRgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', function handleMouseOver(){
      cell.style.backgroundColor = randomRgba();
    })
    container.appendChild(cell).className = "grid-item";
  };
};

function changeGrid() {
  const items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.remove();
  });
  gridSize = document.getElementById("sizeSlider").value;
  makeRows(gridSize, gridSize);
}

function showSizeValue(val) {
  document.getElementById("sizeValue").innerText = val + "x" + val;
}

makeRows(16, 16);