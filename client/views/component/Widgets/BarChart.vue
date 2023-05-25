<template>
    <div>
        <Bar class="barChart" :data="data" :options="options" />
    </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";

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
