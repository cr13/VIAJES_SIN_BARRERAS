
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);
describe('Test base de datos Mongo', function() {
  it('Deberia insertar IV con password iv17',function(done){
    chai.request(server)
    .post('/apis/usuarios')
    .send({name:'iv', dni:'25344587J', username: 'IV',passwords: 'iv17',email:'iv@ugr.es'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
  it('Deberia logerme con el usuario creado anteriormente',function(done){
    chai.request(server)
    .post('/apis/login')
    .send({ username: 'IV',passwords: 'iv17'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

  it('Deberia modificar el usuario IV y vamos a modificar el DNI:77124582Q y nombre:iv16_17',function(done){
    chai.request(server)
    .put('/apis/usuarios/'+'IV')
    .send({name:'iv16_17', dni:'77124582Q'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

  it('Deberia borrar el usuario IV',function(done){
    chai.request(server)
    .delete('/apis/usuarios/'+'77124582Q')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
  it('Deberia no logerme ya que acabo de eliminar el usuario IV',function(done){
    chai.request(server)
    .post('/apis/login')
    .send({ username: 'IV',passwords: 'iv17'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
});
