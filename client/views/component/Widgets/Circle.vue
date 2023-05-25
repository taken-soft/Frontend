<template>
  <div class="circleWidget" :style="circleStyle">Circle</div>
</template>
<script>
import { useWidgetDataStore } from '../../../stores/widgetDataStore';

export default {
  props: ["eventList", "color", "property", "sensorList"],
  computed: {
    circleStyle() {
      let sensorData = 0;
      if (this.sensorList) {
        let widgetDataStore = useWidgetDataStore();
        for (let sensor of this.sensorList) {
          for (let data of widgetDataStore.getSensorDataListResponseDTO.realtimeSensorDataList) {
            if (data.sensorId == sensor.sensorId) {
              sensorData += Number(data.sensorValues[0].value);
              console.log("data.sensorValues[0]");
              console.log(data.sensorValues[0].value);
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
        backgroundColor: color,
      };
    },
  },
};
</script>
<style scoped>
.circleWidget {
  border-radius: 100%;
  background-color: #c0c0c0;
}
</style>
