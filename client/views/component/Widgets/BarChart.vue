<template>
  <div>
    <Bar class="barChart" :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";

import Sensor from "../../../json/CopySensors.json"

import { useWidgetDataStore } from "../../../stores/widgetDataStore";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  components: {
    Bar,
  },
  props: ["eventList", "color", "property", "sensorList"],
  data() {
    return {
      chartLabels: ["1", "2", "3", "4", "5"],
      chartData: [40, 20, 12, 39, 10],
    };
  },
  computed: {
    data() {
      let labelList = [];
      let dataList = [];
      if (this.sensorList.length !== 0) {
        let widgetDataStore = useWidgetDataStore();
        for (let sensor of this.sensorList) {
          for (let data of widgetDataStore.getSensorDataListResponseDTO.realtimeSensorDataList) {
            if (data.sensorId == sensor.sensorId) {
              labelList.push(Sensor[sensor.sensorId]);
              dataList.push(Number(data.sensorValues[0].value));
              console.log("Sensor[sensor.sensorId], data.sensorValues[0].value");
              console.log(Sensor[sensor.sensorId], data.sensorValues[0].value);
            }
          }
        }
      }
      this.chartLabels = labelList;
      this.chartData = dataList;
      let chartData = {
        labels: this.chartLabels,
        datasets: [
          {
            label: "데이터",
            backgroundColor: "#f87979",
            data: this.chartData,
          },
        ],
      };
      return chartData;
    },
  },
};
</script>
<style scoped>
.barChart {
  background-color: white;
  border: solid 1px black;
  width: full;
  height: full;
}
</style>
