<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Detail',
  computed: {
    ...mapState(useCounterStore, ['pasienDetail'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchPasienDetail', 'deletePasien'])
  },
  created() {
    this.fetchPasienDetail(this.$route.params.id)
  }
}
</script>

<template>
  <div class="detail">
    <h1>Detail</h1>
    <div class="detail-pasien">
      <h4>Name : {{ pasienDetail.name }}</h4>
      <h4>Gender : {{ pasienDetail.sex }}</h4>
      <h4>Religion : {{ pasienDetail.religion }}</h4>
      <h4>Phone Number : {{ pasienDetail.phone }}</h4>
      <h4>Address : {{ pasienDetail.address }}</h4>
      <h4>NIK : {{ pasienDetail.nik }}</h4>
      <div class="menus">
        <a
          href="#"
          class="btn btn-primary"
          @click.prevent="this.$router.push(`/edit/${pasienDetail.id}`)"
          >Edit</a
        >
        <a href="#" class="btn btn-danger" @click.prevent="deletePasien(pasienDetail.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<style>
.detail {
  margin-left: 100px;
  margin-top: 20px;
}
.detail-pasien {
  margin: auto;
  width: 50%;
  border: 3px solid grey;
  padding: 10px;
}
.menus {
  display: flex;
  justify-content: space-around;
}
</style>
