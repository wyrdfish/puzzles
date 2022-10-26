

var PuzzleText="                                                                "
//Always old sometimes new never sad sometimes blue my name opens a lock for you
var movePattern
//board size
Xmax = 8;
Ymax = 8;

squareSize = 50; //in pixels

var Letterboard = new Array(Ymax)

for (y = 0; y < Ymax; y++)
{
    Letterboard[y] = new Array(Xmax);
}

for (y = 0; y < Ymax; y++)
{
        for (x= 0; x< Xmax; x++)
        {
            Letterboard[x][y]=" ";
        }
}

var RouteBoard = new Array(Ymax)

for (y = 0; y < Ymax; y++)
{
    RouteBoard[y] = new Array(Xmax);
}

for (y = 0; y < Ymax; y++)
{
        for (x= 0; x< Xmax; x++)
        {
            RouteBoard[x][y]=-1;
        }
}


function GoButtonClicked() {
    PuzzleText=document.getElementById("PuzzleText").value;
    movePattern = document.forms.routeForm.movePattern.value;

    PlanRoute(movePattern);
    FillBoard(PuzzleText);
    RenderBoard();
}

function PlanRoute(movePattern) {
    switch (movePattern)
    {
        case "King":
          PlanKingRoute();
          break;

        case "Knight":
          PlanKnightRoute();
          break;
    }
}

function FillBoard(PuzzleText)
{
    for (y = 0; y < Ymax; y++)
    {
        for (x= 0; x< Xmax; x++)
        {
            gridId = x+(y*Xmax);
            Letterboard[x][y]=PuzzleText[RouteBoard[x][y]];
        }
    }
}

function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

function RenderBoard() {

    for (x = 0; x < Xmax; x++) {
        for (y = 0; y < Ymax; y++) {
            square(x, y);
        }
    }
}


function square(x, y) {

    var canvas = document.getElementById('screen');
    var style  = "rgb(255,255,255)";
    var OtherStyle  = "rgb(0,0,0)";

    if ((x+y) % 2 )
    {
        style  = "rgb(0,0,0)";
        OtherStyle  = "rgb(255,255,255)";
    }

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = style;
        ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
        ctx.fillStyle = OtherStyle;
        ctx.font="40px Georgia";
        ctx.fillText(Letterboard[x][y], ((x) * squareSize) + 10, ((y) * squareSize) + 38);
    }
}
