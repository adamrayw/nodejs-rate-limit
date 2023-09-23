const limitter = require('express-rate-limit');

const customRateLimitter = (windowMs, max, message) => {
    return limitter({
        windowMs,
        max,
        message
    })
}

module.exports = customRateLimitter;