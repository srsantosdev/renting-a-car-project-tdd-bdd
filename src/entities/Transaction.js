class Transaction {
  constructor({ customer, amount, car, dueDate }) {
    this.customer = customer;
    this.amount = amount;
    this.car = car;
    this.dueDate = dueDate;
  }
}

module.exports = Transaction