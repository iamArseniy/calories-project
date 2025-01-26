<template>
  <div class="progress">
    <h2>Прогресс</h2>
    <p>Здесь можно отследить прогресс в тренировках.</p>

    <div v-if="progressData.length > 0" class="progress-charts">
      <ProgressChart
        v-for="(data, index) in progressData"
        :key="index"
        :title="data.exercise"
        :history="data.history"
      />
    </div>

    <div v-else>
      <p>Пока нет данных о прогрессе. Добавьте тренировки, чтобы увидеть изменения.</p>
    </div>
  </div>
</template>

<script>
import ProgressChart from "@/components/ProgressChart.vue";
export default {
  name: "ProgressPage",
  components:{
    ProgressChart,
  },
  data(){
    return {
      progressData:[],
    };
  },
  mounted() {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    const groupedData = this.groupWorkoutsByType(savedWorkouts);
    this.progressData = groupedData;
  },
  methods: {
    groupWorkoutsByType(workouts) {
      const grouped = {};

      workouts.forEach((workout) => {
        if (!grouped[workout.name]) {
          grouped[workout.name] = [];
        }
        grouped[workout.name].push({
          date: workout.date,
          weight: workout.weight,
        });
      });

      return Object.keys(grouped).map((key) => ({
        exercise: key,
        history: grouped[key],
      }));
    },
  },
};
</script>

<style>
.progress {
  padding: 20px;
}

.progress-charts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.progress-charts > * {
  max-width: 100%;
}
</style>

