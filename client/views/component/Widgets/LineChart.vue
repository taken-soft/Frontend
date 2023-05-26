<template>
    <div>
        <Line class="lineChart" :data="data" :options="options" />
    </div>
</template>

<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
    name: "App",
    components: {
        Line,
    },
    props: ["eventList", "color", "property", "sensorList"],
    data() {
        return {
            data: {
                labels: ["12:56", "12:57", "12:58", "12:59", "13:00"],
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
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
};
</script>

<style scoped>
.lineChart {
    background-color: white;
    border: solid 1px rgba(0, 0, 0, 0.2);
}
</style>
