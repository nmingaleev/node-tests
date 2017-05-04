const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Nikita', 18);
    //expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Nikita', 18);
  })

  it('should call save user with user object', () => {
    var email = 'nmingaleev@yandex.ru';
    var password = '123abc';

    app.handleSingup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
