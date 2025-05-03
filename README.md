# 💣 Load Testing com K6

Projeto de teste de carga utilizando o [K6](https://k6.io/) para simular usuários simultâneos e gerar relatórios de performance.

## 📁 Estrutura do Projeto

```
loadTestK6/
│
├── config/
│   └── options.js              # Configurações de execução dos testes (VUs, duração etc.)
│
├── data/
│   └── env.js                  # Contém a URL base da API/serviço testado
│
├── tests/
│   └── load.test.js            # Script principal do teste de carga
│
├── results/
│   ├── summary.json            # Resultado bruto do teste (gerado pelo K6)
│   └── report.html             # Relatório HTML (gerado a partir do summary.json)
│
├── generate-report.js         # Script para converter o summary.json em report.html
│
└── README.md                  # Documentação do projeto
```

## 🚀 Como executar o teste de carga

1. Instale o [K6](https://k6.io/docs/getting-started/installation/).
2. No terminal, execute o teste com:

```bash
k6 run --summary-export=results/summary.json tests/load.test.js
```

Isso simulará **500 usuários simultâneos durante 5 minutos** (configurado em `config/options.js`) e salvará os resultados no arquivo `results/summary.json`.

## 📊 Como gerar o relatório em HTML

Após executar o teste, gere o relatório com:

```bash
node generate-report.js
```

O arquivo `results/report.html` será criado e poderá ser aberto diretamente no navegador.

## ⚙️ Configurações dos Testes

As configurações de carga estão em `config/options.js`. Exemplo:

```js
export const options = {
  vus: 500,
  duration: '5m',
};
```

A URL do endpoint testado está em `data/env.js`:

```js
export const BASE_URL = 'https://your-api-url.com';
```

## 📦 Dependências

Este projeto utiliza apenas `Node.js` para geração de relatórios. Instale com:

```bash
npm install
```

> Nenhuma dependência externa é obrigatória para executar os testes com K6.

## 🧪 Exemplo de teste (`load.test.js`)

```js
import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL } from '../data/env.js';
import { options } from '../config/options.js';

export { options };

export default function () {
  const res = http.get(`${BASE_URL}/endpoint`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}
```

## 📌 Requisitos

- Node.js 18+
- K6 instalado (CLI)

## 📝 Licença

Este projeto está sob a licença MIT.