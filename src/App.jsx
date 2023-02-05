// Imports
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import { formatearDinero, calcularTotal } from './helpers'


// Aplicacion
function App() {

  // useStates
  const [cantidad, setCantidad] = useState(10000);
  const [plazo, setPlazo] = useState(6);
  const [total, setTotal] = useState(0);
  const [mensualidad, setMensualidad] = useState(0);

  // useEffects
  useEffect(() => {
    // Renderiza el total a pagar
    const totalPagar = calcularTotal(cantidad, plazo);
    setTotal(totalPagar);
  }, [cantidad, plazo]);

  useEffect(() => {
    // Renderiza la mensualidad
    setMensualidad(total / plazo);
  }, [total]);

  // Variables para inputs
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // handle del range
  function handleChange(e) {
    setCantidad(parseInt(e.target.value));
  } 

  // handle boton -
  function handleClickDecremento() {
    const valor = cantidad - STEP;

    // Si el valor es menor a 0 mostrar alerta y no se actualiza el valor
    if(valor < MIN) {
      alert('La cantidad no es valida');
      return;
    }

    setCantidad(valor);

  }

   // handle boton +
   function handleClickIncremento() {
    const valor = cantidad + STEP;

    // Si el valor es MAYOR a 20000 mostrar alerta y no se actualiza el valor
    if(valor > MAX) {
      alert('La cantidad no es valida');
      return;
    }

    setCantidad(valor);

  }

  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-lg'>
      <Header />

      <div className='flex justify-between my-6'>

        <Button 
          operador='-'
          function={handleClickDecremento}
        />

        <Button 
          operador='+'
          function={handleClickIncremento}
        />

      </div>

      <input 
        type='range'
        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
        onChange={ handleChange }
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-green-600'>
      { formatearDinero(cantidad) } pesos
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Elige un <span className='text-green-600'>plazo</span> a pagar
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={plazo}
        onChange={ e => setPlazo(+e.target.value) }
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
            Resumen <span className='text-green-600'>de pagos</span>
        </h2>

        <p className='text-xl text-gray-500 text-center font-bold'>{plazo} Meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(mensualidad)} mensual</p>
        <p className='text-xl text-gray-500 text-center font-bold'>Total a pagar: {formatearDinero(total)}</p>

      </div>

    </div>
  )
}

export default App
