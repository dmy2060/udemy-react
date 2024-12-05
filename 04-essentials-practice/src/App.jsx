import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import ResultTable from './components/ResultTable.jsx';

import { calculateInvestmentResults } from './util/investment.js';
const INITNUMBERS = {
  INITALINVESTMENT: '10000',
  ANINUALINVESTMENT: '1200',
  EXPECTEDRETURN: '6',
  DURATION: '10',
};

const calculateDataWithInterest = inputData => {
  const calculateData = calculateInvestmentResults({
    initialInvestment: Number(inputData.INITALINVESTMENT),
    annualInvestment: Number(inputData.ANINUALINVESTMENT),
    expectedReturn: Number(inputData.EXPECTEDRETURN),
    duration: Number(inputData.DURATION),
  });

  const updateCalculateData = [...calculateData];

  for (let i = 0; i < updateCalculateData.length; i++) {
    const data = updateCalculateData[i];

    if (i === 0) {
      data.investedCapital = data.valueEndOfYear - data.interest;
    } else {
      data.investedCapital =
        updateCalculateData[i - 1].investedCapital + data.annualInvestment;
    }

    const totalInterestToDate = updateCalculateData
      .slice(0, i + 1)
      .reduce((sum, year) => sum + year.interest, 0);

    data.totalInterest = totalInterestToDate;
  }

  return updateCalculateData;
};

function App() {
  const [number, setNumber] = useState(INITNUMBERS);
  const [list, setList] = useState(() => calculateDataWithInterest(number));

  function handleNumberChange(event) {
    const { name, value } = event.target;
    const updateNum = { ...number, [name]: value };

    setNumber(() => updateNum);
    setList(calculateDataWithInterest(updateNum));
  }

  return (
    <>
      <Header text='Investment Calculator' />
      <form action='#'>
        <UserInput number={number} onChangeNumber={handleNumberChange} />
      </form>
      <ResultTable list={list} />
    </>
  );
}

export default App;
