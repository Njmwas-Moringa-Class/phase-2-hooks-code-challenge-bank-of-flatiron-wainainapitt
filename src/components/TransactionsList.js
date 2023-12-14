import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";
import Search from "./Search";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the backend API
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (term) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {filteredTransactions.map(transaction => (
            <Transaction
              key={transaction.id}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
