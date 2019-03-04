# Sequid

**A tiny tool to produce sequential numeric IDs.**

```typescript
import sequid from "sequid";
import * as assert from "assert";

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
```

## API

```typescript
function sequid(offset?: number, loop?: boolean): IterableIterator<number>
```

If `offset` is provided, the sequence will produce the first id started from the
next number of the offset. If the id reaches `Number.MAX_SAFE_INTEGER`, judging
by the `loop` argument, the iterator may restart from the very offset, or break
the sequence and quit iterating.