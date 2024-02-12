<template>
  <header>
    <nav>
      <router-link to="/cart">
        <p>カート</p>
      </router-link>
      <router-link to="/">
        <p>ホーム</p>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
nav {
  display: flex;
}
p {
  padding: 0 30px;
}
</style>
