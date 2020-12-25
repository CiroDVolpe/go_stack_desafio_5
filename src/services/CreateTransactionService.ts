import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(title: string, value: number, type: 'income' | 'outcome'): Transaction | null{
    var balance = this.transactionsRepository.getBalance();
    if(type == 'outcome' && (balance.total - value < 0)){
      throw new Error("Algo aconteceu.");
    }

    var transaction = this.transactionsRepository.create(title, value, type);

    return transaction;
  }
}

export default CreateTransactionService;
