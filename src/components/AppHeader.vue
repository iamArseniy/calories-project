<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <h1>GYM Tracker</h1>
      </router-link>
    </div>
    <nav>
      <ul>
        <router-link to="/calories-calculator" class="calculator-link">
          <li>Подсчет калорий</li>
        </router-link>
        <router-link to="/workout-log" class="workout-link">
          <li>Журнал тренировок</li>
        </router-link>
        <router-link to="/progress" class="progress-link">
          <li>Прогресс</li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2d3a3d;
  color: white;
  border-radius: 8px;
}

.logo-link {
  text-decoration: none;
  color: white;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: floralwhite;
  text-decoration: none;
}

nav a:hover {
  color: floralwhite;
  text-decoration: underline;
}
</style>
