<template>
    <div class="grid4_2">
        <Layout class="layout" v-for="(item, index) in 8" :key="index" :layout-seq="item" />
    </div>
</template>

<script>
import Layout from "../../component/Layout2.vue";

export default {
    data() {
        return {
            activeTab: "tab1",
        };
    },
    components: {
        Layout,
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab;
        },
    },
    watch: {},
    computed: {},
    mounted() {
        console.log("Main2 mounted");
    },
};
</script>
<style scoped></style>
