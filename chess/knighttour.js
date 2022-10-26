
function PlanKnightRoute()
{
    //simple layout to start
    for (y = 0; y < Ymax; y++)
    {
        for (x= 0; x<Xmax; x++)
        {
            gridId = x+(y*Xmax);
            RouteBoard[x][y]=gridId;
        }
    }
}