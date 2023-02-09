const InputForm = ({ handleSubmit, handleChange, amounts }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="initialInvestment">Inversión inicial</label>
        <br />
        <input
          type="number"
          name="initialInvestment"
          value={amounts.initialInvestment}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="annualContribution">Aportación anual</label>
        <br />
        <input
          type="number"
          name="annualContribution"
          value={amounts.annualContribution}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="contributionIncrease">
          % De incremento a la aportación anual
        </label>
        <br />
        <input
          type="number"
          name="contributionIncrease"
          value={amounts.contributionIncrease}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="investmentYears">Años de inversión</label>
        <br />
        <input
          type="number"
          name="investmentYears"
          value={amounts.investmentYears}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="percentRate">Rendimiento de inversión</label>
        <br />
        <input
          type="number"
          name="percentRate"
          value={amounts.percentRate}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Calcular</button>
      </form>
      <br />
      <br />
    </>
  )
}

export default InputForm
