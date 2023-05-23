<template>
    <Bar class="barChart" :data="data" :options="options" />
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
    components: {
        Bar,
    },
    data() {
        return {
            data: {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [40, 20, 12, 39, 10],
                    },
                ],
            },
        };
    },
};
</script>
<style scoped>
.barChart {
    background-color: white;
    border: solid 1px black;
}
</style>
