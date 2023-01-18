import { useState } from 'react';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import { Card, CardBack, CardFront, InnerCard } from './FlipCard.styled';

const FlipCard = () => {
  const [isIncome, setIsIncome] = useState(false);

  return (
    <Card>
      <InnerCard isFlipped={isIncome}>
        <CardFront>
          <TransactionForm setIsIncome={setIsIncome} isIncome={isIncome} />
        </CardFront>

        <CardBack>
          <TransactionForm setIsIncome={setIsIncome} isIncome={isIncome} />
        </CardBack>
      </InnerCard>
    </Card>
  );
};

export default FlipCard;
