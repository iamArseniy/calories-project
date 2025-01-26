<template>
  <div class="breakfast-cards">
    <div class="card">
      <img src="@/assets/omlet.jpg" alt="Омлет с овощами" class="breakfast-image" />
      <div class="card-content">
        <h3>Омлет с овощами</h3>
        <p>Омлет с овощами - идеальный завтрак с высоким содержанием белка. Легко приготовить и вкусно!</p>
        <ul>
          <li>3 яйца</li>
          <li>Шпинат, помидоры, перец</li>
          <li>Сыр (по желанию)</li>
        </ul>
        <p><strong>Приготовление:</strong> Взбейте яйца, добавьте нарезанные овощи, жарьте на сковороде до готовности.</p>
      </div>
    </div>

    <div class="card">
      <img src="@/assets/smuzi.jpeg" alt="Смузи с протеином" class="breakfast-image" />
      <div class="card-content">
        <h3>Смузи с протеином</h3>
        <p>Смузи с протеином - быстрый и питательный завтрак для активных людей.</p>
        <ul>
          <li>1 банан</li>
          <li>30 г протеина</li>
          <li>Молоко или растительное молоко</li>
        </ul>
        <p><strong>Приготовление:</strong> Все ингредиенты поместите в блендер, взбейте до однородной массы.</p>
      </div>
    </div>

    <div class="card">
      <img src="@/assets/eggs-benedict.jpg" alt="Яйца Бенедикт" class="breakfast-image" />
      <div class="card-content">
        <h3>Яйца Бенедикт</h3>
        <p>Яйца Бенедикт - классическое блюдо с яйцом-пашот и голландским соусом.</p>
        <ul>
          <li>2 яйца</li>
          <li>100 г ветчины или лосося</li>
          <li>Соус голландез</li>
        </ul>
        <p><strong>Приготовление:</strong> Приготовьте яйцо-пашот, поджарьте хлеб, добавьте ветчину и полейте соусом.</p>
      </div>
    </div>

    <div class="card">
      <img src="../assets/tvorog.jpg" alt="Творог с орехами и медом" class="breakfast-image" />
      <div class="card-content">
        <h3>Творог с орехами и медом</h3>
        <p>Простой и вкусный завтрак с творогом, орехами и медом, который содержит много белка.</p>
        <ul>
          <li>200 г творога</li>
          <li>Орехи (миндаль, грецкие)</li>
          <li>1 ст. ложка меда</li>
        </ul>
        <p><strong>Приготовление:</strong> Смешайте творог с медом и орехами, подавайте как десерт или завтрак.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'BreakfastCards',
}
</script>

<style>
.breakfast-cards {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.card {
  width: 22%;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.breakfast-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-top: 15px;
}

.card-content p {
  font-size: 1rem;
  margin: 10px 0;
}

.card-content ul {
  list-style-type: disc;
  padding-left: 20px;
}

</style>
