<script>
export default {
  name: 'Nav'
}
</script>

<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <h2>
        <a href="" @click.prevent="this.$router.push('/')">HOME</a>
      </h2>
    </div>
  </nav>
</template>

<style>
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: aqua;
}
.container-fluid {
  padding-left: 150px;
}
</style>
