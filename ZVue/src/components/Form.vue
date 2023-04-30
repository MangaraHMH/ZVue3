<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Form',
  props: ['page'],
  data() {
    return {
      input: {
        name: '',
        sex: '',
        religion: '',
        phone: '',
        address: '',
        nik: ''
      }
    }
  },
  computed: {
    ...mapState(useCounterStore, ['pasienDetail']),
    title() {
      if (this.page === 'Add') {
        return 'Add Pasien'
      } else {
        return 'Edit Pasien'
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['addPasien', 'updatePasien', 'fetchPasienDetail']),
    handleSubmit() {
      if (this.page === 'Add') {
        this.addPasien(
          this.input.name,
          this.input.sex,
          this.input.religion,
          this.input.phone,
          this.input.address,
          this.input.nik
        )
      } else {
        this.updatePasien(
          this.pasienDetail.id,
          this.input.name,
          this.input.sex,
          this.input.religion,
          this.input.phone,
          this.input.address,
          this.input.nik
        )
      }
    }
  },
  created() {
    if (this.page === 'Edit') {
      this.fetchPasienDetail(this.$route.params.id)
      this.input.name = this.pasienDetail.name
      this.input.sex = this.pasienDetail.sex
      this.input.religion = this.pasienDetail.religion
      this.input.phone = this.pasienDetail.phone
      this.input.address = this.pasienDetail.address
      this.input.nik = this.pasienDetail.nik
    }
  }
}
</script>

<template>
  <div class="form">
    <div id="form" className="container text-center">
      <h2>{{ title }}</h2>
      <form id="form" @submit.prevent="handleSubmit()">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-name"
            placeholder="Enter name here"
            autocomplete="off"
            
            v-model="input.name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-sex"
            placeholder="Enter gender here"
            autocomplete="off"
            
            v-model="input.sex"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-religion"
            placeholder="Enter religion here"
            autocomplete="off"
            
            v-model="input.religion"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-phone"
            placeholder="Enter phoneNumber here"
            autocomplete="off"
            
            v-model="input.phone"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-address"
            placeholder="Enter address here"
            autocomplete="off"
            
            v-model="input.address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="form-nik"
            placeholder="Enter nik here"
            autocomplete="off"
            
            v-model="input.nik"
          />
        </div>
        <div>
          <button className="btn btn-outline-primary" id="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
