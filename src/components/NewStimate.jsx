import { useState } from "react"
import Mensaje from "./Mensaje"
const NewStimate = ({estimate, setEstimate, setIsValidEstimate}) => {

  const [mensaje, setMensaje] = useState("")


  const handleStimate = (e) =>{
    e.preventDefault()
    if (!estimate || estimate  < 0 ) {
      setMensaje("presupuesto no valido")
      return
    }
    setMensaje("")
    setIsValidEstimate(true)


  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>


        <form onSubmit={handleStimate} className='formulario'>
            <div className='campo'>
                <label htmlFor="">Deffinir presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Añade Tu Presupuesto'
                    value={estimate}
                    onChange={(e)=> setEstimate (Number(e.target.value))}
                
                />
            </div>

            <input 
            type="submit" 
            value="Añadir"
            />

            {mensaje && <Mensaje tipo ="error">{mensaje}</Mensaje>}


        </form>



    </div>
  )
}

export default NewStimate