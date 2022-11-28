assert = require("assert");

const { updateURLs } = require("../src/utils.js");

describe("Should create update URLs correctly", () => {
  it("should return empty object if there are no update keys", () => {
    const mod = {
      UpdateKeys: [],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {});
  });

  it("should create NexusMods URL correctly", () => {
    const mod = {
      UpdateKeys: ["Nexus:4001"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      nexus: "https://www.nexusmods.com/stardewvalley/mods/4001",
    });
  });

  it("should create ModDrop URL correctly", () => {
    const mod = {
      UpdateKeys: ["ModDrop:4001"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      moddrop: "https://www.moddrop.com/stardew-valley/mods/4001",
    });
  });

  it("should create GitHub URL correctly", () => {
    const mod = {
      UpdateKeys: ["GitHub:user/repository"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      github: "https://www.github.com/user/repository",
    });
  });

  it("should create Nexus & ModDrop URL correctly", () => {
    const mod = {
      UpdateKeys: ["ModDrop:4001", "Nexus:4001"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      nexus: "https://www.nexusmods.com/stardewvalley/mods/4001",
      moddrop: "https://www.moddrop.com/stardew-valley/mods/4001",
    });
  });

  it("should create Nexus & GitHub URL correctly", () => {
    const mod = {
      UpdateKeys: ["Nexus:4001", "GitHub:user/repository"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      nexus: "https://www.nexusmods.com/stardewvalley/mods/4001",
      github: "https://www.github.com/user/repository",
    });
  });

  it("should create ModDrop & GitHub URL correctly", () => {
    const mod = {
      UpdateKeys: ["ModDrop:4001", "GitHub:user/repository"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      moddrop: "https://www.moddrop.com/stardew-valley/mods/4001",
      github: "https://www.github.com/user/repository",
    });
  });

  it("should create all three URLs correctly", () => {
    const mod = {
      UpdateKeys: ["Nexus:4001", "ModDrop:4001", "GitHub:user/repository"],
    };

    const urls = updateURLs(mod);

    assert.deepEqual(urls, {
      nexus: "https://www.nexusmods.com/stardewvalley/mods/4001",
      moddrop: "https://www.moddrop.com/stardew-valley/mods/4001",
      github: "https://www.github.com/user/repository",
    });
  });
});
