const { ignoreErr } = require("./config.json");
const { log, time } = require("../lib");
const fs = require("fs");

process.stdin.resume();

function logger(txt) {
    fs.appendFileSync(__dirname + "/logs", txt);
}

process.on("uncaughtException", err => {
    logger(`ERROR-LOG[Exception][${time("data1")}]: ${err.stack}\n`);

    if (!ignoreErr) process.exit(1);
    log(`[ERROR][${time("data1")}]: ${err.stack}\n`, "err");
});

process.on("uncaughtExceptionMonitor", err => {
    if (ignoreErr) return;
    logger(`ERROR-LOG[ExceptionMonitor][${time("data1")}]: ${err.stack}\n`);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    logger(`ERROR-LOG[Rejection][${time("data1")}]: ${err.stack}\n`);

    if (!ignoreErr) process.exit(1);
    log(`[ERROR][${time("data1")}]: ${err.stack}\n`, "err");
});

process.on("SIGINT", () => {
    logger(`LOG[Close][${time("data1")}]: This is program stopping\n`);

    if (ignoreErr) process.exit(10);
    log(`[CLOSE][${time("data1")}]: This is program stopping\n`);
});