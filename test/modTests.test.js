const assert = require("assert");

const { isEnabled, cleanName } = require("../src/utils.js");

describe("isEnabled tests", () => {
  it("should recognize enabled mod correctly", () => {
    const modname = "EnabledMod";
    assert.equal(isEnabled(modname), true);
  });

  it("should recognize disabled mod correctly", () => {
    const modname = ".DisabledMod";
    assert.equal(isEnabled(modname), false);
  });

  it("should say true for an empty string", () => {
    const modname = "";
    assert.equal(isEnabled(modname), true);
  });
});

describe("Clean mod name", () => {
  it("should keep normal folder name as-is", () => {
    const name = "Mod";
    assert.equal(cleanName(name), name);
  });

  it("should remove a single dot from the beginning", () => {
    const name = ".Mod";
    assert.equal(cleanName(name), "Mod");
  });

  it("should remove multiple dots from the beginning", () => {
    const name = "...Mod";
    assert.equal(cleanName(name), "Mod");
  });
});
