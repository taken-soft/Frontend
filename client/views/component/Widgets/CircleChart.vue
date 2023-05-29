<template>
  <div>
    <Pie class="barChart" :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "vue-chartjs";

import Sensor from "../../../json/CopySensors.json";

import { useWidgetDataStore } from "../../../stores/widgetDataStore";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  components: {
    Pie,
  },
  props: ["eventList", "color", "property", "sensorList"],
  data() {
    return {
      chartLabels: ["1", "2", "3", "4", "5"],
      chartData: [40, 20, 12, 39, 10],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000, // 애니메이션 지속 시간 (밀리초)
          easing: "easeOutQuart", // 애니메이션 이징 함수
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              return value;
            },
            color: "#fff",
          },
        },
      },
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
            if (data.sensorId == sensor.sensorId && !(data.sensorValues.length == 5)) {
              labelList.push(Sensor[sensor.sensorId]);
              dataList.push(Number(data.sensorValues[0].value));
              //              console.log("Sensor[sensor.sensorId], data.sensorValues[0].value");
              //              console.log(Sensor[sensor.sensorId], data.sensorValues[0].value);
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
            backgroundColor: [
              "#4636FC",
              "#5170FD",
              "#60ABFB",
              "#AEE1FC",
            ],
            data: this.chartData,
          },
        ],
      };
      return chartData;
    },
  },
}
</script>
<style scoped>
.barChart {
  background-color: rgb(233, 118, 118);
  background-color: white;
  border: solid 1px white;
  width: full;
  height: full;
}
</style>
