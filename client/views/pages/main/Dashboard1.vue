<template>
    <div class="grid2_2">
        <Layout class="layout" v-for="(item, index) in 4" :key="index" :layout-seq="item" />
    </div>
</template>

<script>
import Layout from '../../component/Layout.vue';

export default {
    data () {
        return {
            activeTab: "tab1",
        }
    },
    components:{
        Layout
    },
    methods: {
        setActiveTab(tab) {
      this.activeTab = tab;
    },
    },
    watch: {
    },
    computed: {

    },
    mounted() {
        console.log('Main2 mounted');
    }
}
</script>
<style scoped>

</style>





