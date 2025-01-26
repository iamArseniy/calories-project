<template>
  <div class="calories-calculator">
    <h2>Калькулятор калорий</h2>
    <form @submit.prevent="calculateCalories">
      <div>
        <div class="form-group">
          <label for="weight">Вес (кг):</label>
          <input v-model.number="personalParams.weight" type="number" id="weight" min="1" required />
        </div>
        <div class="form-group">
          <label for="height">Рост (см):</label>
          <input v-model.number="personalParams.height" type="number" id="height" min="15" required />
        </div>
        <div class="form-group">
          <label for="age">Возраст:</label>
          <input v-model.number="personalParams.age" type="number" id="age" min="1" required />
        </div>
        <div class="form-group">
          <label for="gender">Пол:</label>
          <label>
            <input v-model.number="personalParams.gender" type="radio" :value="5" />
            Мужчина
          </label>
          <label>
            <input v-model.number="personalParams.gender" type="radio" :value="-161" />
            Женщина
          </label>
        </div>
        <div class="form-group">
          <label for="activity">Уровень физической активности:</label>
          <label>
            <input v-model.number="personalParams.activity" type="radio" :value="1.2" />
            Минимальная активность
          </label>
          <label>
            <input v-model.number="personalParams.activity" type="radio" :value="1.375" />
            Легкая активность
          </label>
          <label>
            <input v-model.number="personalParams.activity" type="radio" :value="1.55" />
            Умеренная активность
          </label>
          <label>
            <input v-model.number="personalParams.activity" type="radio" :value="1.725" />
            Высокая активность
          </label>
          <label>
            <input v-model.number="personalParams.activity" type="radio" :value="1.9" />
            Очень высокая активность
          </label>
        </div>
        <button type="submit">Рассчитать калории</button>
      </div>
    </form>
    <div v-if="caloriesResult !== null" class="calories-result">
      <h3>Результат:</h3>
      <p>Ваше дневное количество калорий: <strong>{{ caloriesResult }}</strong> ккал</p>
    </div>
  </div>
</template>

<script>
export default {
  name : "CaloriesCalculator",
  data(){
    return {
      personalParams: {
        weight: 0,
        height:0,
        age:0,
        gender:0,
        activity:0,
      },
      caloriesResult: null,
    }
  },
  methods: {
    calculateCalories() {
      const { weight, height, age, gender, activity } = this.personalParams;
      if (weight && height && age && gender && activity) {
        const baseCalories = 10 * weight + 6.25 * height - 5 * age + gender;
        this.caloriesResult = Math.round(baseCalories * activity);
      } else {
        alert("Пожалуйста, заполните все поля.");
      }
    },
  },

}
</script>

<style>
.calories-calculator {
  max-width: 600px;
  margin: 15px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="number"],
input[type="radio"] {
  margin-right: 10px;
}

.calories-result {
  margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  color: #155724;
}
</style>
