import { useState } from 'react';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import { Card, CardBack, CardFront, InnerCard } from './FlipCard.styled';

const FlipCard = () => {
  const [isIncome, setIsIncome] = useState(false);

  return (
    <Card>
      <InnerCard isFlipped={isIncome}>
        <CardFront>
          {/* <Title>Add transaction</Title> */}
          {/* {!isIncome &&  */}
          <FormTransaction setIsIncome={setIsIncome} isIncome={isIncome} />
          {/* } */}
        </CardFront>

        <CardBack>
          {/* <Title>Add transaction</Title> */}
          {/* {isIncome &&  */}
          <FormTransaction setIsIncome={setIsIncome} isIncome={isIncome} />
          {/* } */}
        </CardBack>
      </InnerCard>
    </Card>
  );
};

export default FlipCard;
