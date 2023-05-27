<template>
  <div>
    <Bar class="barChart" :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Animation } from "chart.js";
import { Bar } from "vue-chartjs";

import Sensor from "../../../json/CopySensors.json"

import { useWidgetDataStore } from "../../../stores/widgetDataStore";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Animation);
export default {
  components: {
    Bar,
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
            }
          }
        }
      }

      const ctx = this.$refs.chartCanvas.getContext("2d");

      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, "#f87979");
      gradient.addColorStop(1, "#ffffff");

      const animationConfig = {
        duration: 1000,
        easing: "easeInOutQuart",
        onProgress: function (animation) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          const gradientWithAnimation = ctx.createLinearGradient(0, 0, 0, 300);
          gradientWithAnimation.addColorStop(0, "#f87979");
          gradientWithAnimation.addColorStop(animation.currentStep / animation.numSteps, "#ffffff");
          ctx.fillStyle = gradientWithAnimation;
          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
      };

      let chartData = {
        labels: labelList,
        datasets: [
          {
            label: "데이터",
            backgroundColor: gradient,
            data: dataList,
          },
        ],
      };

      let chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animation: animationConfig,
      };

      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: "데이터",
            backgroundColor: gradient,
            data: this.chartData,
          },
        ],
      };
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