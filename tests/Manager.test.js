const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  it("can create a new Manager", () => {
    const manager= new Manager();
    expect(typeof(manager)).toBe("object");
  })
});

it("Can set name", () => {
  const name = "Trevor";
  const manager = new Manager(name);
  expect(manager.name).toBe(name);
});

it('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const manager = new Manager("Trevor", 1, "trevor@trevor.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

it('Can set office number thru constructor', () => {
  const testValue = 100;
  const manager = new Manager("Trevor", 1, "trevor@trevor.com", testValue);
  expect(manager.office).toBe(testValue);
})

it('Can get office number thru getOffice()', () => {
  const testValue = 100;
  const manager = new Manager("Trevor", 1, "trevor@trevor.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});

