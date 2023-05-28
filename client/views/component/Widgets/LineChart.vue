<template>
  <div>
    <Line class="lineChart" :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";

import Sensor from "../../../json/CopySensors.json"

import { useWidgetDataStore } from "../../../stores/widgetDataStore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Line,
  },
  props: ["eventList", "color", "property", "sensorList"],
  data() {
    return {
      labels: ["4분전", "3분전", "2분전", "1분전", "현재"],
      datasets: [
        {
          label: "데이터 1",
          backgroundColor: "#f87979",
          data: [40, 39, 10, 40, 39, 80, 40],
        },
        {
          label: "데이터 2",
          backgroundColor: "#79f879",
          data: [10, 29, 40, 80, 19, 70, 60],
        },
        {
          label: "데이터 3",
          backgroundColor: "#79f879",
          data: [12, 14, 70, 50, 99, 30, 10],
        },
        {
          label: "데이터 4",
          backgroundColor: "#79f879",
          data: [60, 69, 10, 40, 69, 30, 20],
        },
      ],


      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    data() {
      let dataListList = [];
      let colorList = [
        "#f87979",
        "#f8aa79",
        "#f879aa",
        "#aa7979",
        "#aa7979",
      ];

      if (this.sensorList.length !== 0) {
        let widgetDataStore = useWidgetDataStore();
        for (let sensor of this.sensorList) {
          for (let data of widgetDataStore.getSensorDataListResponseDTO.realtimeSensorDataList) {
            if (data.sensorId == sensor.sensorId && (data.sensorValues.length == 5)) {
              let dataList = [];
              for (let sensorValue of data.sensorValues) {
                dataList.push(Number(sensorValue.value));
              }
              dataListList.push({label: Sensor[sensor.sensorId] , data : dataList});
            }
          }
        }
      }

      let index = 0;

      this.datasets = dataListList.map(
        (e) => {
          return {
            label: e.label,
            borderColor: colorList[index++],
            data: e.data,
          }
        }
      );
      let chartData = {
        labels: this.labels,
        datasets: this.datasets
      };
      return chartData;
    },
  }
};
</script>

<style scoped>
.lineChart {
    background-color: white;
    border: solid 1px rgba(0, 0, 0, 0.2);
}
</style>
