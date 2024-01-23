import React from "react";
import {
  ButtonLogin,
  CustomInputlogin,
  ErrorField,
  Labellogin,
  ListFieldLogin,
  LoginTitle,
  ThreeItemlogin,
  TwoItemlogin,
} from "./loginform.styled";

export default function LoginForm({
  setLoginEmail,
  setLoginPassword,
  login,
  error,
}) {
  return (
    <>
      <LoginTitle>Login</LoginTitle>
      <form onSubmit={(e) => e.preventDefault()}>
        <ListFieldLogin>
          <TwoItemlogin>
            {" "}
            <Labellogin>Email:</Labellogin>
            <CustomInputlogin
              type="email"
              placeholder="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </TwoItemlogin>
          {error && <ErrorField style={{ color: "red" }}>{error}</ErrorField>}
          <ThreeItemlogin>
            {" "}
            <Labellogin>Password:</Labellogin>
            <CustomInputlogin
              type="password"
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </ThreeItemlogin>
        </ListFieldLogin>
        <ButtonLogin onClick={login}>login</ButtonLogin>
      </form>
    </>
  );
}
