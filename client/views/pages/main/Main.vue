<template>
    <div> <div class="grid2_2">
        <div :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">1</div>
        <div :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">2</div>
        <div :class="{ active: activeTab === 'tab3' }" @click="activeTab = 'tab3'">3</div>
        <div :class="{ active: activeTab === 'tab4' }"  @click="activeTab = 'tab4'">4</div>
        </div></div>
</template>

<script>
import TestCompoent from '../../component/test/TestCompoent.vue';

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
    components: {
        'TestCompoent': TestCompoent,
    },
    mounted() {
        console.log('main mounted');
    }
}
</script>
<style scoped>
.grid2_2 > div{ background: #f3f3f3;
  min-height: 20rem;
  border-radius: 5px;}
</style>