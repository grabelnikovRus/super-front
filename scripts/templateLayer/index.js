const createLayer = require("./template/createLayer")

const layerNames = ["feature", "page", "entities"]

const layer = process.argv[2]
const name = process.argv[3]

if (!layer | !name) {
    throw new Error("Введите необходимые аргументы")
}

if (!layerNames.includes(layer)) {
    throw new Error("Неверное название слоя")
}

createLayer(layer, name);
