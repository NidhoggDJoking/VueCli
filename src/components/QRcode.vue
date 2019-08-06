<template>
    <div class="hello">
        <input v-model="message" class="qrinput">
        <canvas id="msg"></canvas>
        <div class="canvasToPng">
        </div>
        <button @click="savePic()">点击下载二维码</button>
    </div>
</template>

<script>
    // 引入qrcode(这个配置太少了)
    import QRCode from 'qrcode';
    import $ from 'jquery';
    export default{
      data(){
          return {
              message:'',
          }
      },
      methods: {
        //canvas 转化成图片
        init() {
            console.log("init方法调用")
            var mycanvas=document.getElementsByTagName('canvas')[0];
            var img = this.convertCanvasToImage(mycanvas);
            // console.log(img)
            $('.canvasToPng').html(img);
            // $('img').css('border', '10px solid #ffffff');
        },
        convertCanvasToImage(canvas) {
            console.log("convertCanvasToImage方法调用")
            var image = new Image();
            image.src = canvas.toDataURL("image/png");
            return image;
            //返回的为data:image/png;base64格式
        },
            // 写法二:
            // this.imgUrl=mycanvas[0].toDataURL('image/png')
            // 绑定<img :src="imgUrl"/>和 data imgUrl:''

        savePic(){
            //点击下载图片功能
            var myCanvas = document.getElementsByTagName('canvas')[0];
            //创建一个a标签节点
            var a = document.createElement("a")
            //设置a标签的href属性（将canvas变成png图片）
            a.href = myCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            //设置下载文件的名字
            a.download = "二维码.png"
            //点击
            a.click()
        },
      },
      created() {
        //用于单页vue启动的适应问题
        var oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0';
        oMeta.name = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
    },
      watch:{
          // 通过监听获取数据
          message(val){
              // 打印获取到的数据
              console.log(val)
              
              // 获取页面的canvas
              var msg= document.getElementById('msg')
              // 将获取到的数据（val）画到msg（canvas）上
              QRCode.toCanvas(msg, val, function (error) {
                    console.log(error)
              })
              this.init()
          },
      },
  }
</script>

<style>

.qrinput{
    width: 80%;
    height: 1.5rem;
    margin: 0px auto;
    display: block;
    border-radius: 3px;
    border: 1px solid #0ec1f3;
}
#msg{
   /* opacity: 0; */
   display: none;
}
.canvasToPng{
    margin: 0px auto;
    display: block;
}
.canvasToPng img{
    /* widows: 180px;
    height: 180px; */
    margin: 0px auto;
    display: block;
}
body{
    background:#e0e0e0;
}
</style>