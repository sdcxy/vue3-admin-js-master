window.onload = () => { 

  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  let canvas;
  let ctx;
  let mousePosition = {
    x: 30 * width / 100,
    y: 30 * height / 100
  }
  let dot = {
    nb: 250,
    distance: 100,
    d_radius: 150,
    array: []
  }

/**
 * 随机生成颜色数字 0-255
 * @param {*} min 
 */
  const colorValue = (min) => { return Math.floor(Math.random() * 255 + min) }

  const  averageColorStyles = (dot1, dot2) => {
    let color1 = dot1.color,
        color2 = dot2.color;
    
    let r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
    return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
  }

  const  mixComponents = (comp1, weight1, comp2, weight2) => {
    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
  }

  /**
 * 颜色类
 */
  class Color { 
    constructor(min) { 
      min = min || 0;
      this.r = colorValue(min);
      this.g = colorValue(min);
      this.b = colorValue(min);
      this.style = createColorStyle(this.r, this.g, this.b);
    }
  }

  /**
   * 点类
   */
  class Dot { 
    constructor() { 
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = -.5 * Math.random();
      this.vy = -.5 * Math.random();
      this.radius = Math.random() * 2;
      this.color = new Color();
    }
    // 画点方法
    draw() { 
      ctx.beginPath();
      ctx.fillStyle = this.color.style;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI, false);
      ctx.fill();
    }
  }

  /**
   * 创建颜色样式
   * @param {*} r 
   * @param {*} g 
   * @param {*} b 
   */
  const createColorStyle = (r, g, b) => {
    return `rgba(${r}, ${g}, ${b}, 0.8)`
  }

  /**
   * 创建随机点
   */
  const createDots = () => { 
    for (let i = 0; i < dot.nb; i++) { 
      dot.array.push(new Dot());
    }
  }

  /**
   * 移动点
   */
  const moveDots = () => { 
    for (let i = 0; i < dot.nb; i++) { 
      console.log(dot);
      const dot = dot.array[i]
      if (dot.y < 0 || dot.y > height) {
        dot.vx = dot.vx;
        dot.vy = - dot.vy;
      } else if (dot.x < 0 || dot.x > width) { 
        dot.vx = - dot.vx;
        dot.vy = dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  }

  /**
   * 连接点
   */
  const connectDots = () => { 
    for (let i = 0; i < dot.nb; i++) { 
      for (j = 0; j < dot.nb; j++) { 
        i_dot = dot.array[i];
        j_dot = dot.array[j];

        if((i_dot.x - j_dot.x) < dot.distance && (i_dot.y - j_dot.y) < dot.distance && (i_dot.x - j_dot.x) > - dot.distance && (i_dot.y - j_dot.y) > - dot.distance){
          if((i_dot.x - mousePosition.x) < dot.d_radius && (i_dot.y - mousePosition.y) < dot.d_radius && (i_dot.x - mousePosition.x) > - dot.d_radius && (i_dot.y - mousePosition.y) > - dot.d_radius){
            ctx.beginPath();
            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }

  const drawDots = () => {
    for(i = 0; i < dot.nb; i++){
      const _dot = dot.array[i];
      _dot.draw();
    }
  }
  
  /**
   * 初始化
   */
  const init = () => { 
    ctx.clearRect(0, 0, width, height);
    drawDots();
    connectDots();
    // moveDots();
    

    requestAnimationFrame(init)
  }

  canvas = document.getElementById("canvas");
  canvas.width = width;
  canvas.height = height;

  ctx = canvas.getContext("2d");
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = (new Color(150)).style;
 
  canvas.addEventListener("mousemove", (e) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  })

  canvas.addEventListener("mouseleave", (e) => { 
    mousePosition.x = width / 2;
    mousePosition.y = height / 2;
  })

  createDots();
  requestAnimationFrame(init);
}





