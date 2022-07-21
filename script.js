const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', function handleMouseOver(){
      cell.style.backgroundColor = 'blue';
    })
    container.appendChild(cell).className = "grid-item";
  };
};

function showSizeValue(val){
  document.getElementById("sizeValue").innerText = val + "x" + val;
}

makeRows(16, 16);