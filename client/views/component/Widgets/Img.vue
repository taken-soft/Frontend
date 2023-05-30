<template>
    <img v-if="type" src="http://localhost/img/factory" />
    <img v-else src="http://localhost/img/factory2">
</template>
<script>
export default {
    data() {
        return {};
    },
    props: ["layoutSeq"],
    computed:{
      type(){
        console.log(this.layoutSeq);
        return this.layoutSeq == 1
      }
    }
};
</script>
<style scoped></style>
