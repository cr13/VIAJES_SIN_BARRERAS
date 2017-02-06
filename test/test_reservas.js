var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);
describe('Test base de datos POSTGRES:', function() {
  it('Debería insertar un tipo de habitación',function(done){
    chai.request(server)
    .post('/apis/newHab')
    .send({nombre:'Suite',bor:'N'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
  it('Deberia mostrar todos las habitaciones',function(done){
    chai.request(server)
    .get('/apis/newHab')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });
  it('Debería insertar EVENTO ruta a caballo',function(done){
    chai.request(server)
    .post('/apis/newEven')
    .send({nombre:'Ruta a caballo', des:'Ruta a caballo 10 km por sierra nevada', tpeven:'Ruta a caballo',fec:'2017-02-05T12:12',aforo:10,img:'null',bor:'N'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      done();
    });
  });

it('Deberia mostrar campos del tipo hab Suite',function(done){
  chai.request(server)
  .get('/apis/buscarBytpname/Suite')
  .end(function(err, res){
    res.should.have.status(200);
    res.should.be.json;
    done();
  });
});

it('Deberia mostrar todos los eventos',function(done){
  chai.request(server)
  .get('/apis/newEven')
  .end(function(err, res){
    res.should.have.status(200);
    res.should.be.json;
    done();
  });
});
it('Deberia mostrar evento 89',function(done){
  chai.request(server)
  .get('/apis/masinfo/'+89)
  .end(function(err, res){
    res.should.have.status(200);
    res.should.be.json;
    done();
  });
});

});
