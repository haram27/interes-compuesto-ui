const YearlyCalculation = ({ calculationData }) => {
  return (
    <tr className="calculation">
      <th>{calculationData.year}</th>
      <th>${calculationData.initialInvestment}</th>
      <th>${calculationData.contribution}</th>
      <th>${calculationData.interestRate}</th>
      <th>${calculationData.finalAmount}</th>
    </tr>
  )
}

export default YearlyCalculation
