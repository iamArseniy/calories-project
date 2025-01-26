<template>
  <footer class="footer">
    <p>&copy; 2025 GYM Tracker. Все права защищены.</p>
    <div class="footer-links">
      <a href="https://t.me/barrusshaa" target="_blank" class="footer-link">Telegram</a>
      <a href="https://instagram.com" target="_blank" class="footer-link">Instagram</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style>
.footer{
  background-color: #2d3a3d;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}
.footer-links {
  margin-top: 10px;
}

.footer-link {
  color: floralwhite;
  text-decoration: none;
  margin: 0 10px;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
