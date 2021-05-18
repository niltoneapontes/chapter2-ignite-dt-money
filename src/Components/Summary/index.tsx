import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const deposits = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      return acc + transaction.amount;
    } else return acc;
  }, 0);

  const withdrawals = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'withdrawal') {
      return acc + transaction.amount;
    } else return acc;
  }, 0);

  const total = deposits - withdrawals;

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(withdrawals)}</strong>
      </div>
      <div className="highlight-total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(total)}</strong>
      </div>
    </Container>
  )
}