import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    var transactions = this.transactions;
    var income = 0;
    var outcome = 0;

    transactions.map(transaction =>
      transaction.type == "income" ?
      income += transaction.value :
      outcome += transaction.value
    );

    return { income, outcome, total: income - outcome };
  }

  public create(title: string, value: number, type: 'income' | 'outcome'): Transaction {
    var transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
