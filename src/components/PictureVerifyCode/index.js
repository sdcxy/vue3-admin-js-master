
const randomNum = (min, max) => { 
  return Math.floor(Math.random() * (max - min) + min)
}


export const randomXY = (width,height) => { 
  const x = width / 2 + randomNum(0, width / 10);
  const y = randomNum(height/3, height/4);
  return { x: x, y: y }
}



export const drawBlock = (ctx, x, y, r, type) => { 
  const w = 45;
  const PI = Math.PI
  // 开始一条路径
  ctx.beginPath();
  // 向上移动
  ctx.moveTo(x, y);
  // 画弧线  arc(x, y, r, startAngle, endAngle, anticlockwise) 
  // 以(x, y) 为圆心，以r 为半径，从 startAngle 弧度开始到endAngle弧度结束。
  // anticlosewise 是布尔值，true 表示逆时针，false 表示顺时针(默认是顺时针) 。
  ctx.arc(x + w/2, y, r,  - PI, 0, true);
  ctx.lineTo(x + w, y);
  ctx.arc(x + w, y + w / 2, r, 1.5 * PI, 0.5 * PI, false);
  ctx.lineTo(x + w, y + w);
  ctx.arc(x + w / 2, y + w, r, 0, PI, false);
  ctx.lineTo(x, y + w);
  ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
  ctx.lineTo(x, y);
  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(255,255,255, 0.8)"
  ctx.strokeStyle = "rgba(255,255,255, 0.8)"
  ctx.stroke();
  type === "fill" ? ctx["fill"]() : ctx["clip"]();
  ctx.globalCompositeOperation = "xor"; // 合并图片 合并部分会透明
}