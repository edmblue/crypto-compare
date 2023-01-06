import styled from '@emotion/styled';

const ErrorDiv = styled.div`
  background-color: red;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-size: 1rem;
  padding: 5px 0;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
`;

const Error = ({ children }) => {
  return <ErrorDiv>{children}</ErrorDiv>;
};

export default Error;
