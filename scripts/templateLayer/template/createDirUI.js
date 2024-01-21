const fsPromises = require("fs/promises");
const resolvePath = require("./resolvePath")
const getFistCharUpperCase = require("./getFistCharUpperCase")

const { getDataUI } = require("./getData");

module.exports = async (layer, name) => {
    const nameFile = getFistCharUpperCase(name);

    try {
        await fsPromises.mkdir(resolvePath(layer, name, "ui"))

        await fsPromises.writeFile(
            resolvePath(layer, name, "ui", `${nameFile}.tsx`), 
            getDataUI(nameFile)
        )
    } catch(e) {
        console.log("Не удалось создать каталог UI")
    }
};
