import Person from '../age';
import Planet from '../planet';
describe('Age', () => {

test("Should correctly construct a person with a past, current, and future age", () => { 
const person = new Person(31, 28, 33);
  expect(person.currentAge).toEqual(31);
  expect(person.pastAge).toEqual(28);
  expect(person.futureAge).toEqual(33);
  });
  
test("Should correctly construct Mercury and tell you how old you are on Mercury", () => {
  const Mer = new Planet("Mer", .24);
  expect(Mer.name).toEqual("Mer");
  });

// test("Should correcty calculate age on Mercury", () => {
//   const merAge = calcAge()  
// });
});