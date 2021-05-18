import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return [
        {
          id: 1,
          transaction: 'Transaction 1',
          amount: 500,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          transaction: 'Salário',
          amount: 2000,
          type: 'deposit',
          category: 'Pagamentos',
          createdAt: new Date()
        },
        {
          id: 3,
          transaction: 'Aluguel',
          amount: 1000,
          type: 'withdrawal',
          category: 'Moradia',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
