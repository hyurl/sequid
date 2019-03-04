"use strict";

function* sequid(offset) {
    let id = offset || 0;

    while (true) {
        yield ++id;

        if (id === Number.MAX_SAFE_INTEGER) {
            id = offset || 0;
        }
    }
}

module.exports = sequid;
module.exports.default = sequid;