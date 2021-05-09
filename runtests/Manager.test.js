// Manager Test to return role, office number

const Manager = require("../lib/Manager");

test("getRole() should return \"Manager\"", () => {
  const ManagerValue = "Manager";
  const manager = new Manager("Nish", 2, "test@test.com", 100);
  expect(manager.getRole()).toBe(ManagerValue);
});

test("Can get office number via getOffice()", () => {
    const OfficeValue = 100;
    const number = new Manager("Nish", 1, "test@test.com", OfficeValue);
    expect(number.getOfficeNumber()).toBe(OfficeValue);
  });
  