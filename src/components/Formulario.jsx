import React from 'react';
import styled from '@emotion/styled';
import useSelect from '../hooks/useSelect';
import { monedas } from '../data/monedas';
import Error from './Error';
import { useEffect } from 'react';
import { useState } from 'react';

const Button = styled.button`
  background-color: #883bee;
  color: #fff;
  padding: 0.6rem 0;
  margin-top: 1rem;
  width: 100%;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background 300ms;

  &:hover {
    background-color: #5e2aa3;
  }
`;

const Formulario = ({ setMonedaACotizar }) => {
  const [listaCriptos, setListaCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelect('Elige tu Moneda', monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelect(
    'Elige tu Criptomoneda',
    listaCriptos
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const nombresCriptos = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setListaCriptos(() => {
          return resultado.Data.map((item) => {
            const { FullName, Internal } = item.CoinInfo;
            {
              const obj = { id: Internal, nombre: FullName };
              return obj;
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    };

    nombresCriptos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes('')) {
      setError(true);
      return;
    }

    setError(false);
    setMonedaACotizar({ moneda, criptomoneda });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>
      )}
      <SelectMonedas />
      <SelectCriptomoneda />
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Formulario;
