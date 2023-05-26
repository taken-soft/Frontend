<template>
    <div class="flex head">
        <a href="/" class="left" style="height: 3.5rem; display: flex; align-items: center">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 96 960 960" width="3rem">
                <path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z" />
            </svg> -->
            <img src="http://localhost/img/taken" alt="">
            <span style="vertical-align: middle">{{dashboardName}}</span>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props:["dashboardName"],
    methods: {},
    watch: {},
    computed: {},
    mounted() {
        console.log("Header mounted");
    },
};
</script>
<style scoped>
.head {
    padding: 1rem 2rem;
    background: rgba(15,31,168,0);
}
.head a {
  display: inline-block;
color: hsla(230,40%,50%,1);
font-family: 'Righteous', serif;
font-size: 3em; 
text-shadow: .03em .03em 0 hsla(230,40%,50%,1);
}
h1:after {
  content: attr(data-shadow);
  position: absolute;
  top: .06em; left: .06em;
  z-index: -1;
  text-shadow: none;
  background-image:
    linear-gradient(
      45deg,
      transparent 45%,
      hsla(48,20%,90%,1) 45%,
      hsla(48,20%,90%,1) 55%,
      transparent 0
      );
  background-size: .05em .05em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shad-anim 30s linear infinite;
  }

@keyframes shad-anim {
0% {background-position: 0 0}
0% {background-position: 100% -100%}
}
.right {
    gap: 2rem;
}
svg {
    fill: #fff;
}
span{
  margin-left: 3rem;
}
</style>
