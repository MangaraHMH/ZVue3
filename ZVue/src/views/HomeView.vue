<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components: { Card },
  computed: {
    ...mapState(useCounterStore, ['pasien'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchPasien'])
  },
  created() {
    this.fetchPasien()
  }
}
</script>

<template>
  <div class="home">
    <h1>Pasien</h1>
    <div class="add">
      <button
        class="btn btn-primary rounded-pill"
        id="new-product"
        @click.prevent="this.$router.push('/add')"
      >
        + Add Pasien
      </button>
    </div>
    <div class="row">
      <Card v-for="data in pasien" :key="data.id" :items="data" />
    </div>
  </div>
</template>

<style>
.home {
  margin-left: 100px;
  margin-top: 20px;
}
.row {
  --bs-gutter-x: none;
}
.add {
  display: flex;
  justify-content: end;
  padding-right: 50px;
  padding-bottom: 20px;
}
</style>
