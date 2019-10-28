<template>
<div>
    <h2 align="center">v-calendar</h2>
        <!-- API: -->
        <!-- "mode"
            单一日期("single")
            多个日期("multiple")
            日期范围("range") -->
        <!-- :disabled-dates='{ weekdays: [1, 7] }' -->
        <!-- :min-date='new Date()' 过去时间不可取 -->
        <!-- is-inline 不显示输入框 -->
        <!-- :drag-attribute="selectDragAttribute" -->
        <!-- :select-attribute="selectDragAttribute" -->
    <DatePicker 
        class="active"
        is-expanded
   
   
        mode='range'
        v-model="date"
        :rows="2"
        :min-date='new Date()'
        is-inline
        />
        <h2 align="center">v-calendar</h2>
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show">内容</van-popup> -->
    </div>
    
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
    components: {
    // 日历
    Calendar,
    // 日期选择器
    DatePicker
  },
  
  data() {
  return {
      date: {
        start: new Date(), // 月份是从0开始的
        // end: new Date(2019, 9, 19)
        end: new Date()    
      },
  }
},
computed: {
    selectDragAttribute() {
      return {
        popover: {
          visibility: 'hover',
          isInteractive: false, // Defaults to true when using slot
        },
      };
    },
  },
  watch:{
    date:function(){
      console.log(this.date)
      console.log(this.date.start)
      console.log(this.date.end)
    }
  }
}
</script>

<style >
/* vc-day-content vc-focusable vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full 标准*/
/* vc-day-content vc-focusable vc-font-bold vc-text-white vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full 实体 */
/* vc-day-content vc-focusable vc-font-bold vc-text-blue-900 vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full  虚体 */
/* vc-day-content vc-focusable vc-font-bold vc-text-blue-900 vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full 中间选择层 */

/*  标准*/
/*  vc-font-bold vc-text-white 实体 */
/*  vc-font-bold vc-text-blue-900 虚体 */
/*  vc-font-bold vc-text-blue-900 中间选择层 */



/* .active{
    top: 0 !important;
    position: absolute !important;
} */

/* .vc-font-bold.vc-text-white{

}
.vc-day-content:hover {

    color: rgba(157, 206, 255, 0.3);
}
*/
/* .vc-font-bold.vc-text-white:before{
content: '\6B62';
    position: absolute;
    color: #fff;
    z-index: 100;
    background: #3182ce;
    height: 36px;
    border-radius: 50%;
}  */
/* .vc-font-bold.vc-text-white{
    color: transparent;
} */
/* .vc-font-bold.vc-text-blue-900::before{
    content: '起';
    position:absolute;
    top:1px;
    left: 1px;
} */

.vc-reset, .vc-reset * {
    line-height: 2.5!important;
}
</style>