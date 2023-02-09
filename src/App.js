import { useState } from 'react'
import ResultTable from './components/ResultTable'
import Notification from './components/Notification'
import calculate from './services/calculation'
import InputForm from './components/InputForm'

const App = () => {
  const [amounts, setAmounts] = useState({
    initialInvestment: 1000,
    annualContribution: 0,
    contributionIncrease: 0,
    investmentYears: 1,
    percentRate: 10
  })
  const [results, setResults] = useState({})
  const [errorMessages, setErrorMessages] = useState([])

  const handleChange = (e) => {
    setAmounts({
      ...amounts,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setResults([])
    setErrorMessages([])

    calculate(amounts)
      .then((calculationResult) => {
        setResults(calculationResult.data)
      })
      .catch((error) => {
        let errors = []
        if (Array.isArray(error.response?.data)) {
          error.response.data.map((e) => errors.push(e))
        } else {
          errors.push(
            'No es posible procesar su solicitud con los datos proporcionados'
          )
        }
        setErrorMessages(errors)
      })
  }

  return (
    <div>
      <h1>Calculadora de interés compuesto</h1>
      <Notification messages={errorMessages} />
      <InputForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        amounts={amounts}
      />
      {results.yearlyCalculations?.length > 0 ? (
        <ResultTable calculationData={results} />
      ) : (
        <></>
      )}
    </div>
  )
}
export default App
