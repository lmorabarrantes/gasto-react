import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from "../src/helpers"
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { objectOf } from 'prop-types'

function App({}) {

  const [gastos, setGastos] = useState([])
  const [estimate, setEstimate] = useState()
  const [isValidEstimate, setIsValidEstimate] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})


  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 800);
    }
    
  }, [gastoEditar])
  
  

  const handleNuevoGasto = ()=>{
    
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 800);
    
  }
  const guardarGasto = (gasto)=>{
    console.log(gasto)
    if (gasto.id) {
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id
        ? gasto : gastoState)
        setGastos(gastosActualizados)
        setGastoEditar({})
    }else{
      //nuevo gASTO
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])

    }
    
    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
  }
  const eliminarGasto= (id) => {
    const gastosActualizados = gastos.filter(gasto => gasto.id =! id)
    setGastos(gastosActualizados)
  }
  return (
    <div className={modal ? "fijar" : "" }>
      <Header
        gastos={gastos}
        estimate={estimate}
        setEstimate={setEstimate}
        isValidEstimate={isValidEstimate}
        setIsValidEstimate={setIsValidEstimate}
      
      />

      {isValidEstimate && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
              

          </main>
          <div className='nuevo-gasto'>
            <img 
              src={IconoNuevoGasto} 
              alt="icono nuevo gasto" 
              onClick={handleNuevoGasto}
              
            />
          </div>
        </>

      )}
      
      {modal && <Modal 
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                />}
      

    </div>

  )
  
}


export default App
