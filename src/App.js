import React from 'react';

import Expenses from './components/Expenses/Expenses';

// function App () {
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return (
  //   <div className="App">
  //     <body>
  //       <h1 class="heading_wrapper">Expense Data</h1>
  //       <ExpenseItem  title="Toilet Paper" amount="94.12" date={new Date(2023, 5, 5)} />

  //       {/* -- This is sending complete array object as a single parameter. -- */}
  //       {/* <ExpenseItem  expense={expenses[1]} /> */}
        
  //       <ExpenseItem  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
  //       <ExpenseItem  title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
  //       <ExpenseItem  title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
  //     </body>
  //   </div>
  // );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2 className='abhi_expense_heading'>Expense Log</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
