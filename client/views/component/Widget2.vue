<template>
    <div>
        <component
            class="widget"
            :is="widgetType"
            v-if="isVisible"
            :style="widgetStyle"
            :eventList="eventList"
            :color="color"
            :property="property"
            :sensorList="sensorList"
        />
    </div>
</template>

<script>
import Text from "./Widgets/Text.vue";
import Rect from "./Widgets/Rect.vue";
import Circle from "./Widgets/Circle.vue";
import Img from "./Widgets/Img.vue";
import BarChart from "./Widgets/BarChart.vue";
import LineChart from "./Widgets/LineChart.vue";

export default {
    data() {
        return {};
    },
    props: ["startPos", "endPos", "widgetType", "eventList", "color", "property", "sensorList"],
    components: {
        Text,
        Rect,
        Circle,
        Img,
        BarChart,
        LineChart,
    },
    computed: {
        widgetStyle() {
            let startX = (this.startPos - 1) % 20;
            let startY = parseInt((this.startPos - 1) / 20);
            let endX = this.endPos % 20 == 0 ? 20 : this.endPos % 20;
            let endY = parseInt(this.endPos / 20);
            return {
                top: (startY * 100) / 15 + "%",
                left: `calc(100% / 20 * ${startX})`,
                width: `calc(100% / 20 * ${endX - startX})`,
                height: ((endY - startY + 1) * 100) / 15 + "%",
                fontSize: endY - startY + 1 + "em",
            };
        },
        isVisible() {
            if (this.startPos < 1) {
                return false;
            }
            return true;
        },
    },
};
</script>

<style scoped>
.widget {
    position: absolute;
}
</style>
