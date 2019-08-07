<template>
     <div class='selector spring' @click="clickRing()">
  <ul>
      <li 
        v-for="(item,index) in data"
        :key="index">
            <input :id='index' type='checkbox' :value="item.text" v-model="container">
            <label :for='index'>{{item.text}}</label>
      </li>

    <!-- <li>
        <input id='1' type='checkbox'>
        <label for='1'>Option 1</label>
        </li> -->
  </ul>
  <button>Click</button>
</div>
</template>

<script>
import jquery from 'jquery';
export default {
    mounted(){
        // let that = this;
        // setTimeout(function() { that.toggleOptions('.selector'); }, 150);
    },
    data(){
        return {
            angleStart:-360,
            data:[
                {text:"谷玄"},{text:"印池"},
                {text:"填盍"},{text:"郁非"},
                {text:"密罗"},{text:"裂章"},
                {text:"暗月"},{text:"岁正"}
            ],
            container:[],
            state:false,
        }
      },
      watch:{
          container:function(){
              if(this.container[7]){
                  jquery('.selector').addClass('spring');
                  this.state = false;
                  this.toggleOptions();
                  this.container.length = 0
                  // this.container = []
                  jquery('li>input').prop("checked",false);
              }
          }
      },

    methods:{
        toggleOptions(s='.selector') {
            jquery(s).toggleClass('open');
            var li = jquery(s).find('li');
            var deg = jquery(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
            for(var i=0; i<li.length; i++) {
                var d = jquery(s).hasClass('half') ? (i*deg)-90 : i*deg;
                jquery(s).hasClass('open') ? this.rotate(li[i],d) : this.rotate(li[i],this.angleStart);
            }
        },
        rotate(li,d) {
            jquery({d:this.angleStart}).animate({d:d}, {
                step: function(now) {
                    jquery(li)
                    .css({ transform: 'rotate('+now+'deg)' })
                    .find('label')
                        .css({ transform: 'rotate('+(-now)+'deg)' });
                }, duration: 0
            });
        },
        clickRing(){
            if(this.state){
                 this.toggleOptions();
            }else{
                jquery('.selector').removeClass('spring');
                this.state = true;
            }
        }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald:400,300,700);

.selector.spring{
    margin-top: 100px;
    margin-left: 75px;
    transform: scale(0.4);
}
.selector.spring button{
    font-size: 35px;
    background: rgb(63, 220, 228);
}
.selector {
  transition: all 0.5s;
  position: absolute;
  left: 50%;
  /* top: 50%; */
  top:60%;
  width: 140px;
  height: 140px;
  margin-top: -70px;
  margin-left: -70px;
}
.selector, .selector button {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
}

.selector button {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #428bca;
  border-radius: 50%;
  border: 0;
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  transition: all .1s;
}

.selector button:hover {
  background: #3071a9;
}

.selector button:focus {
  outline: none;
}

.selector ul {
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
}

.selector li {
  position: absolute;
  width: 0;
  height: 100%;
  margin: 0 50%;
  transform: rotate(-360deg);
  transition: all 0.8s ease-in-out;
}

.selector li input {
  display: none;
}

.selector li input + label {
  /* position: absolute; */
  /* 使用fixed不用担心展开时挤压别的元素 */
  position:fixed;
  left: 50%;
  bottom: 100%;
  width: 0;
  height: 0;
  line-height: 1px;
  margin-left: 0;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 1px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.8s ease-in-out, color 0.1s, background 0.1s;
}

.selector li input + label:hover {
  background: #f0f0f0;
}

.selector li input:checked + label {
  background: #5cb85c;
  color: white;
}

.selector li input:checked + label:hover {
  background: #449d44;
}

.selector.open li input + label {
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin-left: -40px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

</style>
