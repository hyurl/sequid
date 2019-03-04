"use strict";

function* sequid(offset, loop) {
    let id = offset || 0;

    while (true) {
        yield ++id;

        if (id === Number.MAX_SAFE_INTEGER) {
            if (loop) {
                id = offset || 0;
            } else {
                break;
            }
        }
    }
}

module.exports = sequid;
module.exports.default = sequid;