const { log } = require("./lib");
const v8 = require("v8");

log("Включена оптимизация nodejs","ok");

v8.setFlagsFromString("--predictable-gc-schedule");
v8.setFlagsFromString("--gc-memory-reducer-start-delay-ms=0");
v8.setFlagsFromString("--compact-on-every-full-gc");
v8.setFlagsFromString("--disable-write-barriers");
v8.setFlagsFromString("--transition-strings-during-gc-with-stack");
v8.setFlagsFromString("--separate-gc-phases");
v8.setFlagsFromString("--retain-maps-for-n-gc=0");
v8.setFlagsFromString("--minor-gc-task-trigger=1");
v8.setFlagsFromString("--memory-reducer-single-gc");
v8.setFlagsFromString("--memory-reducer-gc-count=1");
v8.setFlagsFromString("--experimental-wasm-gc");
v8.setFlagsFromString("--wasm-code-gc");
v8.setFlagsFromString("--wasm-tier-up");
v8.setFlagsFromString("--wasm-simd-ssse3-codegen");
v8.setFlagsFromString("--wasm-lazy-validation");
v8.setFlagsFromString("--wasm-final-types");
v8.setFlagsFromString("--wasm-math-intrinsics");