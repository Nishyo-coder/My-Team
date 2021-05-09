// Engineer Test to return role, github username


const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
  const EngineerValue = "Engineer";
  const engineer = new Engineer("Troy", EngineerValue);
  expect(engineer.getRole()).toBe(EngineerValue);
});

test("Can get GitHub username via getGithub()", () => {
    const GitValue = "GitHubUser";
    const gitname = new Engineer("Troy", 1, "test@test.com", GitValue);
    expect(gitname.getGithub()).toBe(GitValue);
  });
  

