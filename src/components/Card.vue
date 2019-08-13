<template>
<div>
    <div style="text-align:center;clear:both;">

</div>

<main class="sortable">
<div class="container">
  <div class="wrapper">
	<ul class="sortable__nav nav">
	  <li>
		<a data-sjslink="all" class="nav__link">
		  所有
		</a>
	  </li>
	  <li>
		<a data-sjslink="flatty" class="nav__link">
		  扁平化
		</a>
	  </li>
	  <li>
		<a data-sjslink="funny" class="nav__link">
		  创意
		</a>
	  </li>
	</ul>
	<div id="sortable" class="sjs-default">
	  <div data-sjsel="flatty">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-1.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 1</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, eius, asperiores. Incidunt sapiente est quae iure...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="flatty">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-2.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 2</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae necessitatibus, dolorem similique vero explicabo...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="funny">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-3.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 3</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, placeat voluptate, fuga tenetur eos ducimus animi porro...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="flatty">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-4.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 4</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloremque quisquam, obcaecati unde nam est quos...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="flatty">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-5.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 5</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corporis hic minima nisi reprehenderit...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="funny">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-6.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 6</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptatibus, id, deserunt inventore...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="flatty">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-7.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 7</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum enim beatae vero culpa, fuga, magni sunt dolores nam...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="flatty">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-8.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 8</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae numquam, blanditiis necessitatibus...
			</p>
		  </div>
		</div>
	  </div>
	  <div data-sjsel="funny">
		<div class="card">
		  <img class="card__picture" src="../image/Card/item-9.jpg" alt="">
		  <div class="card-infos">
			<h2 class="card__title">Example 9</h2>
			<p class="card__text">
			  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci voluptatum laborum officiis...
			</p>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</div>
</main>
</div>
</template>

<script>
import {Sortable,_extends,_toConsumableArray,_classCallCheck} from '../js/sortable.js';
import { setTimeout } from 'timers';
export default {
	created(){
		// require('../js/sortable.js')  也行
		HTMLElement.prototype.sortablejs = HTMLElement.prototype.sortablejs || function(t) { return new Sortable(_extends({ parent: this }, t)) };
	},
    mounted(){
		document.querySelector('#sortable').sortablejs();
	},
	destroyed(){
		// document.querySelector('#sortable').reset()
	}
}
</script>

<style scoped>
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  font: normal 300 1.4em / 1.2 'Open-sans', helvetica, sans-serif;
  color: #111;
}
a{
  text-decoration: none;
  color: #111;
  cursor: pointer;
}
ol,
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
img{
  max-width: 100%;
}
b,
strong{
  font-weight: 600;
}
hr{
  background: #111;
  box-shadow: none;
  border: none;
  height: 1px;
  width: 100%;
  margin: 10px 0;
}
::selection{
  background: #ff7675;
  color: #fff;
}
::-moz-selection{
  background: #ff7675;
  color: #fff;
}

.container{
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 10px;
}
.wrapper{
  padding: 20px 0;
}
.card{
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  transition: box-shadow .2s ease-in-out;
}
.card__picture{
  display: block;
  width: 100%;
  height: auto;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card-infos{
  padding: 20px;
  background: #fff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.card__title{
  font-family: 'Hind';
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 10px;
}
.card__text{
  font-size: 1.4rem;
  font-weight: 300;
  margin: 0;
  color: #86888A;
}
.card__text--high{
  font-weight: 600;
}

.header{
  background: #ff7675;
  height: 160px;
  display: flex;
}
.header__title{
  margin: auto;
  font-weight: 300;
  font-size: 3.2rem;
  color: #fff;
}
.header__title--high{
  font-weight: 600;
}

.sortable__nav{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.nav__link{
  padding: 0 20px 4px;
  color: #a9a9a9;
  font-size: 1rem;
  font-weight: 300;
  display: block;
  border-bottom: 2px solid transparent;
}
.nav__link.is-active{
  border-color: #ff7675;
}

.footer__list.list{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list__item.item{
  display: flex;
}
.item__link.link{
  margin: 0;
}
.item__link.link:not(:first-child){
  margin-left: 20px;
}
.link__icon{
  height: 2rem;
  width: 2rem;
}
body, html { font-size: 100%; 	padding: 0; margin: 0;}

/* Reset */
*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

body{
	background: #494A5F;
	color: #D5D6E2;
	font-weight: 500;
	font-size: 1.05em;
	font-family: "Microsoft YaHei","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif;
}
.sjs-default {
    position: relative;
    padding: 0;
    margin: 0;
    /* opacity: 0; */
    transition: height .2s ease-out, opacity .2s ease-out .2s
}

[data-sjsel] {
    /* opacity: 0; */
    position: absolute;
    top: 0;
    left: 0;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out, -webkit-transform .2s ease-out
}
</style>
