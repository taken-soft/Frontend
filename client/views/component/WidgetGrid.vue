<template>
    <div class="widgetGrid">
        <div v-for="y in ySize" :key="y" class="gridOut">
            <div
                v-for="x in xSize"
                :key="x"
                class="gridIn"
                @mousedown="gridClick((y - 1) * xSize + x)"
                @mouseup="gridOver((y - 1) * xSize + x)"
                @mouseenter="gridDrag((y - 1) * xSize + x)"
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
            if (onDrag) {
                newWidgetStore.endPos = endPos;
                // console.log(newWidgetStore.startPos, newWidgetStore.endPos);
            }
        };
        const gridOver = (endPos) => {
            onDrag = false;
            if (endPos < newWidgetStore.startPos) {
                newWidgetStore.endPos = newWidgetStore.startPos;
                newWidgetStore.startPos = endPos;
            }
            // console.log(newWidgetStore.startPos, newWidgetStore.endPos);
        };
        return { gridClick, gridDrag, gridOver };
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
