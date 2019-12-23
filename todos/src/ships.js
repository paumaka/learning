
const player1Game = {

}

const player2Game = {

}

function createShip(pos, size, orientation) {
  const createBody = function() {
    const cells = [];
    for (let i = 1; i <= size; i++) {
        cells.push({
          x: pos.x + (orientation == 'horizontal' ? i : 0),
          y: pos.y + (orientation == 'vertical' ? i : 0),
          hitStatus: false
        });
    }
  }
  return {
    type: type,
    cells: createBody();
  }
}

function initializePlayer(playerName, ships) {
  return {
    playerName: playerName,
    ships: ships
  }
}

function checkCell(i,j) {
  setCell(i,j,2);
}
