let canvas = document.getElementById("mapViewCanvas");
let ctx = canvas.getContext("2d");

let detail = 10; 
let scaleFactor = 10;

function generatePointMap(points) {

    let startPointX = 1000
    let startPointY = 1000

    let currentPointX = startPointX;
    let currentPointY = startPointY;
    let maxPointX = startPointX;
    let maxPointY = startPointY;
    let pointArray = [];

    for (let i = 1; i <= points; i++) {

        currentPointX = (currentPointX + (Math.random() * 2 - 1) * scaleFactor);
        currentPointY = (currentPointY + (Math.random() * 2 - 1) * scaleFactor);
        maxPointX = currentPointX > maxPointX ? currentPointX : maxPointX;
        maxPointY = currentPointY > maxPointY ? currentPointY : maxPointY;

        pointArray.push(currentPointX);
        pointArray.push(currentPointY);
        ctx.beginPath();
        ctx.arc(currentPointX, currentPointY, scaleFactor, 0, 2 * Math.PI);
        ctx.globalAlpha = 0.1;
        ctx.fill();
    }

    canvas.width = maxPointX + scaleFactor;
    canvas.height = maxPointY + scaleFactor;
    ctx.translate((maxPointX + scaleFactor)/2, (maxPointY + scaleFactor)/2)
    console.log(pointArray.length);

    /*for (let i = 0; i = pointArray.length; i + 2)
        {
            currentPointX = pointArray[i]
            currentPointY = pointArray[i + 1]

            ctx.beginPath();
            ctx.arc(currentPointX, currentPointY, scaleFactor, 0, 2 * Math.PI);
            ctx.globalAlpha = 0.1;
            ctx.fill();
            console.log(i);
    }*/
    
}

generatePointMap(detail);