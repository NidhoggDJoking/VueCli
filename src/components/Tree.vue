<template>
    <canvas @click="tree"></canvas>
</template>

<script>
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
export default {
    mounted(){
        this.start()
    },
     data(){
          return {
              running:false,
          }
    },
    methods:{
       tree(){
           this.start()
       },
       async start(){
            if (this.running === true) return;
            const w = (document.querySelector("canvas").width = document.querySelector("canvas").offsetWidth * 2);
                const h = (document.querySelector("canvas").height = document.querySelector("canvas").offsetHeight * 2);
                document.querySelector("canvas").getContext("2d").fillStyle = "#738073"; //设置背景颜色
                document.querySelector("canvas").getContext("2d").fillRect(0, 0, w, h); //绘制“被填充”的矩形
                    for (let i = 0; i < 50; i++) {
                document.querySelector("canvas").getContext("2d").save();
                document.querySelector("canvas").getContext("2d").translate(w * 0.2 + Math.random() * w * 0.6, h);
                document.querySelector("canvas").getContext("2d").scale(-20 - i * 0.5, -20 - i * 0.5);
                document.querySelector("canvas").getContext("2d").fillStyle = `hsl(0, 0%, ${100 - i * 2}%)`;
                this.branch(0);
                document.querySelector("canvas").getContext("2d").restore();
                await this.requestAnimationFrame();
            }
            this.running = false;
            },
        branch(l){
            if (l > 8) return;
            document.querySelector("canvas").getContext("2d").save();
            document.querySelector("canvas").getContext("2d").scale(1 - l * 0.1, 0.5);
            document.querySelector("canvas").getContext("2d").fillRect(-0.5, -0.5, 1, 1);
            document.querySelector("canvas").getContext("2d").restore();
            if (Math.random() * 1.04 < 0.04) {
                document.querySelector("canvas").getContext("2d").save();
                document.querySelector("canvas").getContext("2d").translate(-0.1, 0);
                document.querySelector("canvas").getContext("2d").rotate((Math.random() * 5 + 15) * Math.PI / 180);
                document.querySelector("canvas").getContext("2d").translate(0, 0.3);
                document.querySelector("canvas").getContext("2d").scale(0.7, 0.7);
                this.branch(l + 1);
                document.querySelector("canvas").getContext("2d").restore();
                document.querySelector("canvas").getContext("2d").translate(0.1, 0);
                document.querySelector("canvas").getContext("2d").rotate((-Math.random() * 15 - 10) * Math.PI / 180);
                document.querySelector("canvas").getContext("2d").translate(0, 0.3);
                document.querySelector("canvas").getContext("2d").scale(0.7, 0.7);
                return this.branch(l + 1);
            } else {
                document.querySelector("canvas").getContext("2d").rotate((Math.random() * 10 - 5) * Math.PI / 180);	
                document.querySelector("canvas").getContext("2d").translate(0, 0.3);
                document.querySelector("canvas").getContext("2d").scale(1, 1);
                return this.branch(l);
            }
        },
        requestAnimationFrame(){
            return new Promise(resolve => {
                window.requestAnimationFrame(resolve);
            });
        }
    },
}
</script>

<style>
body,
html {
	position: absolute;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: #fff;
	user-select: none;
}
canvas {
	position: absolute;
	width: 100%;
	height: 100%;
	user-select: none;
	touch-action: none;/*用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）*/
	content-zooming: none;
	background: #fff;
	cursor: pointer;
}
</style>
