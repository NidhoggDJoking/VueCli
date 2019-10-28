<template>
  <div>
    <button class="btn" @click="selectDate">时间段选择模式</button>
    <p>已选日期：{{this.date}}</p>
    <calendar
      :minDate="minDate"
      :show.sync="show"
      :defaultDate="defaultDate"
      mode="during"
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      minDate: new Date(), //设置过期时间为当天
      show: false,
      date: "",
      defaultDate: new Date()
    };
  },
  methods: {
    selectDate() {
      this.show = true;
      this.date = "";
    },
    onChange(date) {
      this.date = JSON.stringify(date.map(item => item.format("YYYY-MM-DD")));
      // console.log(date[0].$y+"-"+(date[0].$m+1)+"-"+date[0].$D);
      // if(date.length==2){}
    }
  }
};
// 或者在.vue文件中单独引入注册
// import {calendar,inlineCalendar} from 'vue-mobile-calendar';
// export default {
//   components: {
//     calendar,
//   },
// };
</script>
<style scoped>
.btn {
  display: block;
  margin: 0.8rem auto auto;
  width: 10rem;
  height: 3rem;
  background: #f8673b;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #fff;
}
p {
  font-size: 0.8rem;
  font-weight: 700;
}
</style>
