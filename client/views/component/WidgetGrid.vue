<template>
    <div class="widgetGrid">
        <div v-for="y in ySize" :key="y" class="gridOut">
            <div
                v-for="x in xSize"
                :key="x"
                class="gridIn"
                @mousedown="gridClick((y - 1) * ySize + x)"
                @mouseup="gridOver((y - 1) * ySize + x)"
                @mouseenter="gridDrag((y - 1) * ySize + x)"
            >
                <!-- {{y}}  {{x}} -->
            </div>
        </div>
    </div>
</template>
<script>
import { useNewWidgetStore } from "../../stores/newWidgetStore";

export default {
    data: () => {
        return {
            xSize: 23,
            ySize: 10,

            widgetTypes: ["text", "chart", "rectangle"],
        };
    },
    setup() {
        let onDrag = false;
        const newWidgetStore = useNewWidgetStore();
        const gridClick = (startPos) => {
            //console.log(x+ ","+y)
            newWidgetStore.startPos = startPos;
            newWidgetStore.endPos = startPos;
            onDrag = true;

            // console.log(newWidgetStore.startPos, this.widget.end);
        };
        const gridDrag = (endPos) => {
            if (this.onDrag) {
                newWidgetStore.endPos = endPos;
                // console.log(newWidgetStore.startPos, newWidgetStore.endPos);
            }
        };
        const gridOver = (endPos) => {
            this.onDrag = false;
            if (endPos < newWidgetStore.startPos) {
                newWidgetStore.endPos = newWidgetStore.startPos;
                newWidgetStore.startPos = endPos;
            }
            // console.log(newWidgetStore.startPos, newWidgetStore.endPos);
        };
        const addWidget = () => {
            let newWidget = {
                type: this.widget.type,
                start: newWidgetStore.startPos,
                end: newWidgetStore.endPos,
            };
            this.widgets.push(newWidget);
            this.widget = {
                type: "",
                start: { x: 0, y: 0 },
                end: { x: 0, y: 0 },
            };
        };
        return { gridClick, gridDrag, gridOver, addWidget };
    },
    methods: {},
    mounted() {
        // console.log("hi")
    },
};
</script>
<style scoped>
.widgetGrid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.gridIn {
    border: 1px solid rgb(180, 180, 180);
    width: calc(100% / 23);
    height: 100%;
}
.gridOut {
    position: relative;
    width: 100%;
    height: calc(100% / 10);
    display: flex;
}
</style>
