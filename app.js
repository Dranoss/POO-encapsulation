var assert_1 = require('assert');
var BankCustomer = (function () {
    function BankCustomer(name, code) {
        this.name = name;
        this.code = code;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (secretCode) {
        if (secretCode == 3579) {
            return true;
        }
        else {
            return false;
        }
    };
    return BankCustomer;
})();
var customer = new BankCustomer('John Doe', 3579);
assert_1["default"].equal(typeof customer.getName, 'function');
assert_1["default"].equal(typeof customer.verifyPinInput, 'function');
assert_1["default"].equal(customer.getName(), 'John Doe');
assert_1["default"].ok(customer.verifyPinInput(3579));
