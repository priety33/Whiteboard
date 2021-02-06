// connect to socket server
const socket = io.connect("https://localhost:3000/");
// *********************************Basic Setup
const board = document.querySelector(".board");
//sets board size to browsers height and width
board.height = window.innerHeight;
board.width = window.innerWidth;

// canvasRenderingContext2d=> tool
//to use canvas call getcontext2d -> gives us tool to draw and rub
const ctx = board.getContext("2d");
// pencil colour
ctx.strokeStyle = "blue";
// smooth lines in zoom
ctx.imageSmoothingEnabled = true;
// two lines joined in round shape
ctx.lineJoin = "round";
// line ends - round
ctx.lineCap = "round";
ctx.miterLimit = 1;
ctx.imageSmoothingQuality = "high";
ctx.lineWidth = 3;

// ************************Change Size**************************//
function sizeChange(value) {
  ctx.lineWidth = value;
  socket.emit("size", value);
}

// **tool Change***************************************************//
function handleLocaltoolChange(tool) {
  handleToolChange(tool);
  if (tool != "sticky");
  socket.emit("toolchange", tool);
}
// ******************handle color****************************
function handleColorChange(color) {
  ctx.strokeStyle = color;
  socket.emit("color", color);
}

const hamburger = document.querySelector(".hamburger");
const toolPanel = document.querySelector(".tool-panel");
hamburger.addEventListener("click", function() {
   handleHamburger() 

  socket.emit("hamburger");
});

