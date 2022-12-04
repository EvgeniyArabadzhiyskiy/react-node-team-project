import { CurrencyItem, Text } from './Currency.styled';

const CurrencyListItem = ({ arrow }) => {
  return (
    <>
      {arrow
        ? arrow.map(({ currencyCodeA, rateBuy, rateSell }) => (
            <CurrencyItem key={currencyCodeA}>
              <Text>{currencyCodeA === 840 ? 'USD' : 'EUR'}</Text>
              <Text>{Number(rateBuy).toFixed(2)}</Text>
              <Text>{Number(rateSell).toFixed(2)}</Text>
            </CurrencyItem>
          ))
        : null}
    </>
  );
};

export default CurrencyListItem;
