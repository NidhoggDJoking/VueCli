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
    <DatePicker 
        class="active"
        is-expanded
        :select-attribute="selectDragAttribute"
        :drag-attribute="selectDragAttribute"
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
        end: new Date(2019, 9, 19)    
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
}
</script>

<style scoped>
.active{
    top: 0 !important;
    position: absolute !important;
}
</style>