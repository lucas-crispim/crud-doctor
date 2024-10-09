<template>
  <v-container>
    <h3 class="mb-4">Lista de Médicos</h3>

    <v-data-table
      :items="paginatedDoctors"
      :headers="headers"
      class="elevation-1"
    >
      <template #body="{ items }">
        <tbody>
          <tr v-for="(doctor, index) in items" :key="index">
            <td>{{ doctor.name }}</td>
            <td>{{ doctor.crm }}</td>
            <td>{{ doctor.state }}</td>
            <td>{{ doctor.status }}</td>
            <td>
              <v-btn color="error" @click="removeDoctor(index + startIndex)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      color="primary"
      class="mt-4"
      @input="goToPage"
    ></v-pagination>
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
      itemsPerPage: 4,      
      headers: [            
        { text: 'Nome', value: 'name' },
        { text: 'CRM', value: 'crm' },
        { text: 'Estado', value: 'state' },
        { text: 'Situação', value: 'status' },
        { text: 'Ações', value: 'actions', sortable: false }
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
  margin-top: 16px;
}
.v-pagination {
  justify-content: center;
}
</style>
