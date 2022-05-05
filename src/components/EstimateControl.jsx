import { useEffect, useState } from "react"


const EstimateControl = ({estimate,gastos}) => {


    const [disponible, setdisponible] = useState(estimate)
    const [gastado, setGastado] = useState(0)
    
    useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto )=> gasto.cantidad + total, 0)
      
      const totalDisponible  = estimate - totalGastado

      setdisponible(totalDisponible)
      
      setGastado(totalGastado)
      
      
    }, [gastos])
    
    const formatearCantidad = (cantidad)=>{
        return cantidad.toLocaleString("en-US",{
            style: "currency",
            currency: "USD"
          })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>GRAFICA</p>
        </div>  

          <div className='contenido-presupuesto'>
              <p>
                  <span>Presupuesto:</span>{formatearCantidad(estimate)}
              </p>
              <p>
                  <span>Cantidad disponible:</span>{formatearCantidad(disponible)}
              </p>
              <p>
                  <span>Catidad Gastada:</span>{formatearCantidad(gastado)}
              </p>

          </div>
    </div>
  )
}

export default EstimateControl