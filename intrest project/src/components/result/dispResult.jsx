import React from 'react'

const formatter= new Intl.NumberFormat('en-Us',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits:2
});

const dispResult = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(yearData => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>{formatter.format(yearData.savingsEndOfYear - props.initInvestment - yearData.yearlyContribution * yearData.year)}</td>
              <td>{formatter.format(props.initInvestment+yearData.yearlyContribution*yearData.year)}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default dispResult