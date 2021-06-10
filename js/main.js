        var radius = 100; // radius of unit circle
        var pSize = 4; // size of pole and zero graphic
        var zSize = 4;
        /****************************dragging********************** */
        var poles = [
            [0.75, 0.34],
            [0.75, -0.34]];
    
        var zeros = [[1,0],[]];
/**************************************************************** */
    function draw(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        ctx.clearRect(0, 0, c.width, c.height);

        var pad = (c.width - 2 * radius) / 2; // padding on each side

        // unit circle
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.arc(radius + pad, radius + pad, radius, 0, 2 * Math.PI);
        ctx.stroke();

        // y axis
        ctx.beginPath();
        //ctx.lineWidth="1";
        ctx.strokeStyle = "lightgray";
        ctx.moveTo(radius + pad, 0);
        ctx.lineTo(radius + pad, c.height);
        ctx.font = "italic 8px sans-serif";
        ctx.fillText("Im", radius + pad + 2, pad - 2);

        // x axis
        ctx.moveTo(0, radius + pad);
        ctx.lineTo(c.width, radius + pad);
        ctx.fillText("Re", radius + radius + pad + 2, radius + pad - 2);
        ctx.stroke(); // Draw it

        ctx.strokeStyle = "red";
        var idx;
        for (idx = 0; idx < poles.length; idx++) {
            var x = radius + Math.round(radius * poles[idx][0]);
            var y = radius - Math.round(radius * poles[idx][1]);
            ctx.beginPath();
            ctx.moveTo(x - pSize + pad, y - pSize + pad);
            ctx.lineTo(x + pSize + pad, y + pSize + pad);
            ctx.moveTo(x - pSize + pad, y + pSize + pad);
            ctx.lineTo(x + pSize + pad, y - pSize + pad);
            ctx.stroke();
        }

        // zeros
        for (idx = 0; idx < zeros.length; idx++) {
            var x = radius + Math.round(radius * zeros[idx][0]);
            var y = radius - Math.round(radius * zeros[idx][1]);
            ctx.beginPath();
            ctx.arc(x + pad, y + pad, zSize, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    draw();
function cleeer(index){
    if ( index == 1){
        poles=[[],[]];
    }
    if ( index == 2){
        zeros=[[],[]];
    }
    if ( index == 3){
        poles=[[],[]];
        zeros=[[],[]];
    }
    console.log("lllllllllllll");
    draw();
    
   
}
    