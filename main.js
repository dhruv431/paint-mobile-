var me = "" ;
var px ;
var py ;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext ("2d");
color="aqua";
width=1;
var swidth=screen.width;
new_width = screen.width-50;
new_height = screen.height - 270;
if (swidth < 992)
{
document.getElementById("mycanvas").width = new_width;
document.getElementById("mycanvas").height = new_height;
document.body.style.overflow= "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)

{
    color= document.getElementById("paint").value;
    width=document.getElementById("width").value;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    cx=e.touches[0].clientX - canvas.offsetLeft;
    cy=e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;

console.log("last position of x and y coordinates = ");
console.log("x =" + px +" y = " + py );
ctx.moveTo(px,py);
   
console.log("current position of x and y coordinates = ");
console.log("x =" + cx +" y = " + cy );
ctx.arc(cx,cy,30,0,2*Math.PI);
ctx.stroke();
px=cx;
py=cy;
}
function erase ()
{
    ctx.clearRect (0,0,canvas.width,canvas.height);
}