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
        
    }

    function refreshCanvas(){
        ctx = canvas.getContext('2d');
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(30, 30, 100, 50);
    }
}