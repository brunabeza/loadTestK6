export const options = {
    vus: 500,
    duration: '5m',
    thresholds: {
      http_req_duration: ['p(95)<500'], 
    },
  }
  