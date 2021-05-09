//Intern  test to return role, school

const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const InternValue = "Intern";
    const intern = new Intern("Jill", InternValue);
    expect(intern.getRole()).toBe(InternValue);
  });
  
  test("Can get school from getSchool()", () => {
    const SchoolValue = "UCLA";
    const school = new Intern("Jill", 1, "test@test.com", SchoolValue);
    expect(school.getSchool()).toBe(SchoolValue);
  });
  