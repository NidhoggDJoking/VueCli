<template>
    <div class="top" :style="{'background-image':'url(' + imgurl + ')'}" :alt='alt'>
        <div class="info">
            <div class="user-avatar">
                <img :src="detection(src)">
            </div>
            <div class="user-name"><span>{{name}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
  // props:['name','src'],
  data(){
    return {
            // imgurl:{
            //     'background-image': require("../image/BackgroundWall/2.gif")
            // },
            num:Math.ceil(Math.random()*4),//可用
            imgurl:require('../image/BackgroundWall/1.gif'),
            test:'测试数据',
            alt:'',
    }
  },
  props:{
        name:String,
        src:String,
    },
       methods: {
        // 头像图片是否可用
        detection(src){
            var ImgObj = new Image();
            ImgObj.src = src;
            // console.log(ImgObj.fileSize)
            // console.log(ImgObj.width)
            // console.log(ImgObj.height)
            // if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
            if(ImgObj.fileSize > 0 && (ImgObj.width > 0 || ImgObj.height > 0)) {
                return src;
            } else {
                console.log(src)
                return 'https://avatars0.githubusercontent.com/u/38490462?s=460';
            }
            
        },
        fatherUse(text='父组件使用子组件方法'){
            console.log(text)
        }
    },
    computed: {
        altdata(){
            return this.test ;
        }
    },
}
</script>

<style>
.top{ 
    background-color:#ED5564;
    /* background-image: url(../image/BackgroundWall/2.gif); */
    background-size: cover;
    text-align: center;
    width: 100%;
    height: 10rem;
    position: relative;
    z-index:1;
    box-shadow: 0px 1px 5px 0px #232323;
}
.info {
    width: 12rem;
    height: 6rem;
    margin: -3.5rem 0 0 -6rem;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
}
.user-avatar {
    background-color: #FFF;
    width: 5rem;
    height: 5rem;
    margin: 0 auto; 
    border-radius: 100%;
    box-shadow: 0px 0px 9px 1px #545454;
}
.user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.user-avatar:active{
    box-shadow: 0px 0px 12px 5px #7d7d7d;
}
.user-name span{
    color: #FFF;
    font-weight:600;
    font-size: 1em;
}
</style>
