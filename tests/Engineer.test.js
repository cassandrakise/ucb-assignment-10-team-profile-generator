const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("can create a new Engineer", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
  })
});

it("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Trevor", 1, "trevor@trevor.com", testValue);
  expect(engineer.getGitHub()).toBe(testValue);
})

it("getRole should return Engineer", () => { 
    const testValue = "Engineer";
    const engineer = new Engineer("Caroline", 1, "caroline@caroline.com", "GitHubLink")
  expect(engineer.getRole()).toBe(testValue);

})
