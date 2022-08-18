const theme = {
    "red":            { value: "#FF3B30", text: "white" },
    "orange":         { value: "#FF9500", text: "white" },
    "yellow":         { value: "#FFCC00", text: "#333333" },
    "green":          { value: "#34C759", text: "white" },
    "lightTurquoise": { value: "#00C7BE", text: "white" },
    "turquoise":      { value: "#2FB0C7", text: "white" },
    "lightBlue":      { value: "#32ADE6", text: "white" },
    "blue":           { value: "#007AFE", text: "white" },
    "indigo":         { value: "#5855D6", text: "white" },
    "violet":         { value: "#AF52DE", text: "white" },
    "pink":           { value: "#FF2E55", text: "white" },
    "burgundy":       { value: "#A2845E", text: "white" },

    "grey9": { value: "#1C1C1E", text: "white" },
    "grey8": { value: "#2C2C2E", text: "white" },
    "grey7": { value: "#636366", text: "white" },
    "grey6": { value: "#8E8E93", text: "#333333" },
    "grey5": { value: "#AEAEB2", text: "#333333" },
    "grey4": { value: "#C7C7CC", text: "#333333" },
    "grey3": { value: "#D1D1D6", text: "#333333" },
    "grey2": { value: "#E5E5EA", text: "#333333" },
    "grey1": { value: "#F2F2F7", text: "#333333" },
    "white": { value: "white", text: "#333333" }
}

const array = Object.keys(theme).map(val => val.toLowerCase());

export default {
    ...theme,

    text(mods = [], defaultColor = "#333333") {
        const textColor = mods
            .filter(mod => mod.startsWith("text"))
            .map(mod => mod.toLowerCase().replace("text", ""))
            .filter(mod => array.includes(mod))
            [0];

        if(textColor) {
            return theme[textColor].value;
        }

        const bgColor = mods.filter(mod => array.includes(mod.toLowerCase()))[0];

        return bgColor? theme[bgColor].text : defaultColor;
    },

    value(mods = [], defaultColor = "transparent") {
        const color = mods.filter(mod => array.includes(mod.toLowerCase()))[0];

        return color? theme[color].value : defaultColor;
    }
}