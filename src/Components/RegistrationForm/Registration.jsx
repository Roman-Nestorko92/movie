import React from "react";
import {
  ButtonRegistration,
  CustomInput,
  FirstItem,
  Label,
  ListField,
  RegistrationTitle,
  ThreeItem,
  TwoItem,
} from "./regaistration.styled";
import { ErrorField } from "../LoganForm/loginform.styled";

export default function Registration({
  setRegistrEmail,
  setRegistrPassword,
  registration,
  error,
}) {
  return (
    <>
      <RegistrationTitle>Registration</RegistrationTitle>

      <form onSubmit={(e) => e.preventDefault()}>
        <ListField>
          <FirstItem>
            {" "}
            <Label>Name: </Label>
            <CustomInput
              type="text"
              placeholder="name"
            />
          </FirstItem>
          {error && <ErrorField style={{ color: "red" }}>{error}</ErrorField>}
          <TwoItem>
            {" "}
            <Label>Email: </Label>
            <CustomInput
              type="email"
              placeholder="email"
              onChange={(e) => setRegistrEmail(e.target.value)}
              required
            />
          </TwoItem>
          <ThreeItem>
            {" "}
            <Label>Password:</Label>
            <CustomInput
              type="password"
              placeholder="password"
              onChange={(e) => setRegistrPassword(e.target.value)}
              required
            />
          </ThreeItem>
        </ListField>
        <ButtonRegistration onClick={registration}>
          registration
        </ButtonRegistration>
      </form>
    </>
  );
}
