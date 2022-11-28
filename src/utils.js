const path = require("path");
const fs = require("fs");

function isEnabled(modname) {
  return !modname.startsWith(".");
}

function cleanName(filename) {
  if (filename.startsWith(".")) {
    return filename.replace(/^\.+/g, "");
  } else {
    return filename;
  }
}

function isModFolder(modpath) {
  return fs.existsSync(path.join(modpath, "manifest.json"));
}

function loadMod(modpath) {
  if (!isModFolder(modpath)) {
    throw { name: "NotImplementedError", message: "too lazy to implement" };
  }

  const rawManifest = fs.readFileSync(path.join(modpath, "manifest.json"), {
    encoding: "utf-8",
  });
  const manifest = JSON.parse(stripBOM(rawManifest));
  return manifest;
}

function stripBOM(content) {
  content = content.toString();
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
}

function updateURLs(mod) {
  const updateKeys = mod.UpdateKeys;
  const urls = updateKeys.reduce((acc, cur) => {
    if (cur.startsWith("Nexus")) {
      const [_, id] = cur.split(":");
      return {
        ...acc,
        nexus: `https://www.nexusmods.com/stardewvalley/mods/${id}`,
      };
    }

    if (cur.startsWith("ModDrop")) {
      const [_, id] = cur.split(":");
      return {
        ...acc,
        moddrop: `https://www.moddrop.com/stardew-valley/mods/${id}`,
      };
    }

    if (cur.startsWith("GitHub")) {
      const [_, id] = cur.split(":");
      return {
        ...acc,
        github: `https://www.github.com/${id}`,
      };
    }
  }, {});
  return urls;
}

module.exports = {
  isEnabled,
  cleanName,
  isModFolder,
  loadMod,
  updateURLs,
};
