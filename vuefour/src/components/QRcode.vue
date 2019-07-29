<template>
    <div class="hello">
        <input v-model="message">
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

<style>

</style>