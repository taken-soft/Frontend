<template>
    <div>
        <component :is="dashboardStyle" :key="sensorDataList"></component>
    </div>
</template>

<script>
import Dashboard1 from "./Dashboard1.vue";
import Dashboard2 from "./Dashboard2.vue";

import { useDashboardStore } from "../../../stores/dashboardStore";
import { useWidgetDataStore } from "../../../stores/widgetDataStore";

export default {
    data() {
        return {};
    },
    methods: {},
    watch: {},
    computed: {
        dashboardStyle() {
            const dashboardStore = useDashboardStore();
            let componentName = "div";
            if(!dashboardStore.currentDashboard) return;
            if (dashboardStore.currentDashboard.dashboardType === "2x2") {
                componentName = "Dashboard1";
            }
            if (dashboardStore.currentDashboard.dashboardType === "2x4") {
                componentName = "Dashboard2";
            }
            return componentName;
        },
        sensorDataList() {
            const dashboardStore = useDashboardStore();
            const widgetDataStore = useWidgetDataStore();
            let sensorList = [];
            if(!dashboardStore.currentDashboard) return;
            for (let layout of dashboardStore.currentDashboard.layoutDtoList) {
                for (let widget of layout.layoutWidgetDtoList) {
                    let graph = false;
                    if (widget.widgetId == 3) {
                        graph = true;
                    }
                    for (let sensor of widget.layoutWidgetSensorDtoList) {
                        // console.log(sensor.sensorId, widget.widgetId);
                        let sensorData = { sensorId: sensor.sensorId, graph: graph };
                        sensorList.push(sensorData);
                    }
                }
            }
            const uniqueSensorList = sensorList.filter(
                (obj, index, self) => index === self.findIndex((t) => t.sensorId === obj.sensorId && t.graph === obj.graph)
            );
            // console.log(uniqueSensorList)
            widgetDataStore.setSensorList(uniqueSensorList);
            return dashboardStore.currentDashboard.dashboardId;
        },
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
