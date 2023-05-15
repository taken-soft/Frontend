<template>
    <div class="grid2_2">
        <div :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">1</div>
        <div :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">2</div>
        <div :class="{ active: activeTab === 'tab3' }" @click="activeTab = 'tab3'">3</div>
        <div :class="{ active: activeTab === 'tab4' }"  @click="activeTab = 'tab4'">4</div>
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
 div.active {
    /* background: teal; */
    background: url(https://firebasestorage.googleapis.com/v0/b/senior-care-system-dcf90.appspot.com/o/pattern.png?alt=media&token=8686fdf0-c50e-4897-9a02-1d3e49631aeb) !important;
  }
  .grid2_2 >div{ background: #f3f3f3;
  min-height: 20rem;
  border-radius: 5px;}
</style>





