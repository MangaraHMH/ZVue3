<script>
import Form from '../components/Form.vue'
export default {
  name: 'Add',
  components: { Form },
  data() {
    return {
      page: 'Add'
    }
  }
}
</script>

<template>
  <Form :page="page" />
</template>
