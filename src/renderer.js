const loadMods = async () => {
    const mods = await window.modlist.getMods();
    console.log(mods)
    return mods
}

document.querySelector('button').addEventListener('click', async (ev) => {
    const ul = document.querySelector('#modlist');
    const mods = await loadMods();
    mods.forEach(mod => {
        const li = document.createElement('li');
        li.textContent = mod.name;
        ul.appendChild(li)
    });
});