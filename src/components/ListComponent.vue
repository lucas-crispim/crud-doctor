<template>
  <div>
    <h3>Lista de Médicos</h3>
    <!-- Tabela com os médicos -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CRM</th>
          <th>Estado</th>
          <th>Situação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doctor, index) in paginatedDoctors" :key="index">
          <td>{{ doctor.name }}</td>
          <td>{{ doctor.crm }}</td>
          <td>{{ doctor.state }}</td>
          <td>{{ doctor.status }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeDoctor(index + startIndex)">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage">Anterior</button>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="goToPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Próximo</button>
        </li>
      </ul>
    </nav>
  </div>
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
      itemsPerPage: 4
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
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
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
.pagination {
  justify-content: center;
}
.page-item.disabled .page-link {
  cursor: not-allowed;
}
.page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}
</style>