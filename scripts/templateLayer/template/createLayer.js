const fsPromises = require("fs/promises");
const resolvePath = require("./resolvePath");
const createDirUI = require("./createDirUI");
const createDirModel = require("./createDirModel");

module.exports = async (layer, name) => {
    try {
        await fsPromises.mkdir(resolvePath(layer, name))
        await fsPromises.writeFile(resolvePath(layer, name, "index.ts"), "")
    } catch(e) {
        console.log("Не удалось создать каталог")
    }
    
    await createDirUI(layer, name)
    await createDirModel(layer, name)
}
