<template>
  <div class="workout-log">
    <h2>Журнал тренировок</h2>
    <form @submit.prevent="addWorkout" class="workout-form">
      <div>
        <label for="workout">Тип тренировки:</label>
        <select v-model="newWorkout.name" id="workout" required>
          <option disabled value="">-- Выберите тренировку --</option>
          <option v-for="(workout, index) in availableWorkouts" :key="index" :value="workout">
            {{ workout }}
          </option>
        </select>
      </div>

      <div>
        <label for="weight">Вес (кг):</label>
        <input v-model.number="newWorkout.weight" type="number" id="weight" min="0" required />
      </div>

      <div>
        <label for="reps">Повторения:</label>
        <input v-model.number="newWorkout.reps" type="number" id="reps" min="1" required />
      </div>

      <button type="submit">Добавить тренировку</button>
    </form>

    <div v-if="workouts.length > 0" class="workout-list">
      <h3>Ваши тренировки</h3>
      <ul>
        <li v-for="(workout, index) in workouts" :key="index" class="workout-item">
          <div class="workout-details">
            <strong>{{ workout.name }}</strong> — {{ workout.date }}: {{ workout.weight }} кг, {{ workout.reps }} повторений
          </div>
          <button @click="deleteItem(index)" class="delete-btn">Удалить</button>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Пока нет созданных тренировок. Добавьте свою первую тренировку.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutLog',
  data() {
    return {
      availableWorkouts: [
        "Грудь (жим лежа)",
        "Трицепс",
        "Спина (становая тяга)",
        "Бицепс",
        "Ноги (присед со штангой)",
        "Плечи",
        "Тренировка на пресс",
        "Круговая тренировка",
        "Кардио",
        "Растяжка",
      ],
      workouts: [],
      newWorkout: {
        name: "",
        weight: 0,
        reps: 1,
      },
    };
  },
  mounted() {
    const savedWorkouts = localStorage.getItem("workouts");
    if (savedWorkouts){
      this.workouts = JSON.parse(savedWorkouts);
    }
  },

  methods: {
    addWorkout() {
      const workout = {
        name: this.newWorkout.name,
        weight: this.newWorkout.weight,
        reps: this.newWorkout.reps,
        date: new Date().toISOString().split("T")[0],
      };

      this.workouts.push(workout);
      localStorage.setItem("workouts", JSON.stringify(this.workouts));

      this.newWorkout = {
        name: "",
        weight: 0,
        reps: 1,
      };
    },
    deleteItem(index){
      this.workouts.splice(index, 1);
      localStorage.setItem("workouts", JSON.stringify(this.workouts));
    }
  },
}
</script>

<style>
.workout-log {
  padding: 20px;
}

.workout-form {
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 500px;
}

form div {
  margin-bottom: 10px;
}

form label {
  display: block;
  font-size: 1rem;
  color: #333;
}

form input, form select {
  padding: 8px;
  margin-top: 5px;
  width: 100%;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  padding: 10px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #4cae4c;
}

.workout-list {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.workout-item {
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
}

.workout-details {
  flex: 1;
  font-size: 1rem;
  color: #333;
}

.delete-btn {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c9302c;
}

.workout-log p {
  text-align: center;
  color: #333;
}
</style>
