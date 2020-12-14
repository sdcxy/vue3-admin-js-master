/****************************************************************
 *													鼠标火焰样式		
 * 														
****************************************************************/

window.onload = () => { 
  

  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  let canvas = document.getElementById("canvas");
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext("2d");

  let mouse = {};
  let particles = [];

  let particle_count = 50;

  class Particle { 
    constructor() { 
      this.speed = { 
        x: -2.5 + Math.random() * 5,
        y: -15 + Math.random() * 10
      }
      if (mouse.x && mouse.y) {
        this.location = {
          x: mouse.x,
          y: mouse.y
        }
      } else { 
        this.location = { 
          x: width / 2,
          y: height / 2
        }
      }
      // radius range = 10-30
      this.radius = 10 + Math.random() * 20;
      // life range = 20-30
      this.life = 20 + Math.random() * 10;
      this.remaining_life = this.life;
      //colors
      this.r = Math.round(Math.random()*255);
      this.g = Math.round(Math.random()*255);
      this.b = Math.round(Math.random()*255);
    }
  }

  for (let i = 0; i < particle_count; i++) { 
    particles.push(new Particle())
  }

  const draw = () => {
    ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, width, height);
		ctx.globalCompositeOperation = "lighter";

    for (let i = 0; i < particles.length; i++) { 
      let p = particles[i];
      ctx.beginPath();
      p.opacity = Math.round(p.remaining_life / p.life * 100) / 100;
      let gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
      gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			ctx.fillStyle = gradient;
			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();

      p.remaining_life--;
      p.radius--;
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;

      if (p.remaining_life < 0 || p.radius < 0) { 
        particles[i] = new Particle();
      }
    }
  }

  const track_mouse = (e) => { 
    mouse.x = e.pageX;
		mouse.y = e.pageY;
  }

  canvas.addEventListener("mousemove", track_mouse, false);

  setInterval(draw, 30);
}