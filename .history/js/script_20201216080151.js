window.onload = function(){
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 1000;
    var snakey;

    init();

    function init(){        
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakey = new Snake([[6,4], [5,4], [4,4]], "right");
        refreshCanvas();
        
    }

    function refreshCanvas(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        snakey.advance();
        snakey.draw();
        setTimeout(refreshCanvas,delay);
    }

    function drawBlock(ctx, position){
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    function Snake(body, direction) {
        this.body = body;
        this.direction = direction;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i = 0; i < this.body.length; i++){
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
        this.advance = function(){
            var nextPosition = this.body[0].slice();
            switch(this.direction){
                case "left":
                    nextPosition[0] -=1;
                    break;
                case "right":
                    nextPosition[0] +=1;
                    break;
                case "down":
                    nextPosition[1] +=1;
                    break;
                case "up":
                    nextPosition[1] -=1;
                    break;
            }
            this.body.unshift(nextPosition);
            this.body.pop();
        };
    }
}

document.onkeydown = function handleKeyDown(e){
    var key = e.keyCode;
    var newDirection;
    switch(key){
        case 37:
            break;
        case 38:
            break;
        case 39:
            break;
        case 40:
            break;
    };
};