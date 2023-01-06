import { useState } from 'react';
import styled from '@emotion/styled';
import ImagenCriptos from './assets/img/imagen-criptos.png';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import { useEffect } from 'react';

const Contenedor = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 60%;
  margin: auto;
  @media (min-width: 776px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Imagen = styled.img`
  width: 20rem;
  margin: auto;
`;

const Titulo = styled.h1`
  color: #fff;
  text-align: center;

  &::after {
    content: '';
    background: #883bee;
    width: 12rem;
    height: 0.3rem;
    display: block;
    margin: 10px auto;
  }
`;

function App() {
  const [monedaACotizar, setMonedaACotizar] = useState({});
  const [resultado, setResultado] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (Object.keys(monedaACotizar).length > 0) {
      setSpinner(true);
      const cotizarMoneda = async () => {
        const { moneda, criptomoneda } = monedaACotizar;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setResultado(resultado.DISPLAY[criptomoneda][moneda]);
          setSpinner(false);
        } catch (error) {
          console.log(error);
        }
      };

      cotizarMoneda();
    }
  }, [monedaACotizar]);

  return (
    <Contenedor>
      <Imagen src={ImagenCriptos} alt="Diferentes iconos de criptomonedas" />
      <div>
        <Titulo>Cotizar Criptomonedas al Instante</Titulo>
        <Formulario setMonedaACotizar={setMonedaACotizar} />
        {spinner ? (
          <Spinner />
        ) : (
          resultado.PRICE && <Resultado resultado={resultado} />
        )}
      </div>
    </Contenedor>
  );
}

export default App;
