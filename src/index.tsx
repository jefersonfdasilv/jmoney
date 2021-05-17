import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance web app',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 900,
          createAt: new Date()
        }

      ]

    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions',() => {
        return this.schema.all('transaction');
    });
    this.post('/transactions',(schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);