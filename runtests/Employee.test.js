const Employee = require("../lib/Employee");

test("Can get id via getId()", () => {
  const IDValue = 100;
  const e = new Employee("Foo", IDValue);
  expect(e.getId()).toBe(IDValue);
});

