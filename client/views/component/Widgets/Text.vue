<template>
    <div class="text" :style="textStyle">{{ sensorText }}</div>
</template>
<script>
import unit from "../../../json/Unit.json";
import { useWidgetDataStore } from "../../../stores/widgetDataStore";

export default {
    props: ["eventList", "color", "property", "sensorList"],
    computed: {
        sensorText() {
            // sensorData 가져와야함
            let sensorData = 0;
            if (this.sensorList.length !== 0) {
                let widgetDataStore = useWidgetDataStore();
                for (let sensor of this.sensorList) {
                    for (let data of widgetDataStore.getSensorDataListResponseDTO.realtimeSensorDataList) {
                        if (data.sensorId == sensor.sensorId) {
                            sensorData += Number(data.sensorValues[0].value);
                            //                            console.log("data.sensorValues[0]");
                            //                            console.log(data.sensorValues[0].value);
                            break;
                        }
                    }
                }
                sensorData /= this.sensorList.length;
            } else {
                //                console.log(this.property);
                sensorData = this.property ?? "Text";
            }
            return `${sensorData}${this.sensorList === [] ? unit[this.sensorList[0].sensorId] : ""}`;
        },
        textStyle() {
            if (this.property==null) {
                return {
                    backgroundColor: "#e9e0c8",
                };
            }
            // 센서데이터값 받아오는 과정이 필요함
            let sensorData = 0;
            if (this.sensorList) {
                let widgetDataStore = useWidgetDataStore();
                for (let sensor of this.sensorList) {
                    for (let data of widgetDataStore.getSensorDataListResponseDTO.realtimeSensorDataList) {
                        if (data.sensorId == sensor.sensorId) {
                            sensorData += Number(data.sensorValues[0].value);
                            //                            console.log("data.sensorValues[0]");
                            //                            console.log(data.sensorValues[0].value);
                            break;
                        }
                    }
                }
                sensorData /= this.sensorList.length;
            }
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
                color: color,
            };
        },
    },
};
</script>
<style scoped>
.text {
    background-color: #c0c0c000;
    overflow-x: clip;
    transition: color 0.5s ease;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
