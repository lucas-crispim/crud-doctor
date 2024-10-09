<template>
  <v-container class="pa-0" align="center" justify="start">
    <v-card class="pa-2 mb-2">
      <FormComponent @add-doctor="handleAddDoctor" />
    </v-card>

    <v-card class="pa-2 mb-6">
      <ListComponent :doctors="doctors" @remove-doctor="handleRemoveDoctor" />
    </v-card>
  </v-container>
</template>

<script>
import FormComponent from './FormComponent.vue'
import ListComponent from './ListComponent.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      doctors: []
    }
  },
  components: {
    FormComponent,
    ListComponent
  },
  methods: {
    handleAddDoctor(doctor) {
      this.doctors.push(doctor)
    },
    handleRemoveDoctor(index) {
      this.doctors.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.pa-0 {
  padding-top: 0 !important; /* Remove o padding padrão */
}
</style>