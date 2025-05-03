import http from 'k6/http'
import { check } from 'k6'
import { options } from '../k6.config.js'
import { BASE_URL } from '../data/url.js'

export { options }

export default function () {
  const res = http.get(`${BASE_URL}/endpoint`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  })
}
