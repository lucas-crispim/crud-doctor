<template>
  <div>
    <h3>Adicionar Médico</h3>
    <form @submit.prevent="addDoctor">
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="name"
          placeholder="Digite o nome"
          autocomplete="off"
          required
        />
      </div>

      <div class="form-group">
        <label for="crm">Número do CRM</label>
        <input
          type="text"
          id="crm"
          class="form-control"
          v-model="crm"
          placeholder="Digite o número do CRM"
          autocomplete="off"
          required
        />
      </div>

      <div class="form-group">
        <label for="state">Estado do CRM (UF)</label>
        <select id="state" class="form-control" v-model="state" required>
          <option value="" disabled>Selecione o Estado</option>
          <option v-for="uf in ufs" :key="uf" :value="uf">{{ uf }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="status">Situação</label>
        <select id="status" class="form-control" v-model="status" required>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
      </div>

      <button type="submit" class="btn btn-success mt-2">Adicionar Médico</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      name: '',      
      crm: '',      
      state: '',    
      status: 'Ativo', 
      ufs: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'] // Lista de estados (UF)
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
        this.resetForm()
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