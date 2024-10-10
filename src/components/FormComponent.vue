<template>
  <v-form @submit.prevent="addOrUpdateDoctor">
    <h3 class="mb-4">{{ isEdit ? 'Editar Médico' : 'Adicionar Médico' }}</h3>

    <v-text-field
      v-model="name"
      label="Nome"
      placeholder="Digite o nome"
      outlined
      autocomplete="off"
      required
    ></v-text-field>

    <v-text-field
      v-model="crm"
      label="Número do CRM"
      placeholder="Digite o número do CRM"
      outlined
      autocomplete="off"
      required
    ></v-text-field>

    <v-select
      v-model="state"
      :items="ufs"
      label="Estado do CRM (UF)"
      placeholder="Selecione o Estado"
      outlined
      required
    ></v-select>

    <v-select
      v-model="status"
      :items="['Ativo', 'Inativo']"
      label="Situação"
      outlined
      required
    ></v-select>

    <v-btn color="success" class="mt-4" @click="addOrUpdateDoctor">
      {{ isEdit ? 'Salvar Médico' : 'Adicionar Médico' }}
    </v-btn>

    <v-btn v-if="isEdit" color="grey" class="mt-4 ml-2" @click="cancelEdit">
      Cancelar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    doctor: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      name: '',
      crm: '',
      state: '',
      status: 'Ativo',
      isEdit: false,
      ufs: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    }
  },
  watch: {
    doctor: {
      immediate: true,
      handler(newDoctor) {
        if (newDoctor) {
          this.name = newDoctor.name
          this.crm = newDoctor.crm
          this.state = newDoctor.state
          this.status = newDoctor.status
          this.isEdit = true
        } else {
          this.resetForm()
        }
      }
    }
  },
  methods: {
    addOrUpdateDoctor() {
      if (this.name && this.crm && this.state) {
        const doctor = {
          id: this.doctor ? this.doctor.id : null,
          name: this.name,
          crm: this.crm,
          state: this.state,
          status: this.status
        }
        this.$emit('save-doctor', doctor)
        this.resetForm()
      }
    },
    cancelEdit() {
      this.resetForm();
      this.$emit('cancel-edit');
    },
    resetForm() {
      this.name = ''
      this.crm = ''
      this.state = ''
      this.status = 'Ativo'
      this.isEdit = false
    }
  }
}
</script>
