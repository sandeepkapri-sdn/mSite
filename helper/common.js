/**
 * [gnerateOTP - 4-digit random number (0000-9999) using substring]
 * @param  null
 * @return string
 */
exports.OTP = function() {
    const seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    return seq;
}
