import Cards from './Cards';
import CardsWrapper from './CardsWrapper';

const CardBox: React.FC<TYPES.CardBoxProps> = ({ cardName }) => (
  <CardsWrapper {...{ cardName }}>
    <Cards {...{ cardName }} />
  </CardsWrapper>
);

export default CardBox;
