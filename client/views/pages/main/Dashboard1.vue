<template>
    <div class="grid2_2">
        <div class="layout" v-for="(item, index) in 4" :key="index">
            <!-- {{ item }} -->
            <!-- 23:10 -->
            <div class="layoutContainer">
                <div class="layoutContent">

                </div>
                
            </div>
        </div>
        <!-- <div :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">1</div>
        <div :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">2</div>
        <div :class="{ active: activeTab === 'tab3' }" @click="activeTab = 'tab3'">3</div>
        <div :class="{ active: activeTab === 'tab4' }"  @click="activeTab = 'tab4'">4</div> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeTab: "tab1",
        }
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
.layout{
    background: white;
    min-height: 20rem;
    border-radius: 5px;
    height: calc(50vh - 6rem);
}
.layoutContainer{
    position: relative;
    width: 100%;
    padding-bottom: calc(100% * 10 / 23);
}
.layoutContent{
    position: absolute;
    background: #f5f5f5;
    border-color: #f0f0f0;
    border-width: 1px;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>





