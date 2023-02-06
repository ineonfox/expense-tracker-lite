import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "New desk",
      price: 199.99,
      date: new Date(2023, 1, 10),
    },
    {
      id: "e2",
      title: "Food",
      price: 265.37,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Bracelet",
      price: 27.85,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New phone",
      price: 495.95,
      date: new Date(2023, 0, 2),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
