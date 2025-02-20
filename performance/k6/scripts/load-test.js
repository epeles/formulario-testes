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
    // Teste GET
    const getResponse = http.get(`${BASE_URL}/users`);
    check(getResponse, {
        'status 200 GET': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });

    // Teste POST
    const payload = JSON.stringify({
        nome: 'Usuário Teste',
        email: 'teste@exemplo.com',
        senha: 'SenhaForte123!'
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

    sleep(1);
}
