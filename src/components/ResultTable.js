import YearlyCalculation from './YearlyCalculation'

const ResultTable = ({ calculationData }) => {
  return (
    <>
      <label>
        <b>Ganancia por inversión: ${calculationData.investmentWinnings}</b>
      </label>
      <br />
      <label>
        <b>Monto final: ${calculationData.finalAmount}</b>
      </label>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Saldo inicial</th>
            <th>Aportación</th>
            <th>Rendimiento</th>
            <th>Saldo final</th>
          </tr>
        </thead>
        <tbody>
          {calculationData.yearlyCalculations.map((result) => (
            <YearlyCalculation key={result.year} calculationData={result} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ResultTable
