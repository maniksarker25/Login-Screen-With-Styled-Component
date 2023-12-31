import { useState } from "react";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function App() {
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword)
  const Container = styled.div`
    max-width: 1280px;
    margin: 100px auto;

    padding: 10px;
    @media (min-width: 1024px) {
      display: flex;
      justify-items: center;
      border: 2px solid #1575a7;
      gap: 60px;
    }
  `;
  const InnerDiv1 = styled.div`
    width: 100%;
    padding: 20px;
    @media (min-width: 1024px) {
      width: 40%;
    }
  `;
  const FullWidthImage = styled.img`
    width: 100%; /* Set the width to 100% to make it full-width */
  `;

  const InnerDiv2 = styled.div`
    width: 100%;
    margin: auto 10px;
    @media (min-width: 1024px) {
      width: 60%;
    }
  `;
  const FormContainer = styled.div`
    width: 90%;
    margin: 0 auto;
  `;
  const Heading = styled.h1`
    text-align: center;
  `;
  const InputContainer = styled.div`
    margin-top: 20px;
    position: relative;
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
    cursor: pointer;
  `;
  const TermsAndConditionsContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const TermsAndConditionsLabel = styled.label`
    color: #f89c41;
    text-decoration: underline;
    cursor: pointer;
  `;

  const AgreeToText = styled.span`
    color: black;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
  `;
  const LoginButton = styled.button`
    width: 60%;
    background-color: #1575a7;
    border-radius: 3px;

    color: white;
    padding: 10px;
    margin-top: 30px;
    cursor: pointer;
    border: none;
  `;
  const LastContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const LastText = styled.p`
    font-weight: bold;
  `;
  const SignUpText = styled.p`
    font-weight: bold;
    color: #f89c41;
    cursor: pointer;
    text-decoration: underline;
  `;

  const ViewIcon = styled.div`
    position: absolute;
    right: 0px;
    bottom: 2.5px;
    cursor: pointer;
  `;

  // handle password visibility
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Container>
        <InnerDiv1>
          <FullWidthImage
            src="https://i.ibb.co/cYMF1pd/Screenshot-2023-10-28-174833.png"
            alt=""
          />
        </InnerDiv1>
        <InnerDiv2>
          <FormContainer>
            <Heading>Login</Heading>
            <InputContainer>
              <Label htmlFor="loginId">Login ID:</Label>
              <Input type="text" id="loginId" placeholder="Inter Login Id" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password:</Label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
              <ViewIcon onClick={handlePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon  /> : <RemoveRedEyeIcon  />}
              </ViewIcon>
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
              <TermsAndConditionsLabel>
                Terms and Conditions
              </TermsAndConditionsLabel>
            </TermsAndConditionsContainer>
            <ButtonContainer>
              <LoginButton>Login</LoginButton>
            </ButtonContainer>
            <LastContainer>
              <LastText>Don't have any account?</LastText>
              <SignUpText>Register Here</SignUpText>
            </LastContainer>
          </FormContainer>
        </InnerDiv2>
      </Container>
    </>
  );
}

export default App;
