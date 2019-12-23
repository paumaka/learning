function genCell(onClickName,x,y) {
  return "<button id=\"cell-" + x + "-" + y + "\" class=\"cell-covered\" onclick=\""+onClickName+"("+ x +","+ y +")\"> </button>";
}

function genTableRows(row, onClickName, size) {
  let rows = "";
  for (i = 0; i< size; i++) {
    rows += "<td>" + genCell(onClickName,row,i) +"</td>";
  }
  return rows;
}

function genBoardTableContent(onClickName,size) {
  let content = "";
  for (j = 0; j < size; j++) {
    content += "<tr>" + genTableRows(j,onClickName,size) + "</tr>";
  }
  return content;
}

function generateGameBoard(div, onClickName, boardSize) {
  let parent = document.getElementById(div);
  let playerBoard = document.createElement('div');
  playerBoard.innerHTML =
  "<table>"+ genBoardTableContent(onClickName, boardSize) + "</table>";
  parent.appendChild(playerBoard);
}

function setCell(i,j, state) {
  const setCellInternall = function(i, j, cls) {
      const element = document.getElementById("cell-"+i+"-"+j);
      element.className = cls;
  };

  switch (state) {
    case 1:  setCellInternall(i, j, "cell-covered");
             break;
    case 2:  setCellInternall(i, j, "cell-hit");
             break;
    case 3:  setCellInternall(i, j, "cell-miss");
             break;
    default: setCellInternall(i, j, "cell-covered");
             break;
  }
}
 
