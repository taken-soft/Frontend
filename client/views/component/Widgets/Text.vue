<template>
  <div>{{ sensorText }}</div>
</template>
<script>
import unit from "../../../json/Unit.json";
import { useWidgetDataStore } from '../../../stores/widgetDataStore';

export default {
  props: ["eventList", "color", "property", "sensorList"],
  computed: {
    sensorText() {
      // sensorData 가져와야함
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
      } else {
        sensorData = this.property ?? "Text";
      }
      return `${sensorData}`;
    },
  },
};
</script>
<style scoped></style>
