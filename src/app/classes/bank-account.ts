export class BankAccount {
    constructor(
        public accountBalance=0,
        public accountType="Saving",
        public customerName = "Dummy",
        public id=0,
        public customerId = 0,
        public accountDate=new Date()
    ){}
    //deposite logic
    //withdraw logic
}
