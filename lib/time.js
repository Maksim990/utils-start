module.exports = (str) => {
    let data = new Date();
    let years = data.getFullYear();
    let months = padStr(data.getMonth() + 1);
    let days = padStr(data.getDate());
    let hours = padStr(data.getHours());
    let minutes = padStr(data.getMinutes());
    let seconds = padStr(data.getSeconds());
    let ms = data.getMilliseconds();

    let list = {
        "data": `${days}.${months}.${years}`,
        "data1": `${days}.${months}.${years} ${hours}:${minutes}:${seconds}.${ms}`,
        "data2": `${days}.${months}.${years} ${hours}:${minutes}:${seconds}`,
        "data3": `${days}.${months}.${years} ${hours}:${minutes}`,
        "data4": `${hours}:${minutes}:${seconds}.${ms}`,
        "data5": `${hours}:${minutes}:${seconds}`,
        "data6": `${hours}:${minutes}`,
    };

    return list[str];
}

function padStr(i) {
    return i.toString().padStart(2, "0");
}