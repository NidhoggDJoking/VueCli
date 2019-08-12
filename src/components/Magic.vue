<template>
<div id="magic">
    <div style="text-align:center;clear:both;">
    </div>
    <div class="cube-container">
        <div class="cube initial-position">
            <img class="cube-face-image image-1" src="../image/Magic/c1300.jpg">
            <img class="cube-face-image image-2" src="../image/Magic/c2300.jpg">
            <img class="cube-face-image image-3" src="../image/Magic/c3300.jpg">
            <img class="cube-face-image image-4" src="../image/Magic/c4300.jpg">
            <img class="cube-face-image image-5" src="../image/Magic/c5300.jpg">
            <img class="cube-face-image image-6" src="../image/Magic/c6300.jpg">
        </div>
    </div>
    <!-- <h2>点击下面的图像旋转立方体</h2> -->
    <div class="image-buttons">
        <input v-for="(item,index) in pic" :key="index" type="image" :class="'show-image-'+(index+1)" :src='item.src'>

        <!-- <input type="image" class="show-image-1" src="../image/Magic/c1300.jpg">
        <input type="image" class="show-image-2" src="../image/Magic/c2300.jpg">
        <input type="image" class="show-image-3" src="../image/Magic/c3300.jpg">
        <input type="image" class="show-image-4" src="../image/Magic/c4300.jpg">
        <input type="image" class="show-image-5" src="../image/Magic/c5300.jpg">
        <input type="image" class="show-image-6" src="../image/Magic/c6300.jpg"> -->
    </div>
</div>
</template>

<script>
export default {
    mounted(){
        window.addEventListener("DOMContentLoaded", function () {

        var cube = document.querySelector(".cube"),
            imageButtons = document.querySelector(".image-buttons");
        var cubeImageClass = cube.classList[1];

        //Add click event listener to image buttons container
        imageButtons.addEventListener("click", function (e) {

            //Get node type and class value of clicked element
            var targetNode = e.target.nodeName,
                targetClass = e.target.className;

            //Check if image input has been clicked and isn't the currently shown image
            if (targetNode === "INPUT" && targetClass !== cubeImageClass) {

                console.log("Show Image: " + targetClass.charAt(11));

                //Replace previous cube image class with new class
                cube.classList.replace(cubeImageClass, targetClass);

                //Update cube image class variable with new class
                cubeImageClass = targetClass;
            }
        });
        console.log("矩阵魔方");
    });
    this.star();
    },
    data(){
        return{
            // 不知道为何使用 input type="image" 的图片无法引用所以使用require引用，成功
            pic:[
                {src:require("../image/Magic/p1100.jpg")},
                {src:require("../image/Magic/p2100.jpg")},
                {src:require("../image/Magic/p3100.jpg")},
                {src:require("../image/Magic/p4100.jpg")},
                {src:require("../image/Magic/p5100.jpg")},
                {src:require("../image/Magic/p6100.jpg")},
            ],
        }
    },
    methods:{
        star(){
            var cube = document.querySelector(".cube"),
            imageButtons = document.querySelector(".image-buttons");
        var cubeImageClass = cube.classList[1];

        //Add click event listener to image buttons container
        imageButtons.addEventListener("click", function (e) {

            //Get node type and class value of clicked element
            var targetNode = e.target.nodeName,
                targetClass = e.target.className;

            //Check if image input has been clicked and isn't the currently shown image
            if (targetNode === "INPUT" && targetClass !== cubeImageClass) {

                console.log("Show Image: " + targetClass.charAt(11));

                //Replace previous cube image class with new class
                cube.classList.replace(cubeImageClass, targetClass);

                //Update cube image class variable with new class
                cubeImageClass = targetClass;
            }
        });
            document.querySelector("body").style.background= '#333333';
        }
    },
      beforeRouteLeave (to, from, next) {
        document.querySelector("body").style.background= '#f9f9f9';
        next()
    }
}
</script>

<style>
body {
	/* font-family: "Montserrat", Arial, sans-serif;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	min-height: 100vh;
	padding: 4rem 2rem;
	color: #fafafa; */
	/* background-color: #080808; */
    
} 
#magic{
    transform: scale(0.8);
    font-size: 10px;
}

.cube-container {
	position: relative;
	width: 19rem;
    height: 21rem;
    margin: 1rem auto 5rem;
	perspective: 100rem;
}

.cube {
	position: absolute;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 1s cubic-bezier(0.32, 0.05, 0.35, 1.6);
}

.cube-face-image {
	display: block;
	position: absolute;
	/* opacity: 0.95; */
	/* border: 0.2rem solid #fafafa; */
	box-shadow: 0 0 0.5rem #fff, 0 0 1.5rem #ff42e8, 0 0 3rem #fff;
}

.image-buttons {
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-gap: 1.5rem;
	justify-content: center;
}

.image-buttons input {
	border: 0.2rem solid #fafafa;
}

.image-buttons input:focus {
	outline: none;
	border: 0.1rem solid var(--border-color);
}

/* Transform images to create cube */

.image-1 {
	transform: translateZ(11rem);
}

.image-2 {
	transform: rotateX(-180deg) translateZ(11rem);
}

.image-3 {
	transform: rotateY(90deg) translateZ(11rem);
}

.image-4 {
	transform: rotateY(-90deg) translateZ(11rem);
}

.image-5 {
	transform: rotateX(90deg) translateZ(11rem);
}

.image-6 {
	transform: rotateX(-90deg) translateZ(11rem);
}

/* Transform cube to show correct image */

.cube.initial-position {
	transform: translateZ(-11rem) translateY(-2rem) rotateX(-15deg) rotateY(18deg) rotateZ(2deg);
}

.cube.show-image-1 {
	transform: translateZ(-11rem);
}

.cube.show-image-2 {
	transform: translateZ(-11rem) rotateX(180deg);
}

.cube.show-image-3 {
	transform: translateZ(-11rem) rotateY(-90deg);
}

.cube.show-image-4 {
	transform: translateZ(-11rem) rotateY(90deg);
}

.cube.show-image-5 {
	transform: translateZ(-11rem) rotateX(-90deg);
}

.cube.show-image-6 {
	transform: translateZ(-15rem) rotateX(90deg);
}
</style>
