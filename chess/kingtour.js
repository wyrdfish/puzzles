
function PlanKingRoute()
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