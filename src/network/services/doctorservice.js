import apiClient from '../requests/api';

class DoctorService {
  constructor() {
    this.endpoint = '/doctors';
  }

  async getDoctors() {
    try {
      const response = await apiClient.get(this.endpoint);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar médicos: ' + error.message);
    }
  }

  async getDoctorById(id) {
    try {
      const response = await apiClient.get(`${this.endpoint}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar médico: ' + error.message);
    }
  }

  async addDoctor(doctor) {
    try {
      const response = await apiClient.post(this.endpoint, doctor);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao adicionar médico: ' + error.message);
    }
  }

  async updateDoctor(id, doctor) {
    try {
      const response = await apiClient.put(`${this.endpoint}/${id}`, doctor);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao atualizar médico: ' + error.message);
    }
  }

  async deleteDoctor(id) {
    try {
      const response = await apiClient.delete(`${this.endpoint}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao remover médico: ' + error.message);
    }
  }
}

export default new DoctorService();