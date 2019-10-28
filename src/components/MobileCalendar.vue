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
      defaultDate: ["2019-07-02", "2019-07-05"]
    };
  },
  methods: {
    selectDate() {
      this.show = true;
      this.date = "";
    },
    onChange(date) {
      this.date = JSON.stringify(date.map(item => item.format("YYYY-MM-DD")));
    }
  }
};
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
