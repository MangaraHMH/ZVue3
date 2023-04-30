import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000/pasien'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    pasien: [],
    pasienDetail: {}
  }),
  actions: {
    async fetchPasien() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}`
        })
        this.pasien = data
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async fetchPasienDetail(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/${id}`
        })
        this.pasienDetail = data
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async addPasien(name, sex, religion, phone, address, nik) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${baseUrl}`,
          data: { name, sex, religion, phone, address, nik }
        })
        this.router.push('/')
        Toastify({
          text: 'Succes Add Pasien',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          duration: 3000
        }).showToast()
      } catch (err) {
        Toastify({
          text: `${err.response.data.message[0]}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async updatePasien(id, name, sex, religion, phone, address, nik) {
      try {
        const { data } = await axios({
          method: 'PUT',
          url: `${baseUrl}/${id}`,
          data: { name, sex, religion, phone, address, nik }
        })
        this.router.push('/')
        Toastify({
          text: 'Succes Update Pasien',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          duration: 3000
        }).showToast()
      } catch (err) {
        Toastify({
          text: `${err.response.data.message[0]}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    },

    async deletePasien(id) {
      try {
        const { data } = await axios({
          method: 'DELETE',
          url: `${baseUrl}/${id}`
        })
        Toastify({
          text: 'Succes Delete Pasien',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
          },
          duration: 3000
        }).showToast()
        this.router.push('/')
      } catch (err) {
        Toastify({
          text: `${err.response.data.message}`,
          style: {
            background: 'linear-gradient(to right, #FF0000, #1A0000)'
          },
          duration: 3000
        }).showToast()
      }
    }
  }
})
