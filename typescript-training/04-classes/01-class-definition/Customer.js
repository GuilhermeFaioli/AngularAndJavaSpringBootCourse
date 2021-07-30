var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
