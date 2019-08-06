<template>
    <div class="hello">
        <input v-model="message" class="qrinput">
        <canvas id="msg"></canvas>
    </div>
</template>

<script>
    // 引入qrcode
    import QRCode from 'qrcode'
    export default{
      data(){
          return {
              message:'',
          }
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
          },
      },
  }
</script>

<style scoped>
.qrinput{
    width: 100px;
    margin: 0px auto;
    display: block;
}
#msg{
    margin: 0px auto;
    display: block;
}
</style>