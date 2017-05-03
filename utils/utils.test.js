const expect = require('expect'); // asserion library

const utils = require('./utils.js');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', (done) => {
  utils.square(3, (res) => {
    expect(res).toBe(9);
    done();
  });
});

it('should async add two numbers', (done) => { //для ассинхронных тестов
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: "Nikita"}).toEqual({name: "Nikita"}); //для объектов
//   // expect([2,3,4]).toInclude(5);
//   expect({
//     name: "Nikita",
//     age: 18,
//     location: "Russia"
//   }).toInclude({
//     age: 18
//   });
// });

it('should contain firstName and lastName', () => {
  var user = utils.setName({
    age: 18,
    location: "Russia"
  }, "Nikita Mingaleev");

  expect(user).toBeAn('object').toInclude({
    firstName: "Nikita",
    lastName: "Mingaleev"
  });
})
