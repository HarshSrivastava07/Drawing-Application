const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const sizepen= document.getElementById('size');
const increaseBTN= document.getElementById('increase');
const decreaseBTN= document.getElementById('decrease');
const colorpen =document.getElementById('color');
const delpen= document.getElementById('clear');
let pressed=false;
let size=10;
let color='black';
let x;
let y;


canvas.addEventListener('mousedown',(e) =>{
    pressed=true

    x=e.offsetX
    y=e.offsetY

    // console.log(pressed,x,y)
} )
canvas.addEventListener('mouseup',(e) =>{
    pressed=false

    x=undefined
    y=undefined
} )

canvas.addEventListener('mousemove',(e) =>{
    if(pressed)
    {
        const a1=e.offsetX
        const a2=e.offsetY
        drawcircle(a1,a2)
        drawline(x,y,a1,a2)
    }
} )
function drawcircle (x,y) {
    ctx.beginPath();
  ctx.arc (x,y,size,0,2*Math.PI);
  ctx.fillStyle=color
  ctx.fill();
}



function drawline (x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle= color;
    ctx.lineWidth= size*2;
    ctx.stroke();
}

// drawcircle(100,200)
// drawline(300,300,300,500)


function updatepensize()
{
    
    sizepen.innerText= size;
}

//updatepensize();
increaseBTN.addEventListener('click',()=>{
    size++;
    if(size>40)
    {
        size=40
    }
    updatepensize();
})
decreaseBTN.addEventListener('click',()=>{
    size--;
    if(size<1)
    {
        size=1;
    }
    updatepensize();
})

//e is the short var reference for event object which will be passed to event handlers.

colorpen.addEventListener('change', (e)=>{
    color= e.target.value
})

delpen.addEventListener("click", ()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
})