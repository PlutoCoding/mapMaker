let canvas = document.getElementById("mapViewCanvas");
let ctx = canvas.getContext("2d");

let detail = 100; 
let scaleFactor = 100;

function generatePointMap(points) {

    let startPointX = 1000
    let startPointY = 1000

    let currentPointX = startPointX;
    let currentPointY = startPointY;

    for (let i = 1; i <= points; i++) {

        currentPointX = (currentPointX + (Math.random() * 2 - 1) * scaleFactor);
        currentPointY = (currentPointY + (Math.random() * 2 - 1) * scaleFactor);

        ctx.beginPath();
        ctx.arc(currentPointX, currentPointY, scaleFactor, 0, 2 * Math.PI);
        ctx.globalAlpha = 0.1;
        ctx.fill();
    }

    
}

generatePointMap(detail);