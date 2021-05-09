//Employee test to return role, id, email

const Employee = require("../lib/Employee");

test("getRole() should return \"Intern\"", () => {
    const employeeValue = "Employee";
    const employee = new Employee("Joy", employeeValue);
    expect(employee.getRole()).toBe(employeeValue);
  });

  test("Can get id from getId()", () => {
    const IDValue = 100;
    const ID = new Employee("Joy", IDValue);
    expect(ID.getId()).toBe(IDValue);
  });
  
  test("Can get email from getEmail()", () => {
    const emailValue = "test@test.com";
    const email = new Employee("Joy", 1, emailValue);
    expect(email.getEmail()).toBe(emailValue);
  });
  