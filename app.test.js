const express = require('express');
const bodyParser = require('body-parser');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('./app.js'); 

describe('Testes da API', () => {
  // Teste para verificar a rota POST '/'
  it('Deve somar dois números', (done) => {
    const requestBody = {
      a: 5,
      b: 10,
    };

    chai
      .request(app)
      .post('/')
      .send(requestBody)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('sum').to.be.equal(15);
        done();
      });
  });
});
