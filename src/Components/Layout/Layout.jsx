import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import ModalForm from "../Modal/ModalForm";
import {
  CustomLinkHome,
  LoganButton,
  MenuItem,
  MenuList,
  NavWrapper,
  RegistrButton,
  RegistrList,
  RegistrListItem,
} from "./layout.styled";
import Registration from "../RegistrationForm/Registration";
import LoginForm from "../LoganForm/LoginForm";
import { auth } from "../../firebase-config";
import { validateEmail, validatePassword } from "../../utils/validate";

export default function Layout() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [registrEmail, setRegistrEmail] = useState("");
  const [registrPassword, setRegistrPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const registration = async () => {
    setError(null);
    if (!validateEmail(registrEmail) || !validatePassword(registrPassword)) {
      setError("помилка пошти чи паролю (6 сим.)");
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registrEmail,
        registrPassword
      );
      setRegistrEmail("");
      setRegistrPassword("");
      navigate("/");
      console.log(user);
    } catch (error) {
      console.error("Помилка реєстрації:", error.message);
    }
  };

  const login = async () => {
    setError(null);
    if (!validateEmail(loginEmail) || !validatePassword(loginPassword)) {
      setError("помилка пошти чи паролю (6 сим.)");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      reset();
      navigate("movies");
      window.location.reload();
      console.log(user);
    } catch (error) {
      console.error("Помилка реєстрації:", error.message);
    }
  };

  const reset = () => {
    setLoginEmail("");
    setLoginPassword("");
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("помилка виходу:", error.message);
    }
  };

  const toggleModalLogin = () =>
    setLoginModal((prevShowModal) => !prevShowModal);

  const toggleModalRegister = () =>
    setRegisterModal((prevShowModal) => !prevShowModal);

  return (
    <>
      <NavWrapper>
        <MenuList>
          <MenuItem className={location.pathname === "/" ? "active" : ""}>
            <CustomLinkHome to="/">Home</CustomLinkHome>
          </MenuItem>
          <MenuItem className={location.pathname === "/movies" ? "active" : ""}>
            <CustomLinkHome to="/movies">Movies</CustomLinkHome>
          </MenuItem>
        </MenuList>
        <RegistrList>
          <RegistrListItem>
            <RegistrButton
              type="button"
              onClick={toggleModalRegister}
            >
              registration
            </RegistrButton>
            {registerModal && (
              <ModalForm onClose={toggleModalRegister}>
                <Registration
                  setRegistrEmail={setRegistrEmail}
                  setRegistrPassword={setRegistrPassword}
                  registration={registration}
                  user={user}
                  error={error}
                />
              </ModalForm>
            )}
          </RegistrListItem>

          <RegistrListItem>
            {!auth.currentUser ? (
              <LoganButton
                type="button"
                onClick={toggleModalLogin}
              >
                login
              </LoganButton>
            ) : (
              <button
                type="button"
                onClick={logout}
              >
                sighOut
              </button>
            )}
            {loginModal && (
              <ModalForm onClose={toggleModalLogin}>
                <LoginForm
                  setLoginEmail={setLoginEmail}
                  setLoginPassword={setLoginPassword}
                  login={login}
                  user={user}
                  error={error}
                />
              </ModalForm>
            )}
          </RegistrListItem>
        </RegistrList>
      </NavWrapper>
      <Outlet />
    </>
  );
}
