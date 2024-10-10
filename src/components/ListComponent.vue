<template>
  <v-container>
    <h3 class="mb-1">Lista de Médicos</h3>

    <v-data-table
      v-model:page="page"
      :items="paginatedDoctors"
      :headers="headers"
      :items-per-page="itemsPerPage"
    >

      <template v-slot:[`item.actions`]="{ index }">
        <v-btn color="red" class="mx-2" @click="removeDoctor(index + startIndex)">
          Deletar
        </v-btn>
        <v-btn color="green" @click="removeDoctor(index + startIndex)">
          Editar
        </v-btn>
      </template>


      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="5"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>

  </v-container>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    doctors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,       
      itemsPerPage: 2,      
      headers: [            
        { key: 'name', title: 'Nome' },
        { key: 'crm', title: 'CRM' },
        { key: 'state', title: 'Estado' },
        { key: 'status', title: 'Situação' },
        { key: 'actions', title: 'Ações', sortable: false }
      ]
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.doctors.length / this.itemsPerPage)
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage
    },
    paginatedDoctors() {
      return this.doctors.slice(this.startIndex, this.startIndex + this.itemsPerPage)
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    removeDoctor(index) {
      this.$emit('remove-doctor', index)
      if (this.paginatedDoctors.length === 0 && this.currentPage > 1) {
        this.currentPage--
      }
    }
  }
}
</script>

<style scoped>
.v-data-table {
  margin-top: 10px;
}
.v-pagination {
  justify-content: center;
}
</style>
