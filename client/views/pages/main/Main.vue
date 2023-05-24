<template>
    <div>
        <component :is="dashboardStyle"></component>
    </div>
</template>

<script>
import Dashboard1 from "./Dashboard1.vue";
import Dashboard2 from "./Dashboard2.vue";

import { useDashboardStore } from "../../../stores/dashboardStore";

export default {
    data() {
        return {};
    },
    methods: {},
    watch: {},
    computed: {
        dashboardStyle(){
            const dashboardStore = useDashboardStore()
            let componentName = "div"
            if(dashboardStore.currentDashboard.dashboardType === "2x2"){
                componentName = "Dashboard1"
            }
            if(dashboardStore.currentDashboard.dashboardType === "2x4"){
                componentName = "Dashboard2"
            }
            return componentName
        }
    },
    components: {
        Dashboard1: Dashboard1,
        Dashboard2: Dashboard2,
    },
    mounted() {
        console.log("main mounted");
    },
};
</script>
<style scoped>
.grid2_2 > div {
    background: #f3f3f3;
    min-height: 20rem;
    border-radius: 5px;
}
</style>
