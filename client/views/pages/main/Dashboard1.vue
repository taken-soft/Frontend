<template>
    <div class="grid2_2">
        <Layout class="layout" v-for="(item, index) in 4" :key="index" :layout-seq="item" />
        <!-- <div :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">1</div>
        <div :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">2</div>
        <div :class="{ active: activeTab === 'tab3' }" @click="activeTab = 'tab3'">3</div>
        <div :class="{ active: activeTab === 'tab4' }"  @click="activeTab = 'tab4'">4</div> -->
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





