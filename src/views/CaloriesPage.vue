<template>
  <div class="calories-page">
    <header>
      <h2>Калькулятор калорий</h2>
      <p>
        Рассчитайте, сколько калорий вам нужно потреблять ежедневно в зависимости от вашего образа
        жизни.
      </p>
    </header>

    <div class="content">
      <div class="calculator-section">
        <CaloriesCalculator />
      </div>

      <aside class="activity-guide">
        <h2>Уровни активности</h2>
        <ul>
          <li><strong>минимальная активность</strong> - сидячий образ жизни, мало или нет тренировок.</li>
          <li><strong>лёгкая активность</strong> - легкие упражнения или спорт 1-3 раза в неделю.</li>
          <li><strong>умеренная активность</strong> - умеренные тренировки или спорт 3-5 раз в неделю.</li>
          <li><strong>высокая активность</strong> - интенсивные тренировки или спорт 6-7 раз в неделю.</li>
          <li><strong>очень высокая активность</strong> - физическая работа или тренировки дважды в день.</li>
        </ul>
      </aside>
    </div>

    <footer>
      <p>Подсчитайте калории, чтобы оптимизировать свою диету и тренировки!</p>
    </footer>
  </div>
</template>

<script>
import CaloriesCalculator from "@/components/CaloriesCalculator.vue";

export default {
  name: "CaloriesPage",
  components: {
    CaloriesCalculator,
  },
};
</script>

<style>
.calories-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
h2{
  align-items: center;
}
p {
  font-size: 1rem;
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
}

.calculator-section {
  flex: 2;
  min-width: 600px;
}

.activity-guide {
  flex: 1;
  min-width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
}

.activity-guide h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #2d3a3d;
}

.activity-guide ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
}

.activity-guide li {
  margin-bottom: 10px;
}

.activity-guide strong {
  color: #2d3a3d;
}

</style>
