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
      options: {
        maxBarThickness: 30,
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000, // 애니메이션 지속 시간 (밀리초)
          easing: 'easeOutQuart', // 애니메이션 이징 함수
        },
        plugins: {
          legend: {
            display: false
          }
        },
        layout: {
          padding: {
            top: 20 // 위쪽 여백 설정 (10px)
          }
        },
      }
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
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, 180);

              gradient.addColorStop(0.3, '#4636FC');
              gradient.addColorStop(0.6, '#5170FD');
              gradient.addColorStop(1, '#60ABFB');
              return gradient;
            },//"#f87979",
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
  border: solid 1px white;
  width: full;
  height: full;
}
</style>
