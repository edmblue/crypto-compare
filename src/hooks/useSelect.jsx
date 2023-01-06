import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  font-weight: 700;
  font-size: 1.3rem;
`;

const Select = styled.select`
  width: 100%;
  margin: 0.5rem 0;
  text-align: center;
  padding: 0.4rem 0;
  border-radius: 0.3rem;
`;

const useSelect = (label, opciones) => {
  const [state, setState] = useState('');
  const SelectField = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">--- Seleccione ---</option>
        {opciones.map((opcion) => {
          const { id, nombre } = opcion;
          return (
            <option key={id} value={id}>
              {nombre}
            </option>
          );
        })}
      </Select>
    </>
  );

  return [state, SelectField];
};

export default useSelect;
