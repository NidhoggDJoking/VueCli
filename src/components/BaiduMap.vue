<template>
 <baidu-map class="bm-view" v-bind="mapOptions" @ready="handler">
 	  <bm-control :offset="{width: '10px', height: '10px'}">
	    <!-- <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
	   	    </bm-auto-complete> -->
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
		   center: '北京',
		   // center: {lng: 0, lat: 0},
		   scrollWheelZoom: true,
		   zoom:13,
	     },
	    //  keyword: ''
	   }
	},
	methods: {
		handler ({BMap, map}) {
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var marker = new BMap.Marker(r.point);
					map.addOverlay(marker);
					marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
					map.panTo(r.point);
					
					// alert('您的位置：'+r.point.lng+','+r.point.lat);
				}
				else {
					console.error('百度:failed'+this.getStatus());
				}        
			},{enableHighAccuracy: true})
      
    	}
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