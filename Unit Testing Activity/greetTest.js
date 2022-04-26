var utils  = require('course-utilities');
var mit = utils.load('./greet.js', 'greet');

describe('test greet()', function () {
  test('should be called', function () {
    expect(greet('Emiliano')).toBeCalled();
  }); 

  test('output the correct string', () => {
    expect(greet("Emiliano").toBe('Hello, Emiliano'))
  })

  test('test if name = null', () => {
    expect(greet(null).toBe('Hello There!'))
  })

  test('test for uppercase', () => {
    expect(greet('EMILIANO').toBe('HELLO EMILIANO'))
  })

  test('test for array', () => {
    expect(greet(['Emiliano','Jorge','Amaya']).toBe('Hello, Emiliano, Jorge, Amaya'))
  })

});




