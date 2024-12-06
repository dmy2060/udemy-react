import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import ResultTable from './components/ResultTable.jsx';

const INITNUMBERS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [number, setNumber] = useState(INITNUMBERS);
  const inputIsValid = number.duration >= 1;

  function handleNumberChange(event) {
    const { name, value } = event.target;
    setNumber(number => {
      return {
        ...number,
        [name]: +value,
      };
    });
  }

  return (
    <>
      <Header text='Investment Calculator' />
      <UserInput number={number} onChangeNumber={handleNumberChange} />
      {!inputIsValid && (
        <p className='center'>Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable input={number} />}
    </>
  );
}

export default App;
