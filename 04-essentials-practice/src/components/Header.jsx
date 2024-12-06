import CalculatorLogo from '../assets/investment-calculator-logo.png';

export default function Header({ text }) {
  return (
    <header id='header'>
      <img src={CalculatorLogo} alt='Logo' />
      <h1>{text}</h1>
    </header>
  );
}
