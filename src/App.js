import Expenses from './components/Expenses/Expenses';

const App = () => {
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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
