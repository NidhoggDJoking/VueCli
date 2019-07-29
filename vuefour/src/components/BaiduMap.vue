<template>
 <baidu-map class="bm-view" v-bind="mapOptions">
 	  <bm-control :offset="{width: '10px', height: '10px'}">
	    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
	   	    </bm-auto-complete>
	  </bm-control>
	  <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search> -->
</baidu-map>
 
</template>
 
<script>
// https://dafrok.github.io/vue-baidu-map/#/
// vue-baidu-map 官网
import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmView,
    BmControl,
    // BmAutoComplete,
    // BmLocalSearch
  },
  data() {
	   return {
	     mapOptions: {
	       ak: 'Z7YUjqYw69iFb7wFNc4LAbHSvp4e9a1U',
	       center: '长沙',
		   scrollWheelZoom: true,
		   zoom:15,
	     },
	    //  keyword: ''
	   }
	},
	methods: {
	
	}
}
</script>
 
<style>
.bm-view {
  width: 100%;
  height: 300px;
}
bm-local-search{
    border: 5px solid red;
}
</style>