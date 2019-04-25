import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

// injectGlobal was deprecated so use 'createGlobalStyle' instead.
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;


function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Container>
        <Button>Success</Button>
        <Button danger rotationTime={5}>Dangerous</Button>
        <Button
          as="a" 
          href="https://google.com">Go to Google </Button>
      </Container>
    </React.Fragment>
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
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${props => {
    if (props.danger) {
      return css`animation: ${rotation} ${props.rotationTime ? props.rotationTime+"s" : "2s"} linear infinite`;
    }
  }}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%
  background-color: #2c3e50;
`

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Anchor = Button.withComponent("a");
// withComponent is a candidate of deprecation so i'd better use 'as' keyword.
export default App;
