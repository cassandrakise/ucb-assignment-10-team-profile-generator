const Employee = require("../lib/Employee"); // parent or super class and therefore other classes inherit from this class

describe("getName", () => {
  it("Can create object from the class", () => { // = instantiate
    const testValue = "Trevor";
    const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
  });
});

describe("getId", () => {
  it("Can get id via getId()", () => {
    const testValue = 100;
    const employee = new Employee("Caroline", testValue);
   expect(employee.getId()).toBe(testValue);
});
});

describe("getEmail", () => {
  it("Can get email via getEmail()", () => {
    const testValue = "caroline@caroline.com";
    const employee = new Employee("Caroline", 1, testValue);
   expect(employee.getEmail()).toBe(testValue);
});
});


describe("getRole", () => {
  it("Should return employee via getRole()", () => {
    const testValue = "Employee";
    const employee = new Employee("Trevor", 1, "trevor@trevor.com");
   expect(employee.getRole()).toBe(testValue);
});
});

