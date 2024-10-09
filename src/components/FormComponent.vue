<template>
  <v-form @submit.prevent="addDoctor">
    <h3 class="mb-4">Adicionar Médico</h3>

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

    <v-btn color="success" class="mt-4" @click="addDoctor">Adicionar Médico</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      name: '', // Campo para o nome do médico
      crm: '', // Campo para o número do CRM
      state: '', // Campo para o estado do CRM (UF)
      status: 'Ativo', // Campo para a situação (Ativo/Inativo)
      // Lista de estados (UF)
      ufs: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    }
  },
  methods: {
    addDoctor() {
      if (this.name && this.crm && this.state) {
        const doctor = {
          name: this.name,
          crm: this.crm,
          state: this.state,
          status: this.status
        }
        this.$emit('add-doctor', doctor)
        this.resetForm() // Limpa o formulário
      }
    },
    resetForm() {
      this.name = ''
      this.crm = ''
      this.state = ''
      this.status = 'Ativo'
    }
  }
}
</script>