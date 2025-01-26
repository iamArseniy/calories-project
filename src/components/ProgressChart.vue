<template>
<div class="progress-chart">
  <h3>{{title}}</h3>
  <canvas ref="chartCanvas"></canvas>
</div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "progress-chart",
  props:{
    title:{
      type: String,
      required: true,
    },
    history: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const labels = this.history.map((entry) => entry.date);
    const weights = this.history.map((entry) => entry.weight);

    new Chart(this.$refs.chartCanvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Вес (кг)",
            data: weights,
            borderColor: "#42a5f5",
            backgroundColor: "rgba(66, 165, 245, 0.2)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Дата",
            },
          },
          y: {
            title: {
              display: true,
              text: "Вес (кг)",
            },
            beginAtZero: true,
          },
        },
      },
    });
  },
}
</script>

<style>
.progress-chart {
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>
