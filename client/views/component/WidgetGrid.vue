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
        <a :style="deleteStyle" @click="deleteWidget" v-if="isDeleteButton"
            ><img
                width="20"
                alt="Icons8 flat delete generic"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Icons8_flat_delete_generic.svg/256px-Icons8_flat_delete_generic.svg.png"
        /></a>
    </div>
</template>
<script>
import { useNewWidgetStore } from "../../stores/newWidgetStore";
import { useDashboardStore } from "../../stores/dashboardStore";
import { useEditMenuStore } from "../../stores/editMenuStore";

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
        const dashboardStore = useDashboardStore();
        const editMenuStore = useEditMenuStore();

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
        const widgetName = (widgetId) => {
            const widgetParser = {
                1: "Text",
                2: "Img",
                3: "LineChart",
                4: "BarChart",
                5: "Rect",
                6: "Circle",
                7: "CircleChart"
            };
            return widgetParser[widgetId];
        };
        const gridOver = (endPos) => {
            onDrag = false;
            if (newWidgetStore.startPos == endPos) {
                // console.log("hi")
                const widgetList = [...dashboardStore.currentDashboard.layoutDtoList[newWidgetStore.selectedLayout - 1].layoutWidgetDtoList];
                widgetList.reverse()
                for (let index in widgetList) {
                    let widget = widgetList[index];
                    // console.log(widget)
                    if (widget.layoutWidgetStartPos <= endPos && widget.layoutWidgetEndPos >= endPos) {
                        if (endPos % 23 <= widget.layoutWidgetEndPos % 23 && endPos % 23 >= widget.layoutWidgetStartPos % 23) {
                            // console.log(widget);
                            // console.log(index);

                            // 선택시 new Widget에 가져오는 로직이 필요
                            newWidgetStore.endPos = widget.layoutWidgetEndPos;
                            newWidgetStore.startPos = widget.layoutWidgetStartPos;
                            newWidgetStore.zIndex = widget.layoutWidgetZPos;
                            newWidgetStore.setWidgetType(widgetName(widget.widgetId));


                            //삭제
                            dashboardStore.currentDashboard.layoutDtoList[newWidgetStore.selectedLayout - 1].layoutWidgetDtoList.splice(widgetList.length - index - 1, 1)
                            editMenuStore.moveTo(newWidgetStore.getWidgetType);
                            break;
                        }
                    }
                }
            } else if (endPos < newWidgetStore.startPos) {
                newWidgetStore.endPos = newWidgetStore.startPos;
                newWidgetStore.startPos = endPos;
            }
            // console.log(newWidgetStore.startPos, newWidgetStore.endPos);
        };
        const deleteWidget = () => {
            // console.log("deleteButton");
            newWidgetStore.deleteWidget();
        };
        return { gridClick, gridDrag, gridOver, deleteWidget };
    },
    methods: {},
    mounted() {},
    computed: {
        deleteStyle() {
            const newWidgetStore = useNewWidgetStore();

            let startPos = newWidgetStore.startPos;
            let endPos = newWidgetStore.endPos;
            let startY = parseInt((startPos - 1) / 23);
            let endX = endPos % 23 == 0 ? 23 : endPos % 23;
            return {
                top: `calc(${startY * 10 + "%"} - 15px)`,
                left: `calc(${endX * 100}% / 23 - 10px)`,
                position: "absolute",
            };
        },
        isDeleteButton() {
            const newWidgetStore = useNewWidgetStore();
            return newWidgetStore.widgetType !== null;
        },
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
