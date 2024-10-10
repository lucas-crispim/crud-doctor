<template>
  <v-container class="pa-0" align="center" justify="start">
    <v-card class="pa-2 mb-2">
      <FormComponent :doctor="selectedDoctor" @save-doctor="handleAddDoctor" @cancel-edit="handleCancelEdit"/>
    </v-card>

    <v-card class="pa-2 mb-6">
      <ListComponent :doctors="doctors" @remove-doctor="handleRemoveDoctor" @edit-doctor="handleEditDoctor"/>
    </v-card>
  </v-container>
</template>

<script>
import FormComponent from './FormComponent.vue'
import ListComponent from './ListComponent.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'HomePage',
  data() {
    return {
      doctors: [],
      selectedDoctor: null
    }
  },
  components: {
    FormComponent,
    ListComponent
  },
  methods: {
    handleAddDoctor(doctor) {
      if (doctor.id) {
        const index = this.doctors.findIndex(d => d.id === doctor.id);
        if (index !== -1) {
          this.doctors.splice(index, 1, doctor); // Atualiza o médico existente
        }
      } else {
        doctor.id = uuidv4();
        this.doctors.push(doctor);
      }
      this.selectedDoctor = null;
    },
    handleRemoveDoctor(index) {
      this.doctors.splice(index, 1)
    },
    handleEditDoctor(index) {
      const doctor = this.doctors[index]
      this.selectedDoctor = { ...doctor }
    },
    handleCancelEdit() {
      this.selectedDoctor = null
    }
  }
}
</script>

<style scoped>
.pa-0 {
  padding-top: 0 !important;
}
</style>