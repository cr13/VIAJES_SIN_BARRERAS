
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
});
