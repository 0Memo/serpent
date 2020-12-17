window.onload = function(){
    var canvasWidth = 900;
    var canvarHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 1000;
    var snakey;

    init();

    function init(){        
        var canvas = document.createElement('canvas');
        canvas.width = canvarWidth;
        canvas.height = canvarHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakey = new snake([6,4],[5,4],[4,4]);
        refreshCanvas();
        
    }

    function refreshCanvas(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        snakey.draw();
        setTimeout(refreshCanvas,delay);
    }

    function drawBlock(ctx, position){
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
    }

    function snake(body) {
        this.body = body;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i = 0; i < this.body.length; i++){
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
    }
}