var bullet = new Image();
var block = new Image();
var cannon = new Image();
function init(){
  bullet.src = '/*Insert Link Here*/';
  block.src = '/*Insert Link Here*/';
  cannon.src = '/*Insert Link Here*/';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Cannon
  var time = new Date();
  ctx.drawImage(cannon,-12,-12);

  // Bullet
  ctx.save();
  ctx.translate(0,5);
  ctx.drawImage(bullet,-3.5,-3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(block,50,0,300,300);

  window.requestAnimationFrame(draw);
}

init();
