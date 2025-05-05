const fs = require('fs');
const path = require('path');

const summary = JSON.parse(fs.readFileSync(path.join(__dirname, 'results', 'summary.json')));

const html = `
<html>
<head>
  <title>k6 Load Test Summary</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    pre { background: #f4f4f4; padding: 10px; border-radius: 6px; }
  </style>
</head>
<body>
  <h1>k6 Load Test Summary</h1>
  <pre>${JSON.stringify(summary, null, 2)}</pre>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'results', 'report.html'), html);
console.log('✅ Relatório gerado em: results/report.html');
