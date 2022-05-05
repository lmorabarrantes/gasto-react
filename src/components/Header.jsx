
import NewStimate from "./NewStimate"
import EstimateControl from "./EstimateControl"
const Header = ({estimate, setEstimate, isValidEstimate, setIsValidEstimate, gastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidEstimate ? (
          <EstimateControl
            estimate ={estimate}
            gastos={gastos}
          />
        ) : (
          <NewStimate
            estimate={estimate}
            setEstimate={setEstimate}
            setIsValidEstimate={setIsValidEstimate}
          />
        )}
        





    </header>
  )
}

export default Header