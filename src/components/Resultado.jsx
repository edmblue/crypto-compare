import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  color: #fff;
  font-size: 1.1rem;
`;

const Image = styled.img`
  width: 10rem;
`;

const Precio = styled.p`
  font-weight: 400;
`;

const Span = styled.span`
  font-weight: 900;
`;

const Resultado = ({ resultado }) => {
  const { HIGHDAY, LOWDAY, PRICE, LASTUPDATE, IMAGEURL } = resultado;

  return (
    <Contenedor>
      <Image
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="Representacion grafica de la moneda seleccionada"
      />
      <div>
        <Precio>
          El precio mas alto del dia es: <Span>{HIGHDAY}</Span>{' '}
        </Precio>
        <Precio>
          El precio mas bajo del dia es: <Span>{LOWDAY}</Span>{' '}
        </Precio>
        <Precio>
          Precio Actual: <Span>{PRICE}</Span>{' '}
        </Precio>
        <Precio>
          Ultima Actualizacion: <Span>{LASTUPDATE}</Span>{' '}
        </Precio>
      </div>
    </Contenedor>
  );
};

export default Resultado;
