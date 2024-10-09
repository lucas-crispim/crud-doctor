<template>
  <div class="container">
    <div class="jumbotron">
      <p class="lead">
        Cadastre médicos e gerencie a lista de profissionais
      </p>
      <hr class="my-4">
    </div>

    <FormComponent @add-doctor="handleAddDoctor" />
    <hr class="my-4">
    <ListComponent :doctors="doctors" @remove-doctor="handleRemoveDoctor" />
  </div>
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