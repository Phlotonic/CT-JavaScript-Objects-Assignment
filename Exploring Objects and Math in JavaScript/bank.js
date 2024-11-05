function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
    } else {
        return 'Deposit amount must be positive.';
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.balance}`;
    } else if (amount > this.balance) {
        return 'Insufficient funds.';
    } else {
        return 'Withdrawal amount must be positive.';
    }
};

Account.prototype.calculateInterest = function(rate, years) {
    let compoundInterest = this.balance * Math.pow((1 + rate / 100), years);
    return `Balance after ${years} years at ${rate}% interest: $${compoundInterest.toFixed(2)}`;
};

let accounts = [];

function createAccount() {
    let accountNumber = document.getElementById('accountNumberInput').value;
    let owner = document.getElementById('ownerInput').value;
    let balance = parseFloat(document.getElementById('balanceInput').value);
    let account = new Account(accountNumber, owner, balance);
    accounts.push(account);
    displayAccounts();
}

function depositFunds() {
    let accountNumber = document.getElementById('accountNumberInput').value;
    let amount = parseFloat(document.getElementById('amountInput').value);
    let account = accounts.find(acc => acc.accountNumber === accountNumber);
    if (account) {
        let message = account.deposit(amount);
        document.getElementById('transactionOutput').innerText = message;
    } else {
        document.getElementById('transactionOutput').innerText = 'Account not found.';
    }
    displayAccounts();
}

function withdrawFunds() {
    let accountNumber = document.getElementById('accountNumberInput').value;
    let amount = parseFloat(document.getElementById('amountInput').value);
    let account = accounts.find(acc => acc.accountNumber === accountNumber);
    if (account) {
        let message = account.withdraw(amount);
        document.getElementById('transactionOutput').innerText = message;
    } else {
        document.getElementById('transactionOutput').innerText = 'Account not found.';
    }
    displayAccounts();
}

function calculateInterest() {
    let accountNumber = document.getElementById('accountNumberInput').value;
    let rate = parseFloat(document.getElementById('rateInput').value);
    let years = parseInt(document.getElementById('yearsInput').value);
    let account = accounts.find(acc => acc.accountNumber === accountNumber);
    if (account) {
        let message = account.calculateInterest(rate, years);
        document.getElementById('interestOutput').innerText = message;
    } else {
        document.getElementById('interestOutput').innerText = 'Account not found.';
    }
}

function displayAccounts() {
    let accountsDiv = document.getElementById('accounts');
    accountsDiv.innerHTML = '';
    accounts.forEach(account => {
        let accountInfo = document.createElement('p');
        accountInfo.textContent = `Account Number: ${account.accountNumber}, Owner: ${account.owner}, Balance: $${account.balance.toFixed(2)}`;
        accountsDiv.appendChild(accountInfo);
    });
}
