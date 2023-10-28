import { useState } from "react";
import styled from "styled-components";
function App() {
  const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    @media (min-width: 1024px) {
      display: flex;
      justify-items: center;
      gap: 30px;
    }
  `;
  const InnerDiv1 = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
      width: 40%;
    }
  `;
  const InnerDiv2 = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
      width: 60%;
    }
  `;
  const FormContainer = styled.div`
    width: 90%;
  `;
  const Heading = styled.h1`
    text-align: center;
  `;
  const InputContainer = styled.div`
    margin-top: 20px;
  `;

  const Label = styled.label`
    font-weight: bold;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    margin-top: 5px;
  `;
  const CheckboxPasswordContainer = styled.div`
    margin-top: 2px;
    display: flex;
    justify-content: space-between;
  `;
  const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const CheckBox = styled.input`
    margin-right: 5px;
  `;

  const ChangePassword = styled.p`
    color: #f89c41;
  `;
  const TermsAndConditionsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TermsAndConditionsLabel = styled.label`
color: #f89c41;
text-decoration: underline;
`;

const AgreeToText = styled.span`
  color: black;
`;

  return (
    <>
      <Container>
        <InnerDiv1>
          <img
            src="https://i.ibb.co/cYMF1pd/Screenshot-2023-10-28-174833.png"
            alt=""
          />
        </InnerDiv1>
        <InnerDiv2>
          <FormContainer>
          <Heading>Login</Heading>
          <InputContainer>
            <Label htmlFor="loginId">Login ID:</Label>
            <Input type="text" id="loginId" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password:</Label>
            <Input type="password" id="password" />
          </InputContainer>
          <CheckboxPasswordContainer>
            <CheckBoxContainer>
              <CheckBox type="checkbox" id="rememberMe" />
              <Label htmlFor="rememberMe">Remember Me</Label>
            </CheckBoxContainer>
            <ChangePassword>Change Password</ChangePassword>
          </CheckboxPasswordContainer>
          <TermsAndConditionsContainer>
  <CheckBox type="checkbox" id="agreeToTerms" />
  <AgreeToText>Agree to</AgreeToText>{" "}
  <TermsAndConditionsLabel>Terms and Conditions</TermsAndConditionsLabel>
</TermsAndConditionsContainer>
          </FormContainer>
        </InnerDiv2>
      </Container>
    </>
  );
}

export default App;
