
import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData); // Pass form data to the parent component for submission
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} value={formData.date} />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            value={formData.category}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={handleChange}
            value={formData.amount}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
