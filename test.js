const sequid = require(".").default;
const assert = require("assert");

var seq = sequid();

assert.strictEqual(seq.next().value, 1);
assert.strictEqual(seq.next().value, 2);
assert.strictEqual(seq.next().value, 3);

var seq2 = sequid(Number.MAX_SAFE_INTEGER - 3);

assert.strictEqual(seq2.next().value, Number.MAX_SAFE_INTEGER - 2);
assert.strictEqual(seq2.next().value, Number.MAX_SAFE_INTEGER - 1);
assert.strictEqual(seq2.next().value, Number.MAX_SAFE_INTEGER);
assert.strictEqual(seq2.next().value, undefined);

var seq3 = sequid(Number.MAX_SAFE_INTEGER - 3, true);

assert.strictEqual(seq3.next().value, Number.MAX_SAFE_INTEGER - 2);
assert.strictEqual(seq3.next().value, Number.MAX_SAFE_INTEGER - 1);
assert.strictEqual(seq3.next().value, Number.MAX_SAFE_INTEGER);
assert.strictEqual(seq3.next().value, Number.MAX_SAFE_INTEGER - 2);

console.log("#### OK ####");