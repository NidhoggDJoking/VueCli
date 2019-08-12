<template>
<div>
    <svg class="loader" viewBox="0 0 24 24">
        <circle class="loader__value" cx="12" cy="12" r="10" />
        <circle class="loader__value" cx="12" cy="12" r="10" />
        <circle class="loader__value" cx="12" cy="12" r="10" />
        <circle class="loader__value" cx="12" cy="12" r="10" />
        <circle class="loader__value" cx="12" cy="12" r="10" />
        <circle class="loader__value" cx="12" cy="12" r="10" />
    </svg>
   </div> 
</template>

<script>
export default {
 
}
</script>

<style scoped>

div {
    width: 100%;
    position: absolute;
    z-index: 1000;
    bottom: 25px;
    height: 60%;
    align-items: center;
    text-align: center;
    display: block;
    /*display: flex;
    justify-content: center; */
}

.loader {
  animation: loader-turn 1s linear infinite;
  padding: 1rem;
  max-width: 60px;
  width: 100%;
}
@-webkit-keyframes loader-turn {
  50% {
      transform: rotate(180deg);
  }
  100% {
      transform: rotate(720deg);
  }
}
@keyframes loader-turn {
  50% {
      transform: rotate(180deg);
  }
  100% {
      transform: rotate(720deg);
  }
}
.loader__value {
  animation: loader-stroke 6s linear infinite;
  fill: none;
  stroke-dasharray: 63;
  stroke-dashoffset: 63;
  stroke-linecap: round;
  stroke-width: 4;
}
.loader__value:nth-child(1) {
  stroke: dodgerblue;
}
.loader__value:nth-child(2) {
  stroke: mediumspringgreen;
          animation-delay: 1s;
}
.loader__value:nth-child(3) {
  stroke: crimson;
  animation-delay: 2s;
}
.loader__value:nth-child(4) {
  stroke: peachpuff;
  animation-delay: 3s;
}
.loader__value:nth-child(5) {
  stroke: chocolate;
  animation-delay: 4s;
}
.loader__value:nth-child(6) {
  stroke: pink;
  animation-delay: 5s;
}
@-webkit-keyframes loader-stroke {
  8.3333333333% {
    stroke-dashoffset: 0;
  }
  16.6666666667%, 100% {
    stroke-dashoffset: 63;
  }
}
@keyframes loader-stroke {
  8.3333333333% {
    stroke-dashoffset: 0;
  }
  16.6666666667%, 100% {
    stroke-dashoffset: 63;
  }
}

  
</style>
