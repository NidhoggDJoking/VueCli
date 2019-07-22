<template>
<div>
    info components
    <button type="button" @click="add()">按钮</button>
</div>
</template>

<script>
import store from '@/store/test'
export default {
    name:"Info",
    store,
    methods:{
        add(){
            console.log("daying")
            store.commit('jshuan')
        }
    }
}
</script>

<style>

</style>
