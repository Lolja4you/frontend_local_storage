import axios from 'axios';

const token = 'your_token_from_login'; // Полученный токен авторизации

async function authorizationData() {
  try {
    const response = await axios.get('http://your-django-server/api/endpoint', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    // Обработка полученных данных
  } catch (error) {
    console.error(error);
  }
}

// Вызов функции для получения данных с авторизацией
authorizationData();