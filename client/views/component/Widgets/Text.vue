<template>
    <div>{{ sensorText }}</div>
</template>
<script>
import unit from "../../../json/Unit.json";

export default {
    props: ["eventList", "color", "property", "sensorList"],
    computed: {
        sensorText() {
            // sensorData 가져와야함
            let data = 10;
            return `${data}${this.sensorList === [] ? unit[this.sensorList[0].sensorId] : ""}`;
        },
    },
};
</script>
<style scoped></style>
