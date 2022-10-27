const possibleMoves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  const isValid = ([x, y]) => RouteBoard[x] && RouteBoard[x][y] === -1;

const getValidMoves = ([x, y]) => {
  const moves = [];
  for (const [moveX, moveY] of possibleMoves) {
    const toX = x + moveX;
    const toY = y + moveY;
    if (isValid([toX, toY])) {
      moves.push([toX, toY]);
    }
  }
  return moves;
};


const solve = ([x, y], moveNumber = 0) => {
    if (!isValid([x, y])) {
      throw new Error(`The starting position x:${x} and y:${y} is invalid`);
    }
  
    RouteBoard[x][y] = moveNumber;
    if (moveNumber + 1 === Xmax * Ymax) {
      return true;
    }
    const sortedMoves = getValidMoves([x, y]).sort(
      (a, b) => getValidMoves(a).length - getValidMoves(b).length
    );
    for (const [toX, toY] of sortedMoves) {
      if (solve([toX, toY], moveNumber + 1)) {
        return true;
      }
      RouteBoard[toX][toY] = -1;
    }
    return false;
  };

  function PlanKingRoute()
  {
    solve([startX, startY]);
  }

function PlanKingRoute2()
{
    //simple layout to start
    for (y = 0; y < Ymax; y++)
    {
        for (x= 0; x<Xmax; x++)
        {
            if (y%2)
            {
                gridId = (7-x)+(y*Xmax);
            }
            else
            {
                gridId = x+(y*Xmax);
            }
            RouteBoard[x][y]=gridId;
        }
    }
}