window.onload = function(){
    var canvas;
    var ctx;
    var delay = 1000;

    function init(){        
        anvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 300;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
        
    }

    function refreshCanvas(){
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord, yCoord, 100, 50);
    }
}