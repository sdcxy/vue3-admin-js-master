<template>
    <div class="picture_verify_code" 
    ref="slider_wrap" 
    style="width:400px;height: 200px;"
    >
    <div class="picture_wrap" id="picture_wrap">
      <canvas canvas id="picture_canvas" class="picture_wrap_canvas"></canvas>
      <canvas id="picture_code" class="picture_wrap_code"></canvas>
      <span id="text"> {{failureText}}</span>
    </div>
    <div class="content" ref="slider_content"></div>
    <div class="icon" ref="slider_icon"></div>
    </div>
</template>

<script>
import { onMounted, ref, toRefs } from "vue"
import { drawBlock, randomXY, randomNum } from "./index"
export default {
  name: "PictureVerifyCode",
  props: {
    options: {
      type: Object,
      required: true,
      default: function(){
        return {
          expect: 2, // 期望的误差值,在0-3之间最好，不能设置太大
          text: "按住滑块，拖动完成上方拼图",
          failureText: "验证失败:拖动滑块将悬浮图像正确拼合", // 验证失败的文字
          failureColor: "#c75643", // 验证失败的颜色
          zIndex: "3000", // 失败文字高度
          delay: 2000, // 失败文字延迟时间
          sliderColor: "#1f6f8b", // 滑块颜色
          height: 40, // 高度默认40
          color: "#fff", // 初始化的字体颜色
          backgroud: "#214252", // 背景颜色
          fontSize: 16, // 字体大小
          imgHeight: "200",
          imgWidth: "400",
          imgs: [
            require('@/assets/code/code1.png'),
            require('@/assets/code/code2.png'),
            require('@/assets/code/code3.png'),
            require('@/assets/code/code4.png'),
            require('@/assets/code/code5.png'),
            require('@/assets/code/code6.png')
          ],
        }
      }
    }
  },
  setup(props, { emit }){
    // 取出配置的参数
    const options = ref(props.options).value;
    // 定义滑动成功的状态
    let isSuccess = false;

    const slider_icon = ref(null)
    const slider_wrap = ref(null)
    const slider_content = ref(null)

    let slider;
    let wrap;
    let content;
    let distance;
    // 画布
    let picture_wrap;
    let canvas;
    let code;
    let text;

    const imgH = options.imgHeight;
    const imgW = options.imgWidth

    let xy = randomXY(imgW, imgH);
    

    const init = () => {
        // 1、获取滑动图片的dom元素
      slider = slider_icon.value;
      // 2、获取容器的dom元素
      wrap = slider_wrap.value;
      // 3、获取文本dom元素 
      content = slider_content.value;
      // 4、定义滑动的最大距离
      distance = wrap.offsetWidth && slider.offsetWidth ? (wrap.offsetWidth - slider.offsetWidth) - options.height + 2 : 0;
      // 5、初始化
      wrap.style.height = options.height + 'px';
      wrap.style.lineHeight = options.height + 'px';
      wrap.style.background = options.backgroud;
      wrap.style.fontSize = options.fontSize + 'px';
 
      // 设置滑块的属性
      slider.style.background = options.sliderColor; // 滑块颜色
      slider.innerHTML = "&gt;&gt;" // 滑块文字
      slider.style.transition = null;
      slider.style.height = options.height -2 + 'px' // 滑块高度
      slider.style.width = options.height +  'px' // 滑块宽度
      slider.style.lineHeight = options.height -2 + 'px' // 滑块行高
      slider.style.left = 0 + 'px'; // 滑块初始偏移值

      // 设置滑块条文字
      content.style.color = options.color; // 文字颜色
      content.innerHTML = options.text // 文本

      initDrawImg();
    }

  
    /**
     * 初始化绘制图片和拼图块
     */
    const initDrawImg = () => {

      picture_wrap = document.getElementById("picture_wrap");
      canvas = document.getElementById("picture_canvas");
      code = document.getElementById("picture_code");
      text = document.getElementById("text");
      // 初始化画布的大小
      picture_wrap.height = imgH;
      picture_wrap.width = imgW;
      canvas.height = imgH;
      canvas.width = imgW;
      code.height = imgH;
      code.width = imgW;
      // 设置初始的位置
      picture_wrap.style.top = -imgH - 20 + 'px';
      text.style.bottom = - imgH -40 + 'px'
      text.style.fontSize = options.fontSize;
      text.style.color = options.color;
      text.style.zIndex = -1;
      // 准备绘制
      const ctx = canvas.getContext("2d");
      const ctx_code = code.getContext("2d")

      // 待移动的拼图块，向左进行偏移
      code.style.left =  - xy.x  + 'px'

      // 随机生成一个数，随机生成图片
      const index = randomNum(0, options.imgs.length)
      let img = new Image();
      img.src = options.imgs[index]
      // 加载绘制图片
      img.onload = () =>{
        ctx.drawImage(img,0,0, imgW ,imgH)
        ctx_code.drawImage(img, 0, 0 ,imgW, imgH)
      }
      // 绘制块
      drawBlock(ctx, xy.x, xy.y, xy.y / 5, "fill")
      drawBlock(ctx_code, xy.x, xy.y, xy.y / 5, "clip")
    }


    /**
     * 初始化事件
     */
    const initEvent = () => {
      slider.onmousedown = (event) => {
        // 获取按下时的 初始x 的值
        const downX = event.clientX;
        document.onmousemove = (e) => {
          // 获取移动之后 x的值
          const moveX = e.clientX;
          
          // 获取偏移值
          let offsetX = moveX - downX;
          // 鼠标水平移动的距离 与 滑动成功的距离 之间的关系
          if ( offsetX > distance) {
            // 如果滑过了终点，就将它停留在终点位置
            offsetX = distance;
          } else if (offsetX < 0) {
            // 滑到了起点的左侧，就将它重置为起点位置
            offsetX =  0 ;
          }
          // 根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
          slider.style.left = offsetX + 'px'
          code.style.left =  - xy.x  +  offsetX + 'px'

        }
        // 文档松开鼠标事件
        document.onmouseup = (e) => {
          // 获取鼠标松开时 x的值
          const upClientX = e.clientX;
          // 获取偏移量
          const upOffsetX = upClientX - downX
          if (upOffsetX === 0) {
            return
          }
          // 允许在 +-2的误差内
          if ( upOffsetX < xy.x + options.expect && upOffsetX > xy.x - options.expect) {
            success();
          } else {
            failureTextDisplay();
            reset();
          }
        }
      }
    }

    
    /**
     * 失败文字显示
     */
    const failureTextDisplay = () => {
      // 显示文字
      text.style.zIndex = options.zIndex;
      text.style.color = options.failureColor;
      text.style.bottom = -imgH + 'px';
      text.style.background = "transparent";
      setTimeout(()=> {
        // 恢复原状
        text.style.zIndex = -1;
        text.style.color = options.color
        text.style.buttom = -imgH - 40  + 'px';
      },options.delay)
    }
    
    /**
     * 校验成功 返回状态
     */
    const success = () => {
      emit("on-verify", !isSuccess )
      document.onmousemove = null;
      document.onmouseup = null;
      slider.onmousedown = null;
    }
    /**
     * 复位
     */
    const reset = () => {
      // 立即复位
      slider.style.left = 0 + 'px';
      code.style.left = - xy.x + 'px';
      emit("on-verify", isSuccess )
      document.onmousemove = null;
      document.onmouseup = null;
    }

    onMounted(()=>{
      init();
      initEvent();
    })

    const data = toRefs(options)

    return {
      slider_icon,
      slider_wrap,
      slider_content,
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>
.picture_verify_code{
  position: relative;
  margin: 0 auto;
  border-radius: 4px;
}

.picture_verify_code .backgroud {
  position: absolute;
  height: 100%;
  border-radius: 4px;
}

.picture_verify_code .content {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .29),2px 2px 2px
        rgba(255, 255, 255, .44)  inset;
}
.picture_verify_code .icon {
  position: absolute;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);;
  cursor: pointer;
  border: 4px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  transition: box-shadow .2s ease-out;
}

.picture_verify_code .icon:active{
  color: #fff;
  border: 4px solid rgba(200, 200, 200, 0.8);
}

.picture_wrap{
  position: absolute;
  width: 100%;
  border-radius: 4px;
 
}

.picture_wrap_canvas{
  position: absolute;
  border-radius: 4px;
  width: 100%;
}
.picture_wrap_code{
  position: absolute;
  border-radius: 4px;
  width: 100%;
}

.picture_wrap span{
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: -1;
}
</style>>