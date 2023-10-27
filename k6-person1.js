import http from 'k6/http';

export default function () {
  const url = 'http://localhost:8080/personCreate';
  const payload = JSON.stringify({
    Name: 'Leonardo',
    Age: 32,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}

