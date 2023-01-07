import { useState } from 'react';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import { Card, CardBack, CardFront, InnerCard } from './FlipCard.styled';

const FlipCard = () => {
  const [isIncome, setIsIncome] = useState(false);

  return (
    <Card>
      <InnerCard isFlipped={isIncome}>
        <CardFront>
          <FormTransaction setIsIncome={setIsIncome} isIncome={isIncome} />
        </CardFront>

        <CardBack>
          <FormTransaction setIsIncome={setIsIncome} isIncome={isIncome} />
        </CardBack>
      </InnerCard>
    </Card>
  );
};

export default FlipCard;
