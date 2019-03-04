const sequid = require(".").default;
const assert = require("assert");

var seed = sequid();

assert.strictEqual(seed.next().value, 1);
assert.strictEqual(seed.next().value, 2);
assert.strictEqual(seed.next().value, 3);

var seed = sequid(Number.MAX_SAFE_INTEGER - 3);

assert.strictEqual(seed.next().value, Number.MAX_SAFE_INTEGER - 2);
assert.strictEqual(seed.next().value, Number.MAX_SAFE_INTEGER - 1);
assert.strictEqual(seed.next().value, Number.MAX_SAFE_INTEGER);
assert.strictEqual(seed.next().value, Number.MAX_SAFE_INTEGER - 2);