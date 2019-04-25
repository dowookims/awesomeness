import React from 'react';
import styled, { createGlobalStyle, css,  } from 'styled-components';

// injectGlobal was deprecated so use 'createGlobalStyle' instead.
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color : white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: "wow",
})`
  border: none;
  ${awesomeCard};
`

const Container = styled.div`
  height: 100vh;
  width: 100%
  background-color: #2c3e50;
`




function App2() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Container>
        <Input />
      </Container>
    </React.Fragment>
  );
}


export default App2;
