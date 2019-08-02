<template>
    <div id="progress">
            <span></span>
        </div>
</template>

<script>
import $ from 'jquery';
export default {
    created() {
        $({property: 0}).animate({property: 100}, {
                duration: 1000,
                step: function() {
                    var percentage = Math.round(this.property);
 
                    $('#progress').css('width',  percentage+"%");
 
                     if(percentage == 100) {
                         $("#progress").addClass("done");//完成，隐藏进度条
                     }
                }
            });
    },
}
</script>
<style>
#progress {
    position:fixed;
    height: 2px;
    background:#0f8bff;
    transition:opacity 500ms linear
}
#progress.done {
    opacity:0
}
#progress span {
    position:absolute;
    height:2px;
    -webkit-box-shadow:#0f8bff 1px 0 3px 1px;
    box-shadow:#0f8bff 1px 0 1px 1px;
    border-radius:100%;
    opacity:1;
    width:100%;
    right:-10px;
    -webkit-animation:pulse 2s ease-out 0s infinite;
    animation:pulse 1s ease-out 0s infinite;
}
 
@keyframes pulse {
    30% {
        opacity:.2;
    }
    45%{
        opacity:.3;
    }
    60% {
        opacity:.1;
    }
    100% {
        opacity:.2;
    }
}
</style>