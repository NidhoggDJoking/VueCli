<template>
    <div class="small">
    
        <canvas id="myChart"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js';
export default {
    components: {

    },
    data() {
        return {

        }
    },
    mounted() {

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                datasets: [
                    {
                        label: "怒气",
                        backgroundColor: "rgba(6, 207, 236, 0.44)",
                        borderColor: "rgba(6, 207, 236, 0.8)",
                        borderWidth: 1,
                        pointStrokeColor: "#888",
                        pointStyle: "crossRot",
                        data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
                        cubicInterpolationMode: "monotone",
                        spanGaps: "false",
                        fill: "false"
                    }
                ]
            },
            options: {
                
            }

        });
    },
    methods: {

    }
}
</script>
<style>

</style>