import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  height: 600px;
  perspective: 700px;

  @media screen and (min-width: 768px) {
    width: 540px;
  }
`;

export const InnerCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 10px solid rgba(255, 255, 255, 0.2);
  transition: transform 1000ms;
  transform-style: preserve-3d;

  transform: ${p => p.isFlipped && 'rotateY(180deg)'};
`;

const CardFace = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  transform-style: preserve-3d;
`;

export const CardFront = styled(CardFace)``;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`;
