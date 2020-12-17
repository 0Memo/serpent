window.onload = function(){
    var canvasWidth = 900;
    var canvarHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 1000;
    var xCoord = 0;
    var yCoord = 0;

    init();

    function init(){        
        var canvas = document.createElement('canvas');
        canvas.width = canvarWidth;
        canvas.height = canvarHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
        
    }

    function refreshCanvas(){
        xCoord += 2;
        yCoord += 2;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord, yCoord, 100, 50);
        setTimeout(refreshCanvas,delay);
    }

    function snake(body) {
        this.body = body;
    }
}