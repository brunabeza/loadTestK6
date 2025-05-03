# 📈 Load Test Results Analysis with K6

## 🔍 Test Objective

Evaluate the performance of an API under load of 500 concurrent users for 5 minutes, using the K6 tool. The tested API was a public (or mock) endpoint, with the goal of observing response time, stability, and potential bottlenecks.

---

## ⚙️ Test Configuration

- **Tool Used**: K6  
- **Concurrent Users (VUs)**: 500  
- **Duration**: 5 minutes  

### Defined Thresholds:

- 95% of requests should have a response time below 500ms (`p(95)<500`)

### Checks Performed:

- Response status is 200  
- Response time below 500ms  

---

## 📊 Key Metrics Collected

| Metric                        | Value         |
|------------------------------|---------------|
| Total Requests               | 357,591       |
| Requests per Second          | ~1190         |
| % Requests with Status 200   | 100% ✅         |
| Average Response Time        | 414ms         |
| P90 (90% of requests)        | 687ms         |
| P95                          | 1.09s ❌       |
| % Requests < 500ms (Check)   | ~66.6% ❌      |

---

## ⚠️ Identified Bottlenecks

The response time at the 95th percentile (P95) exceeded the desired limit of 500ms, reaching 1.09s.  
This indicates latency under high load conditions.

Even though there were no status errors (all requests returned 200), the response time is a performance concern.

---

## 🧩 Possible Causes

- Lack of service scalability  
- Network or backend latency  
- Infrastructure limitations (CPU, database)  
- Absence of caching or load balancing  

---

## ✅ Recommendations

- Optimize the endpoint to improve response times:
  - Reduce the number of operations per request
  - Apply caching to static data
  - Scale services horizontally or vertically
- Test with different load levels (e.g., 100, 250, 1000 VUs) to identify the saturation point
- Monitor server resources during testing (CPU, RAM, I/O)

---

## 📄 Conclusion

The test showed that the API remains stable under 500 concurrent users but experiences significant slowdowns during peak loads, especially for 5% of the requests exceeding the expected performance threshold.

The report highlights the need for backend or infrastructure improvements to better handle high load scenarios.
