const possibleKingMoves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];



const getValidKingMoves = ([x, y]) => {
  const KingMoves = [];
  for (const [moveX, moveY] of possibleKingMoves) {
    const toX = x + moveX;
    const toY = y + moveY;
    if (isValid([toX, toY])) {
        KingMoves.push([toX, toY]);
    }
  }
  return KingMoves;
};


const KingSolve = ([x, y], KingMoveNumber = 0) => {
    if (!isValid([x, y])) {
      throw new Error(`The starting position x:${x} and y:${y} is invalid`);
    }
  
    RouteBoard[x][y] = KingMoveNumber;
    if (KingMoveNumber + 1 === Xmax * Ymax) {
      return true;
    }
    const sortedKingMoves = getValidKingMoves([x, y]).sort(
      (a, b) => getValidKingMoves(a).length - getValidKingMoves(b).length
    );
    for (const [toX, toY] of sortedKingMoves) {
      if (KingSolve([toX, toY], KingMoveNumber + 1)) {
        return true;
      }
      RouteBoard[toX][toY] = -1;
    }
    return false;
  };

  function PlanKingRoute()
  {
    KingSolve([startX, startY]);
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