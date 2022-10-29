

var PuzzleText="                                                                "
//Always old sometimes new never sad sometimes blue my name opens a lock for you
var movePattern
//board size
Xmax = 8;
Ymax = 8;

startX = 0;
startY = 0;

squareSize = 50; //in pixels
halfsquareSize = squareSize/2;

var LetterBoard = new Array(Ymax)

for (y = 0; y < Ymax; y++)
{
    LetterBoard[y] = new Array(Xmax);
}

var RouteBoard = new Array(Ymax)

for (y = 0; y < Ymax; y++)
{
    RouteBoard[y] = new Array(Xmax);
}

resetBoards();

function resetBoards()
{
    for (y = 0; y < Ymax; y++)
    {
        for (x= 0; x< Xmax; x++)
        {
            RouteBoard[x][y]=-1;
            LetterBoard[x][y]=" ";
        }
    }
}

function getMousePosition(c, event) {
    let rect = c.getBoundingClientRect();
    let x = ~~((event.clientX - rect.left)/squareSize);
    let y = ~~((event.clientY - rect.top)/squareSize);
    console.log("Coordinate x: " + x,
                "Coordinate y: " + y);

    
    highlight_square('LetterBoard', LetterBoard,startX, startY,"black");
    startX = x; startY=y;
    highlight_square('LetterBoard', LetterBoard,startX, startY,"green");

}

function showBoards(){
    RenderBoard('LetterBoard', LetterBoard);
    highlight_square('LetterBoard', LetterBoard,startX, startY,"green");
    RenderBoard('RouteBoard', RouteBoard);
}

function GoButtonClicked() {
    PuzzleText=document.getElementById("PuzzleText").value.toUpperCase();;
    movePattern = document.forms.routeForm.movePattern.value;

    resetBoards();
    PlanRoute(movePattern);
    FillBoard(PuzzleText);
    showBoards();
}

const isValid = ([x, y]) => RouteBoard[x] && RouteBoard[x][y] === -1;

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
            LetterBoard[x][y]=PuzzleText[RouteBoard[x][y]];
        }
    }
}

function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

function RenderBoard(thecanvas,board) {

    for (x = 0; x < Xmax; x++) {
        for (y = 0; y < Ymax; y++) {
            square(thecanvas,board,x, y);
        }
    }
}


function square(thecanvas,board,x, y) {

    var canvas = document.getElementById(thecanvas);
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
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle'; 
        ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
        ctx.fillStyle = OtherStyle;
        ctx.font="38px Georgia";
        ctx.fillText(board[x][y], ((x) * squareSize) + halfsquareSize, ((y) * squareSize) + halfsquareSize);
    }
}

function highlight_square(thecanvas,board,x, y,thisStyle) {

    var canvas = document.getElementById(thecanvas);

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = thisStyle;
        ctx.lineWidth = 4;
        ctx.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
    }
}
