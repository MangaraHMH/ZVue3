<script>
// import { mapActions } from 'pinia'
// import { useCounterStore } from '../stores/counter'
export default {
  name: 'CardUser',
  props: ['items']
  //   methods: {
  //     ...mapActions(useCounterStore, ['deleteUser'])
  //   }
}
</script>

<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <p>Name : {{ items.name }}</p>
        <p>Gender : {{ items.sex }}</p>
        <p>Religion : {{ items.religion }}</p>
        <p>Phone Number : {{ items.phone }}</p>
        <p>Address : {{ items.address }}</p>
        <p>NIK : {{ items.nik }}</p>
        <div class="btn-detail">
          <a href="#" class="btn btn-primary" @click.prevent="$router.push(`pasien/${items.id}`)">Detail</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  gap: 20px;
  margin-bottom: 20px;
}
.card-body {
  text-align: center;
}
.btn-detail {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}
p {
  margin-bottom: 0;
}
</style>
