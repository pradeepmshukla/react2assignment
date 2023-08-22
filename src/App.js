import './App.css';
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Home Expense',
    amount: 18000,
    date: new Date(2022, 3, 24),
  },
  { id: 'e2', title: 'New Phone', amount: 25000, date: new Date(2020, 20, 11) },
  {
    id: 'e3',
    title: 'Home EMI',
    amount: 22210,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'Car EMI',
    amount: 1500,
    date: new Date(2023, 8, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;