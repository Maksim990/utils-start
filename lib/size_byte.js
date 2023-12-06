module.exports = (bytes) => {
    if (bytes <= 1024) {
        return `${bytes}байт`;
    }

    const units = ["байт", "кб", "мб", "гб", "тб", "пб"];
    let i = 0;

    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }

    return `${bytes < 10 ? bytes.toFixed(2) : bytes < 100 ? bytes.toFixed(1) : bytes.toFixed(0)}${units[i]}`;
}