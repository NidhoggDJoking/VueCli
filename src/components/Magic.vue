<template>
<div>
    <div style="text-align:center;clear:both;">
    </div>
    <div class="cube-container">
        <div class="cube initial-position">
            <img class="cube-face-image image-1" src="../image/Magic/p1300.jpg">
            <img class="cube-face-image image-2" src="../image/Magic/p2300.jpg">
            <img class="cube-face-image image-3" src="../image/Magic/p3300.jpg">
            <img class="cube-face-image image-4" src="../image/Magic/p4300.jpg">
            <img class="cube-face-image image-5" src="../image/Magic/p5300.jpg">
            <img class="cube-face-image image-6" src="../image/Magic/p6300.jpg">
        </div>
    </div>
    <h2>Click the images below to rotate the cube</h2>
    <div class="image-buttons">
        <input type="image" class="show-image-1" src="../image/Magic/p1300.jpg">
        <input type="image" class="show-image-2" src="../image/Magic/p2300.jpg">
        <input type="image" class="show-image-3" src="../image/Magic/p3300.jpg">
        <input type="image" class="show-image-4" src="../image/Magic/p4300.jpg">
        <input type="image" class="show-image-5" src="../image/Magic/p5300.jpg">
        <input type="image" class="show-image-6" src="../image/Magic/p6300.jpg">
    </div>
</div>
</template>

<script>
export default {
    created(){
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
});
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:500);

:root {
	/* Base font size */
	font-size: 10px;

	/* Border color variable */
	--border-color: #e70;
}

* {
	box-sizing: border-box;
}

body {
	font-family: "Montserrat", Arial, sans-serif;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	min-height: 100vh;
	padding: 4rem 2rem;
	color: #fafafa;
	background-color: #080808;
}

h1 {
	font-size: 4rem;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2.5rem;
}

.cube-container {
	position: relative;
	width: 30rem;
	height: 30rem;
	margin: 5rem auto 6rem;
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
	box-shadow: 0 0 0.5rem #fff, 
				0 0 1.5rem var(--border-color),
				0 0 3rem var(--border-color);
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
	border: 0.2rem solid var(--border-color);
}

/* Transform images to create cube */

.image-1 {
	transform: translateZ(15rem);
}

.image-2 {
	transform: rotateX(-180deg) translateZ(15rem);
}

.image-3 {
	transform: rotateY(90deg) translateZ(15rem);
}

.image-4 {
	transform: rotateY(-90deg) translateZ(15rem);
}

.image-5 {
	transform: rotateX(90deg) translateZ(15rem);
}

.image-6 {
	transform: rotateX(-90deg) translateZ(15rem);
}

/* Transform cube to show correct image */

.cube.initial-position {
	transform: translateZ(-15rem) translateY(-2rem) rotateX(-15deg) rotateY(18deg) rotateZ(2deg);
}

.cube.show-image-1 {
	transform: translateZ(-15rem);
}

.cube.show-image-2 {
	transform: translateZ(-15rem) rotateX(180deg);
}

.cube.show-image-3 {
	transform: translateZ(-15rem) rotateY(-90deg);
}

.cube.show-image-4 {
	transform: translateZ(-15rem) rotateY(90deg);
}

.cube.show-image-5 {
	transform: translateZ(-15rem) rotateX(-90deg);
}

.cube.show-image-6 {
	transform: translateZ(-15rem) rotateX(90deg);
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video
{
    font: inherit;
    font-size: 100%;

    margin: 0;
    padding: 0;

    vertical-align: baseline;;

    border: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section
{
    display: block;
}

body
{
    line-height: 1;
}

ol,
ul
{
    list-style: none;
}

blockquote,
q
{
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after
{
    content: '';
    content: none;
}

table
{
    border-spacing: 0;;
    border-collapse: collapse;
}

</style>
