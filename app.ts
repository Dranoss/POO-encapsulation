import  assert  from  'assert';

class BankCustomer{
     private name: string;
     private code: number;

    constructor(name: string, code: number){
        this.name = name;
        this.code = code;
    }

    getName(){
        return this.name;
    }
    verifyPinInput(secretCode){
        if (secretCode == 3579){
            return true;
        }
        else{
            return false;
        }
    }
}

const customer = new BankCustomer('John Doe', 3579);
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput(3579));