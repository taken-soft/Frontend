<template>
    <div class="layout">
        <!-- {{ item }} -->
        <!-- 23:10 -->
        <div class="layoutSelector" @click="selectLayout(layoutSeq)" v-if="!selected"></div>
        <div :class="[selected ? 'layoutContainer selected' : 'layoutContainer']">
            <div class="layoutContent">
                <!-- v-for -->
                <!--  -->

                <!-- new widget -->
                <Widget v-if="selected" :start-pos="newStartPos" :end-pos="newEndPos" :widget-type="newWidgetType"></Widget>
                <!--  -->
            </div>
            <WidgetGrid v-if="selected"></WidgetGrid>
        </div>
    </div>
</template>

<script>
import { useNewWidgetStore } from "../../stores/newWidgetStore";
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
    },
};
</script>

<style scoped>
.layout {
    background: white;
    min-height: 20rem;
    border-radius: 5px;
    height: calc(50vh - 6rem);
}
.layoutContainer {
    position: relative;
    width: 100%;
    padding-bottom: calc(100% * 10 / 23);
    top: -100%;
    z-index: 1;
}
.layoutContent {
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
