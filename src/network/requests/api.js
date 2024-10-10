import axios from 'axios';

// Configura o cliente axios com a URL base
const apiClient = axios.create({
  baseURL: 'https://seu-endpoint.com/api', // Substitua pelo seu endpoint
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor de resposta para tratar erros
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);

export default apiClient;