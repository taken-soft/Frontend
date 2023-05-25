<template>
    <div class="rect" :style="rectStyle">Rect</div>
</template>
<script>
export default {
    props: ["eventList", "color", "property", "sensorList"],
    computed: {
        rectStyle() {
            // 센서데이터값 받아오는 과정이 필요함
            let sensorData = 10;
            let color = this.color;
            for (let colorEvent of this.eventList) {
                if (colorEvent.eventOver === null) {
                    if (colorEvent.eventUnder > sensorData) {
                        color = colorEvent.eventColor;
                    }
                } else if (colorEvent.eventUnder === null) {
                    if (colorEvent.eventOver <= sensorData) {
                        color = colorEvent.eventColor;
                    }
                } else {
                    if (colorEvent.eventUnder > sensorData && colorEvent.eventOver <= sensorData) {
                        color = colorEvent.eventColor;
                    }
                }
            }
            return {
                backgroundColor: color,
            };
        },
    },
};
</script>
<style scoped>
.rect {
    background-color: #c0c0c0;
}
</style>
