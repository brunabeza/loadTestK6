import http from 'k6/http'
import { check, sleep } from 'k6'

export let options = {
  stages: [
    { duration: '1m', target: 100 },  
    { duration: '3m', target: 500 },  
    { duration: '1m', target: 500 },  
    { duration: '1m', target: 0 },   
  ],
};

export default function () {
  let res = http.get('https://api.mockapi.com/users')
  check(res, { 'status is 200': (r) => r.status === 200 })
  sleep(1)
}
