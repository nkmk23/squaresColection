const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#transformations
//https://www.w3schools.com/tags/ref_canvas.asp

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = () => {
  return ({ context, width, height}) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 5;
    const rows = 5;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;
    
    for (let i = 0; i < numCells; i++){
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw;
      const h = cellh;

      context.save();
      context.translate(margx,margy);
      context.lineWidth = 10; 
      context.fillStyle = "blue";
      context.beginPath();
      context.fillRect(x-0.025, y-0.025, w*0.95, h*0.95);
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
