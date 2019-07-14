<template>
<li @click="del">{{com}}</li>
</template>

<script>
export default{
        // props:["com"]
         props: {
            com: String,
            index:String,
        },
        methods:{
            del() {
               this.$emit('delete',this.index)
            }
        }
}
</script>

