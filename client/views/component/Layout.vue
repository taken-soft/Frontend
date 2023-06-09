<template>
    <div class="layout">
        <!-- 23:10 -->
        <div class="layoutSelector" @click="selectLayout(layoutSeq)" v-if="!selected"></div>
        <div :class="[selected ? 'layoutContainer selected' : 'layoutContainer']">
            <div class="layoutContent">
                <!-- v-for -->
                <Widget
                    v-for="(item, index) in widgets"
                    :start-pos="item.layoutWidgetStartPos"
                    :end-pos="item.layoutWidgetEndPos"
                    :widget-type="widgetName(item.widgetId)"
                    :sensor-list="item.layoutWidgetSensorDtoList"
                    :color="item.layoutWidgetColor"
                    :event-list="item.eventDtoList"
                    :property="item.layoutWidgetProperty"
                    :layoutSeq="layoutSeq"
                ></Widget>
                <!--  -->

                <!-- new widget -->
                <Widget
                    v-if="selected && isEditorMode"
                    :start-pos="newStartPos"
                    :end-pos="newEndPos"
                    :widget-type="newWidgetType"
                    :sensor-list="[]"
                    :color="''"
                    :event-list="[]"
                    :property="null"
                    :layoutSeq="layoutSeq"
                ></Widget>
                <!--  -->
            </div>
            <WidgetGrid v-if="selected && isEditorMode"></WidgetGrid>
        </div>
    </div>
</template>

<script>
import { useNewWidgetStore } from "../../stores/newWidgetStore";
import { useDashboardStore } from "../../stores/dashboardStore";
import { useModeStore } from "../../stores/modeStore";
import Widget from "./Widget.vue";
import WidgetGrid from "./WidgetGrid.vue";

export default {
    data() {
        return {};
    },
    props: ["layoutSeq"],
    components: {
        Widget,
        WidgetGrid,
    },
    setup() {
        const newWidgetStore = useNewWidgetStore();

        const selectLayout = (layoutSeq) => {
            newWidgetStore.setSelectedLayout(layoutSeq);
            console.log(newWidgetStore.selectedLayout);
        };

        return {
            selectLayout,
        };
    },
    computed: {
        selected() {
            const newWidgetStore = useNewWidgetStore();
            return this.layoutSeq === newWidgetStore.selectedLayout;
        },
        newEndPos() {
            const newWidgetStore = useNewWidgetStore();
            return newWidgetStore.endPos;
        },
        newStartPos() {
            const newWidgetStore = useNewWidgetStore();
            return newWidgetStore.startPos;
        },
        newWidgetType() {
            const newWidgetStore = useNewWidgetStore();
            return newWidgetStore.widgetType;
        },
        isEditorMode() {
            const modeStore = useModeStore();
            return modeStore.isEditMode;
        },
        widgets() {
            const dashboardStore = useDashboardStore();
            const layoutList = dashboardStore.currentDashboard.layoutDtoList;
            let widgets = 0;
            for (let layout of layoutList) {
                if (layout.layoutSequence === this.layoutSeq) {
                    widgets = layout.layoutWidgetDtoList;
                    break;
                }
            }
            return widgets;
        },
    },
    methods: {
        widgetName(widgetId) {
            const widgetParser = {
                1: "Text",
                2: "Img",
                3: "LineChart",
                4: "BarChart",
                5: "Rect",
                6: "Circle",
                7: "CircleChart",
            };
            return widgetParser[widgetId];
        },
    },
};
</script>

<style scoped>
.layout {
    background: #ffffffe8;
    min-height: 20rem;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    margin-bottom: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
.layoutContainer {
    position: relative;
    width: 100%;
    padding-bottom: calc(1000% / 23);
    top: -100%;
    z-index: 1;
}
.layoutContent {
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.layoutSelector {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
}
.selected {
    top: 0;
}
</style>
