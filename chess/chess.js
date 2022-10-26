

var TextToRender="Alwaysoldsometimesnewneversadsometimesbluemynameopensalockforyou"
//Always old sometimes new never sad sometimes blue my name opens a lock for you

//board size
Xmax = 8;
Ymax = 8;

squareSize = 50; //in pixels

var board = new Array(Ymax)

for (y = 0; y < Ymax; y++)
{
    board[y] = new Array(Xmax);
}

for (y = 0; y < Ymax; y++)
{
        for (x= 0; x< Xmax; x++)
        {
            board[x][y]=0;
        }
}


function GoButtonClicked() {
    TextToRender=document.getElementById("PuzzleText").value;
    RenderBoard();
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
    var gridId = x+(y*Xmax);
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
        ctx.fillText(TextToRender[gridId], ((x) * squareSize) + 10, ((y) * squareSize) + 38);
    }
}
