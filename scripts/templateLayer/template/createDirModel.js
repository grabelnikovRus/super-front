const fsPromises = require("fs/promises")
const resolvePath = require("./resolvePath");
const getFistCharUpperCase = require("./getFistCharUpperCase")
const { getDataTypes, getDataSlice } = require("./getData") 

module.exports = async (layer, name) => {
    const path = [layer, name, "model"]
    const nameFile = getFistCharUpperCase(name);

    try {
        await fsPromises.mkdir(resolvePath(...path))
        await fsPromises.mkdir(resolvePath(...path, "selectors"))
        await fsPromises.mkdir(resolvePath(...path, "services"))
        await fsPromises.mkdir(resolvePath(...path, "slice"))
        await fsPromises.mkdir(resolvePath(...path, "types"))

        await fsPromises.writeFile(
            resolvePath(...path, "types", "types.ts"), 
            getDataTypes(nameFile)
        )

        await fsPromises.writeFile(
            resolvePath(...path, "slice", `${name}Slice.ts`), 
            getDataSlice(nameFile, name)
        )
    } catch (e) {
        console.log("Не удалось создать католог model", e)
    }
}