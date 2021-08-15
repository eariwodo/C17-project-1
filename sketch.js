var b1;
function setup() 
{
  createCanvas(400, 400);
  b1=new Box(23,350,34,54,2,-6)
}

function draw() 
{
  background(220);
b1.show()
b1.moveup()
}

