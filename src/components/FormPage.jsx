import React from "react";
import styled from "styled-components";

const FormPage = () => {
  return (
    <StyledFormContainer>
      <header>UIDesignDaily</header>
      <h1>Upload Files</h1>
      <section></section>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
  }

  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default FormPage;
