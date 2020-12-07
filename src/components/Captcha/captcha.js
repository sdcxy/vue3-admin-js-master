/**
 * 获取随机颜色的rgb值大小
 * @param {*} start 开始值
 * @param {*} end 结束值
 * @param {*} transparent 透明度
 */
const randomColor = (start, end, transparent) => { 
  const r = randomNum(start, end);
  const g = randomNum(start, end);
  const b = randomNum(start, end);
  const t = transparent || 1
  return `rgb(${r},${g},${b},${t})`
}

/**
 * 获取随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 */
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 获取随机数字符串
 * @param {*} len  长度
 */
export const randomStr = (len) => { 
  if (!(typeof len === "number")) { 
    console.log(`输入的参数不符合要求，必须输入Number类型，实际输入为${typeof len}`)
    return;
  }
  let str = '';
  for (let i = 0; i < len; i++) { 
    str += randomNum(0, 9);
  }
  return str;
}

const randomNumArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const randomCodeArr= [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

/**
 * 随机生成指定长度的字符串
 * @param {*} len 长度
 */
export const randomNumStr = (len) => { 
  if (!(typeof len === "number")) { 
    console.log(`输入的参数不符合要求，必须输入Number类型，实际输入为${typeof len}`)
    return;
  }
  let arr = [];
  let str = '';
  for (let i = 0; i < len; i++) { 
    arr.push(randomCodeArr[randomNum(0, 51)])
    arr.push(randomNumArr[randomNum(0,9)])
  }
  for (let i = 0; i < len; i++) { 
    str+= arr[i]
  }
  return str;
}

/**
 * 绘制干扰线
 * @param {*} ctx 画布
 * @param {*} lineNum 数量
 * @param {*} w 宽度
 * @param {*} h 高度
 */
const drawInterfereLine = (ctx,w,h, line) => { 
  for (let i = 0; i < randomNum(1, line); i++) { 
    // 设置用于笔触的颜色、渐变或模式
    ctx.strokeStyle = randomColor(40, 180);
    // 开始一条路径，或重置当前的路径。
    ctx.beginPath();
    // 移动到指定点
    ctx.moveTo(randomNum(0, w), randomNum(0, h));
    // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
    ctx.lineTo(randomNum(0, w), randomNum(0, h));
    // 际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色
    ctx.stroke();
  }
}

/**
 * 绘制干扰点
 * @param {*} ctx 画布
 * @param {*} point 干扰点数
 * @param {*} w 宽度
 * @param {*} h 高度
 */
const drawInterferePoint = (ctx,w,h, point) => { 
  for (let i = 0; i < randomNum(1, point); i++) { 
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    // 创建弧/曲线
    const x = randomNum(0, w); // 中心 x
    const y = randomNum(0, h); // 中心 y
    const r = 1 // 半径 1
    const sd = 0; // 起始圆角
    const ed = 2 * Math.PI; // 结束圆角
    ctx.arc(x, y, r, sd, ed);
    // 填充当前绘图（路径）
    ctx.fill();
  }
}

/**
 * 绘制随机码
 * @param {*} options 参数
 * {
 *  "id": "canvas的id",
 *  "width": "宽度",
 *  "heigth": "高度",
 *  "code": "需要绘制图形码的值 一般6位数字",
 *  "line: 绘制干扰线的数量 Number
 *  "point": 绘制干扰点数量 Number
 * }
 */
export const drawCode = options => {
  // 根据id 获取对应的canvas
  const canvas = document.getElementById("captcha");
  // 如果没有指定宽度和高度，默认设置宽度300高度150
  const width = canvas.width = options.width || 300;
  const height = canvas.height = options.height || 150;
  // 创建一个canvas对象 先判断浏览器是否支持该方法 Internet Explorer 8 以及更早的版本不支持 <canvas>
  if (!canvas.getContext) {
    console.log("浏览器不支持创建canvas!!!")
    return;
  }
  const ctx = canvas.getContext("2d");
  // 设置绘画基线 { alphabetic|top|hanging|middle|ideographic|bottom }
  ctx.textBaseline = "middle"
  // 设置或返回用于填充绘画的颜色、渐变或模式
  // 这个范围的颜色作背景看起来清晰一些
  ctx.fillStyle = randomColor(180, 255);
  // 绘制矩形大小
  ctx.fillRect(0, 0, width, height);
  // 根据输入的随机数长度绘制图形
  if (!(typeof options.code == "string")) {
    console.log("输入的随机码不符合要求,必须为string类型的")
    return;
  }
  const codeLen = options.code.length;
  for (let i = 0; i < codeLen; i++) {
    // 返回索引的字符。获取每个索引的字符
    const code = options.code.charAt(i);
    // 设置默认的字体样式
    ctx.font = "20px Arial";
    // 随机绘制字体颜色
    ctx.fillStyle = randomColor(50, 100);
    // 设置形状与阴影的垂直距离，随机生成
    ctx.shadowOffSetY = randomNum(-3, 3);
    // 设置阴影的模糊级数
    ctx.shadowBlur = randomNum(-3, 3);
    // 设置阴影的颜色
    ctx.shadowColor = randomColor(0, 0, 0.3);
    // 设置 x y 的值 旋转角度
    const x = width / (codeLen + 1) * (i + 1);
    const y = height / 2; // 中间位置
    const d = randomNum(-30, 30);
    // 设置 canvas属性
    ctx.translate(x, y); // 重新映射画布上的 (0,0) 位置。
    ctx.rotate((d * Math.PI) / 180); // 旋转当前的绘图角度
    ctx.fillText(code, 0, 0); // 在画布上绘制填色的文本。文本的默认颜色是黑色
    // 恢复旋转角度和坐标原点
    ctx.rotate((-d * Math.PI) / 180);
    ctx.translate(-x, -y);
  }
  // 设置随机的干扰线
  drawInterfereLine(ctx,width,height, options.line || 4 );
  drawInterferePoint(ctx, width,height,options.point || width / 6 )
}