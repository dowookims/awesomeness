import React from 'react';
import styled from 'styled-components';




function App() {
  return (
    <Container>
      <Button>Success</Button>
      <Button danger>Dangerous</Button>
    </Container>
  );
}

const Button = styled.button`
  border-radius: 50px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  };
  background-color: ${props => props.danger? "#e74c3c":"#2ecc71"};
`;

const Container = styled.div`
  height: 100vh;
  width: 100%
  background-color: #2c3e50;
`


export default App;
