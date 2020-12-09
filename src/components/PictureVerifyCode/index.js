/**
 * 随机生成一个数
 * @param {*} min 
 * @param {*} max 
 */
export const randomNum = (min, max) => { 
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 随机生成 xy 
 * @param {*} width  输入宽度
 * @param {*} height 输入高度
 */
export const randomXY = (width,height) => { 
  const x = width / 2 + randomNum(0, width / 3);
  const y = randomNum(height/10, height/2);
  return { x: x, y: y }
}


/**
 * 绘制一个拼图块
 * @param {*} ctx 画布
 * @param {*} x 起始x
 * @param {*} y 起始y
 * @param {*} r 圆弧半径
 * @param {*} type 类型 fill 去掉重叠部门， clip 剪切重叠部分
 * 画弧线  arc(x, y, r, startAngle, endAngle, anticlockwise) 
   以(x, y) 为圆心，以r 为半径，从 startAngle 弧度开始到endAngle弧度结束。
   anticlosewise 是布尔值，true 表示逆时针，false 表示顺时针(默认是顺时针) 。
 */
export const drawBlock = (ctx, x, y, r, type) => { 
  const w = 45;
  const PI = Math.PI
  // 开始一条路径
  ctx.beginPath();
  // 向上移动
  ctx.moveTo(x, y);
  ctx.arc(x + w / 2, y, r, - PI, 0, true);
  // 向右
  ctx.lineTo(x + w, y);
  ctx.arc(x + w, y + w / 2, r, 1.5 * PI, 0.5 * PI, false);
  // 向下
  ctx.lineTo(x + w, y + w);
  ctx.arc(x + w / 2, y + w, r, 0, PI, false);
  // 向左
  ctx.lineTo(x, y + w);
  ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
  // 回到起始点
  ctx.lineTo(x, y);
  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(255,255,255, 0.6)"
  ctx.strokeStyle = "rgba(255,255,255, 0.6)"
  // 绘制
  ctx.stroke();
  type === "fill" ? ctx["fill"]() : ctx["clip"]();
  ctx.globalCompositeOperation = "xor"; // 合并图片 合并部分会透明
}