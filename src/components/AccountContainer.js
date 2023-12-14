
import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the backend API
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddTransaction = (formData) => {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      setTransactions([...transactions, data]); // Update the transactions state with the new transaction
    })
    .catch(error => console.error('Error:', error));
  };

  const handleSearch = (term) => {
    // Logic for searching transactions
    // Update filtered transactions state accordingly
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
