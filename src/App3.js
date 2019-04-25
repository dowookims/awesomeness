import React from 'react';
import styled, { createGlobalStyle, css, ThemeProvider  } from 'styled-components';
import theme from './theme';

// injectGlobal was deprecated so use 'createGlobalStyle' instead.
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Card = styled.div`
  background-color: white;
`



const Container = styled.div`
  height: 100vh;
  width: 100%
  background-color: #2c3e50;
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`


function App3() {
  return (
    
    <ThemeProvider theme={theme}>
    <React.Fragment>
      
      <GlobalStyle/>
      <Container>
        <Form />
      </Container>

    </React.Fragment>
    </ThemeProvider>
  );
}

const Form = () => (<Card><Button>Hello</Button></Card>)


export default App3;
