export const TransactionHistoryItem = ({ transactionItem }) => {
  //console.log(transactionItem);
  const { amount, currency, type } = transactionItem;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
