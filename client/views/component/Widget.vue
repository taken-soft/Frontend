<template>
    <div>
        <component class="widget" :is="widgetType" :style="widgetStyle" :eventList="eventList" :color="color" :property="property" :sensorList="sensorList" />
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
            let startX = (this.startPos - 1) % 23;
            let startY = parseInt((this.startPos - 1) / 23);
            let endX = this.endPos % 23;
            let endY = parseInt(this.endPos / 23);
            return {
                top: startY * 10 + "%",
                left: `calc(100% / 23 * ${startX})`,
                width: `calc(100% / 23 * ${endX - startX})`,
                height: (endY - startY + 1) * 10 + "%",
                fontSize: (endY - startY) * 2 + 1.8 + "em",
            };
        },
    },
};
</script>

<style scoped>
.widget {
    position: absolute;
}
</style>
