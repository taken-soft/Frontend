<template>
    <div>
        <component :is="widgetType" />
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
        return {
            widgetType: "Text",
        };
    },
    components: {
        Text,
        Rect,
        Circle,
        Img,
        BarChart,
        LineChart,
    },
};
</script>

<style scoped>
</style>