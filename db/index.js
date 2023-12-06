const { log, size_byte } = require("../lib");
const fs = require("fs-extra");
const path = require("path");

const fileName = path.join(__dirname, "./db.json");

function read() {
    const time = Date.now();

    try {
        const data = fs.readFileSync(fileName, 'utf8');

        if (2000 <= (Date.now() - time)) {
            log(`[DB-read] Сильно превышено время записи ${(Date.now() - time)}ms`,"crit");
        } else if (1000 <= (Date.now() - time)) {
            log(`[DB-read] Средне превышено время записи ${(Date.now() - time)}ms`,"err");
        } else if (500 <= (Date.now() - time)) {
            log(`[DB-read] Превышено время записи ${(Date.now() - time)}ms`,"warn");
        }

        return JSON.parse(data);
    } catch (err) {
        log(`Ошибка при записи данных ${err.stack}`, "error");
        return {};
    }
}

async function write(obj) {
    const time = Date.now();

    try {
        const data = JSON.stringify(obj, null, 4);
        await fs.writeFile(fileName, data, 'utf8');

        if (2000 <= (Date.now() - time)) {
            log(`[DB-write] Сильно превышено время записи ${(Date.now() - time)}ms`,"crit");
        } else if (1000 <= (Date.now() - time)) {
            log(`[DB-write] Средне превышено время записи ${(Date.now() - time)}ms`,"err");
        } else if (500 <= (Date.now() - time)) {
            log(`[DB-write] Превышено время записи ${(Date.now() - time)}ms`,"warn");
        }
    } catch (err) {
        log(`Ошибка при записи данных ${err.stack}`, "error");
    }
}

module.exports = { read, write };