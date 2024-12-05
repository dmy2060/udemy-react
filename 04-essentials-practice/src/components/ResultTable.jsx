import { formatter } from '../util/investment.js';

export default function ResultTable({ list }) {
  return (
    <section>
      <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index + 1}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.totalInterest)}</td>
              <td>{formatter.format(item.investedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
