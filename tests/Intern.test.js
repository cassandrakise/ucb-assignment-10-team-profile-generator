const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UPenn";
  const intern = new Intern("Marguerite", 1, "marguerite@marguerite.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("Marguerite", 1, "marguerite@marguerite.com", "UPenn");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UPenn";
  const intern = new Intern("Marguerite", 1, "marguerite@marguerite.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});