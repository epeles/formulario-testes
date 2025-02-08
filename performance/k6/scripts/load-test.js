import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('errors');

export const options = {
    stages: [
        { duration: '30s', target: 100 }, // Rampa de subida para 100 usuários
        { duration: '1m', target: 100 },  // Manter 100 usuários por 1 minuto
        { duration: '30s', target: 0 },   // Rampa de descida
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% das requisições devem responder em até 500ms
        errors: ['rate<0.1'],             // Taxa de erro deve ser menor que 10%
    },
};

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export default function () {
    // Teste GET todos os usuários
    const getResponse = http.get(`${BASE_URL}/users`);
    check(getResponse, {
        'status 200 GET all': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });

    // Teste GET usuário específico
    const getUserResponse = http.get(`${BASE_URL}/users/1`);
    check(getUserResponse, {
        'status 200 GET single': (r) => r.status === 200,
        'response time < 150ms': (r) => r.timings.duration < 150,
        'has user data': (r) => r.json().id === 1
    });

    // Teste POST
    const payload = JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const postResponse = http.post(`${BASE_URL}/users`, payload, params);
    check(postResponse, {
        'status 201 POST': (r) => r.status === 201,
        'response time < 300ms': (r) => r.timings.duration < 300,
    });

    // Teste PUT
    const updatePayload = JSON.stringify({
        name: 'Updated User',
        email: 'updated@example.com',
        phone: '0987654321'
    });

    const putResponse = http.put(`${BASE_URL}/users/1`, updatePayload, params);
    check(putResponse, {
        'status 200 PUT': (r) => r.status === 200,
        'response time < 300ms': (r) => r.timings.duration < 300,
    });

    // Teste DELETE
    const deleteResponse = http.del(`${BASE_URL}/users/1`);
    check(deleteResponse, {
        'status 200 DELETE': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });

    // Registrar erro se alguma requisição falhar
    errorRate.add(getResponse.status !== 200);
    errorRate.add(getUserResponse.status !== 200);
    errorRate.add(postResponse.status !== 201);
    errorRate.add(putResponse.status !== 200);
    errorRate.add(deleteResponse.status !== 200);

    sleep(1);
}
