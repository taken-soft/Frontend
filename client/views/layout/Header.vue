<template>
   <div class="flex head">
        <a href="#" class="left" style="height: 3.5rem; display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 96 960 960" width="3rem">
                <path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/>
            </svg>
            <span style="vertical-align: middle;">테이큰소프트</span>
        </a>
   </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    methods: {

    },
    watch: {

    },
    computed: {

    },
    mounted() {
        console.log('Header mounted');
    }
}
</script>
<style scoped>
.head{background: #233a53; padding: 1rem 2rem;}
.head a{color: #fff; font-size: 3rem;}
.right{gap: 2rem;}
svg{fill: #fff;}
</style>