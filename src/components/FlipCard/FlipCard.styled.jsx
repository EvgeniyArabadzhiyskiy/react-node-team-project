import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  height: 620px;
  perspective: 700px;

  @media screen and (min-width: 768px) {
    width: 540px;
  }
`;

export const InnerCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: transform 600ms;
  transform-style: preserve-3d;

  transform: ${p => p.isFlipped && 'rotateY(180deg)'};
`;

const CardFace = styled.div`
  padding-top: ${p => p.theme.space[6]}px;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  border-radius: 20px;
  background-color: #fff;
  transform-style: preserve-3d;
`;

export const CardFront = styled(CardFace)`
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`;


// export const Title = styled.h2`
//   font-family: ${p => p.theme.fonts.heading};
//   font-size: 24px;
//   line-height: 35px;
//   font-weight: ${p => p.theme.fontWeights.normal};
//   text-align: center;

//   margin-bottom: 40px;

//   @media screen and (min-width: 768px) {
//     font-size: ${p => p.theme.fontSizes.l};
//     line-height: 45px;
//   }
// `;