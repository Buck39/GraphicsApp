var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var t = document.getElementById("text");
var dd = document.getElementById("codes");

var string = "";



function drawRect()
{
	console.log("rectangle");
	ctx.rect(20, 20, 150, 100);
	ctx.stroke();
}
function drawCircle()
{
	console.log("circle");
	var centerX = c.width;
	var centerY = c.height / 2;
	var radius = 70;

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
}
function clearCanvas()
{
	ctx.fillStyle="white";
	ctx.fillRect(0,0,c.width,c.height);
	ctx.clearRect(0,0,c.width, c.height);
}
function clearCanvas2()
{
	var s = document.getElementById ("myCanvas");
    var w = s.width;
    s.width = 10;
    s.width = w;
}
function dropBoxStuff()
{
	
}

dd.onchange = function(){
		t.value = dd.value;
	}